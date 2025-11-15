<?php

use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\UserCourseController;
use App\Http\Controllers\Api\UserPostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/users')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::prefix("{id}")->group(function () {
        Route::get('/', [UserController::class, 'show']);
        Route::get('/posts', [UserPostController::class, 'index']);
        Route::post('/posts', [UserPostController::class, 'create']);

        Route::get('/courses', [UserCourseController::class, 'courses']);

        Route::post('/courses', [UserCourseController::class, 'addCourse']);

        Route::put('/courses', [UserCourseController::class, 'updateCourse']);

        Route::delete('/courses', [UserCourseController::class, 'removeCourse']);

        Route::post('/create-course', [UserCourseController::class, 'createCourse']);
    });
    Route::post('/', [UserController::class, 'store']);
    Route::put('/{id}', [UserController::class, 'update']);
    Route::delete('/{id}', [UserController::class, 'delete']);
});

Route::prefix('/posts')->group(function () {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/{id}', [PostController::class, 'show']);
    Route::delete('/{id}', [PostController::class, 'delete']);
});

Route::prefix('/courses')->group(function () {
    Route::get('/', [CourseController::class, 'index']);
    Route::prefix('/{id}')->group(function () {
        Route::get('/users', [UserCourseController::class, 'users']);
    });
});

//path + method (get, post, put, patch, delete)