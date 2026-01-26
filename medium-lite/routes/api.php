<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\CheckAdmin;

// {{baseUrl}}/api/...

route::get('/user/login', [ usercontroller::class, 'login' ]);
route::post('/user/registry', [ usercontroller::class, 'registry' ]);
route::get('/posts', [ postcontroller::class, 'index' ]);
route::get('/posts/{slug}', [ postcontroller::class, 'show' ]);
route::get('/posts/search', [ postcontroller::class, 'search' ]);
route::get('/users/{id}/posts', [ postcontroller::class, 'userPosts' ]);

route::middleware('auth:sanctum')->group(function () {
    route::get('/me', [usercontroller::class, 'profile']);
    route::post('/user/logout', [usercontroller::class, 'logout']);
});

route::middleware(['auth:sanctum', checkadmin::class])->group(function () {
    route::apiresource('/admin/posts', \app\http\controllers\admin\postcontroller::class);
    route::post('/upload-editor-image', [\app\http\controllers\admin\uploadcontroller::class, 'uploadimage']);
});
