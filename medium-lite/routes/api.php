<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\CheckAdmin;

// {{baseUrl}}/api/...

route::post('/user/login', [usercontroller::class, 'login']);
route::post('/user/registry', [usercontroller::class, 'registry']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{slug}', [PostController::class, 'show']);
Route::get('/posts/search', [PostController::class, 'search']);
Route::get('/users/{id}/posts', [PostController::class, 'userPosts']);
Route::get('/categories', [PostController::class, 'categories']);
Route::get('/tags', [PostController::class, 'tags']);
Route::get('/posts/{id}/comments', [PostController::class, 'comments']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [UserController::class, 'profile']);
    Route::post('/user/logout', [UserController::class, 'logout']);

    // Protected Post Routes
    Route::post('/posts', [PostController::class, 'store']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);
    Route::post('/posts/{id}/comments', [PostController::class, 'storeComment']);
    Route::post('/upload', [PostController::class, 'upload']);
});

route::middleware(['auth:sanctum', checkadmin::class])->group(function () {
    route::apiresource('/admin/posts', \app\http\controllers\admin\postcontroller::class);
    route::post('/upload-editor-image', [\app\http\controllers\admin\uploadcontroller::class, 'uploadimage']);
});
