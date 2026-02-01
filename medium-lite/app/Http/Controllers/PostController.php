<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Traits\ApiResponser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Str;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    use ApiResponser;

    public function index(Request $request): JsonResponse
    {
        $limit = $request->get('limit', 10);

        $posts = Post::query()
            ->with(['user:id,name', 'categories:id,name,slug', 'tags:id,name,slug'])
            ->where('status', 'published')
            ->when($request->has('category'), function ($query) use ($request) {
                $query->whereHas('categories', function ($q) use ($request) {
                    $q->where('slug', $request->category);
                });
            })
            ->when($request->has('tag'), function ($query) use ($request) {
                $query->whereHas('tags', function ($q) use ($request) {
                    $q->where('slug', $request->tag);
                });
            })
            ->latest('published_at')
            ->paginate($limit);

        return $this->successResponse($posts, "Get posts successfully!");
    }

    public function show($slug): JsonResponse
    {
        $post = Post::where('slug', $slug)
            ->where('status', 'published')
            ->with(['user', 'categories', 'tags'])
            ->first();

        if (!$post) {
            return $this->errorResponse("Post not found!", Response::HTTP_NOT_FOUND);
        }

        return $this->successResponse($post, "Get post details successfully!");
    }

    public function categories(): JsonResponse
    {
        $categories = \App\Models\Category::all(['id', 'name', 'slug']);
        return $this->successResponse($categories, "Get categories successfully!");
    }

    public function tags(): JsonResponse
    {
        $tags = \App\Models\Tag::all(['id', 'name', 'slug']);
        return $this->successResponse($tags, "Get tags successfully!");
    }

    public function comments($id): JsonResponse
    {
        $post = Post::where('id', $id)->where('status', 'published')->first();

        if (!$post) {
            return $this->errorResponse("Post not found", Response::HTTP_NOT_FOUND);
        }

        $comments = $post->comments()
            ->with('user:id,name')
            ->whereNull('parent_comment_id') // Get top-level comments
            ->with('children.user:id,name') // Get replies
            ->latest()
            ->get();

        return $this->successResponse($comments, "Get comments for post successfully!");
    }

    public function search(Request $request)
    {
        $keyword = $request->get('q');

        if (!$keyword) {
            return $this->errorResponse('Search query is required', Response::HTTP_BAD_REQUEST);
        }

        $posts = Post::where('status', 'published')
            ->where(function ($query) use ($keyword) {
                $query->where('title', 'LIKE', "%{$keyword}%")
                    ->orWhere('body', 'LIKE', "%{$keyword}%");
            })
            ->with('user:id,name')
            ->latest('published_at')
            ->paginate(10);

        return $this->successResponse($posts, 'Search results for: ' . $keyword);
    }

    public function userPosts($id)
    {
        $posts = Post::where('user_id', $id)
            ->where('status', 'published')
            ->with('user:id,name')
            ->latest('published_at')
            ->paginate(10);

        if ($posts->isEmpty()) {
            return $this->errorResponse('No posts found for this user', Response::HTTP_NOT_FOUND);
        }

        return $this->successResponse($posts, 'User posts retrieved successfully');
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            "title" => "required|string|max:255",
            "body" => "required|string",
            "status" => "required|in:draft,published",
            "featured_image" => "nullable|image|max:2048",
            "taxonomies" => "nullable|array",
            "taxonomies.*.id" => "required|integer",
            "taxonomies.*.type" => "required|in:category,tag",
        ]);

        $post = DB::transaction(function () use ($validated, $request) {
            $data = [
                'title' => $validated['title'],
                'slug' => Str::slug($validated['title']) . '-' . uniqid(),
                'body' => $validated['body'],
                'status' => $validated['status'],
                'user_id' => $request->user()->id,
                'reading_time' => ceil(str_word_count(strip_tags($validated['body'])) / 200),
            ];

            if ($request->hasFile('featured_image')) {
                $path = $request->file('featured_image')->store('posts', 'public');
                $data['featured_image'] = Storage::url($path);
            }

            $post = Post::create($data);

            if (!empty($validated['taxonomies'])) {
                foreach ($validated['taxonomies'] as $taxonomy) {
                    $post->taxonomies()->create([
                        'taxonomy_id' => $taxonomy['id'],
                        'taxonomy_type' => $taxonomy['type'],
                        'primary' => $taxonomy['primary'] ?? false,
                    ]);
                }
            }

            return $post;
        });

        return $this->successResponse($post->load(['taxonomies', 'user']), "Post created successfully", Response::HTTP_CREATED);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $post = Post::where('id', $id)->where('user_id', $request->user()->id)->first();

        if (!$post) {
            return $this->errorResponse("Post not found or unauthorized", Response::HTTP_NOT_FOUND);
        }

        $validated = $request->validate([
            "title" => "sometimes|string|max:255",
            "body" => "sometimes|string",
            "status" => "sometimes|in:draft,published",
            "featured_image" => "nullable|image|max:2048",
            "taxonomies" => "nullable|array",
        ]);

        DB::transaction(function () use ($post, $validated, $request) {
            $updateData = collect($validated)->only(['title', 'body', 'status'])->toArray();

            if (isset($validated['body'])) {
                $updateData['reading_time'] = ceil(str_word_count(strip_tags($validated['body'])) / 200);
            }

            if ($request->hasFile('featured_image')) {
                $path = $request->file('featured_image')->store('posts', 'public');
                $updateData['featured_image'] = Storage::url($path);
            }

            $post->update($updateData);

            if ($request->has('taxonomies')) {
                $post->taxonomies()->delete();
                foreach ($validated['taxonomies'] as $taxonomy) {
                    $post->taxonomies()->create([
                        'taxonomy_id' => $taxonomy['id'],
                        'taxonomy_type' => $taxonomy['type'],
                        'primary' => $taxonomy['primary'] ?? false,
                    ]);
                }
            }
        });

        return $this->successResponse($post->fresh()->load(['taxonomies', 'user']), "Post updated successfully");
    }

    public function destroy(Request $request, $id): JsonResponse
    {
        $post = Post::where('id', $id)->where('user_id', $request->user()->id)->first();

        if (!$post) {
            return $this->errorResponse("Post not found or unauthorized", Response::HTTP_NOT_FOUND);
        }

        $post->delete();

        return $this->successResponse(null, "Post deleted successfully");
    }

    public function storeComment(Request $request, $id): JsonResponse
    {
        $request->validate([
            'body' => 'required|string',
            'parent_comment_id' => 'nullable|exists:comments,id'
        ]);

        $post = Post::findOrFail($id);

        $comment = $post->comments()->create([
            'body' => $request->body,
            'user_id' => $request->user()->id,
            'parent_comment_id' => $request->parent_comment_id ?? null,
        ]);

        return $this->successResponse($comment->load('user'), "Comment added successfully", Response::HTTP_CREATED);
    }

    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        $path = $request->file('image')->store('uploads', 'public');

        return $this->successResponse(['url' => Storage::url($path)], "Image uploaded successfully");
    }
}
