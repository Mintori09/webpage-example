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
            "message" => "Get post successfully!",
            "data"    => $post
        ], \Illuminate\Http\Response::HTTP_OK);
    }
}
