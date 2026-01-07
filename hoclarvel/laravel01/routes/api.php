<?php

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\UserPostController;
use App\Http\Controllers\Api\Admin\RoleController;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\LearnQueueController;
use App\Http\Controllers\Api\UserCourseController;
use App\Mail\SendMailAlertLogin;

Route::prefix('/users')->middleware(['auth', 'permission'])->group(function () {
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
    Route::get('/', [PostController::class, 'index'])->middleware(['auth', 'permission:posts.view']);
    Route::get('/{id}', [PostController::class, 'show'])->middleware(['auth', 'permission:posts.view']);
    Route::delete('/{id}', [PostController::class, 'delete'])->middleware(['auth', 'permission:posts.delete']);

    //Thêm tài nguyên từ user đã đăng nhập
    Route::post('/', [UserPostController::class, 'createByAuth'])->middleware(['auth', 'permission:posts.create']);

    Route::put('/{id}', [PostController::class, 'update'])->middleware(['auth', 'permission:posts.update']);
});

Route::prefix('/courses')->group(function () {
    Route::get('/', [CourseController::class, 'index']);
    Route::prefix('/{id}')->group(function () {
        Route::get('/users', [UserCourseController::class, 'users']);
        Route::get('/', [CourseController::class, 'detail']);
        Route::patch('/', [CourseController::class, 'update']);
    });
    Route::post('/', [CourseController::class, 'create']);
});

//path + method (get, post, put, patch, delete)

Route::prefix('/auth')->group(function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::get('/profile', [LoginController::class, 'profile'])->middleware('auth');
    Route::put('/profile', [LoginController::class, 'updateProfile'])->middleware('auth');

    Route::post('/refresh-token', [LoginController::class, 'refreshToken']);
    Route::delete('/logout', [LoginController::class, 'logout'])->middleware('auth');
});

Route::prefix('/admin')->middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/roles', [RoleController::class, 'index']);
    Route::post('/roles', [RoleController::class, 'create']);
    Route::put('/roles/{id}', [RoleController::class, 'update']);
    Route::delete('/roles/{id}', [RoleController::class, 'delete']);

    Route::put('/roles/{id}/users', [RoleController::class, 'assignUsers']);
});

Route::get('/test-mail', function () {
    $name = 'Hoàng An';
    $user = (object)[
        'name' => $name,
        'login_time' => date('Y-m-d H:i:s'),
        'link' => 'https://unicode.vn/login'
    ];
    Mail::to('hoangan.web@gmail.com')->send(new SendMailAlertLogin($user));
});

Route::prefix('/learn-queue')->group(function () {
    Route::post('/dispatch', [LearnQueueController::class, 'dispatchQueue']);
    Route::post('/create', [LearnQueueController::class, 'create']);
});
