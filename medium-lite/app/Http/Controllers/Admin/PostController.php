<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostController extends Controller
{
    use ApiResponser;

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'status' => 'required|in:draft,published',
            'taxonomies' => 'required|array',
            'taxonomies.*.id' => 'required|integer',
            'taxonomies.*.type' => 'required|in:category,tag',
            'taxonomies.*.primary' => 'boolean',
            'featured_image' => 'nullable|image|max:2048',
        ]);

        return DB::transaction(function () use ($request) {
            $post = Post::created([
                'title' => $request->title,
                'slug' => Str::slug($request->title).'-'.uniqid(),
                'body' => $request->body,
                'status' => $request->status,
                'user_id' => auth()->guard()->id(),
            ]);

            if ($request->has('taxonomies')) {
                // Delete existing taxonomies for this post
                $post->taxonomies()->delete();

                // Create new taxonomy relationships
                foreach ($request->taxonomies as $item) {
                    $post->taxonomies()->create([
                        'taxonomy_id' => $item['id'],
                        'taxonomy_type' => $item['type'], // 'category' or 'tag'
                        'primary' => $item['primary'] ?? false,
                    ]);
                }
            }

            return $this->successResponse($post->load(['taxonomies.category', 'taxonomies.tag']), 'Post created');
        });
    }

    public function update(Request $request, $id)
    {
        $post = Post::where('user_id', auth()->id())->findOrFail($id);

        $request->validate([
            'taxonomies' => 'nullable|array',
            'taxonomies.*.id' => 'required|integer',
        ]);

        return DB::transaction(function () use ($request, $post) {
            $post->update($request->only(['title', 'body', 'status']));

            // Cập nhật lại Taxonomy nếu có gửi lên
            if ($request->has('taxonomies')) {
                // Delete existing taxonomies for this post
                $post->taxonomies()->delete();

                // Create new taxonomy relationships
                foreach ($request->taxonomies as $item) {
                    $post->taxonomies()->create([
                        'taxonomy_id' => $item['id'],
                        'taxonomy_type' => $item['type'],
                        'primary' => $item['primary'] ?? false,
                    ]);
                }
            }

            if ($request->hasFile('featured_image')) {
                $post->addMediaFromRequest('featured_image')
                    ->toMediaCollection('featured_images');
            }

            $post->reading_time = $this->calculateReadingTime($post->body);
            $post->save();

            return $this->successResponse($post->load(['taxonomies.category', 'taxonomies.tag']), 'Post updated successfully');
        });
    }

    private function calculateReadingTime($text)
    {
        $wordsPerMinute = 200;
        $wordCount = str_word_count(strip_tags($text));

        return (int) ceil($wordCount / $wordsPerMinute);
    }

    public function destroy($id)
    {
        $post = Post::where('user_id', auth()->id())->findOrFail($id);
        $post->delete();

        return $this->successResponse(null, 'Post deleted successfully');
    }
}
