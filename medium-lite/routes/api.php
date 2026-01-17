<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\CheckAdmin;

// {{baseUrl}}/api/...

Route::get('/user/login', [ UserController::class, 'login' ]);
Route::post('/user/registry', [ UserController::class, 'registry' ]);
Route::get('/posts', [ PostController::class, 'index' ]);
Route::get('/posts/{slug}', [ PostController::class, 'show' ]);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [UserController::class, 'profile']);
    Route::post('/user/logout', [UserController::class, 'logout']);
});

Route::middleware(['auth:sanctum', CheckAdmin::class])->group(function () {
});
