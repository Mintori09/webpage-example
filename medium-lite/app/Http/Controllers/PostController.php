<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Traits\ApiResponser;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    use ApiResponser;

    public function index(Request $request): JsonResponse
    {
        $query = Post::query()->where('status', "published");
        $perPage = $request->get('per_page', 10);
        $posts = $query->latest()->paginate($perPage);

        return $this->successResponse(["message" => "Get post successfully!", "data" => $posts  ],Response::HTTP_OK);
    }
    public function show($slug)
    {
        $post = Post::where('slug', $slug)
            ->where('status', 'published')
            ->first();

        if (!$post) {
            return $this->errorResponse("Post not found!", \Illuminate\Http\Response::HTTP_NOT_FOUND);
        }

        return $this->successResponse([
            "message" => "Get post with slug successfully!",
            "data"    => $post
        ], \Illuminate\Http\Response::HTTP_OK);
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
}
