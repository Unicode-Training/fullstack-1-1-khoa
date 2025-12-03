<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\PostService;
use App\Http\Services\UserService;
use Illuminate\Http\Request;

class UserPostController extends Controller
{
    private $userService = null;
    private $postService = null;
    public function __construct(UserService $userService, PostService $postService)
    {
        $this->userService = $userService;
        $this->postService = $postService;
    }
    public function index($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => "User not found"
            ], 404);
        }
        $posts = $this->postService->getPostsByUser($user, $request);
        return $posts;
    }

    public function create($id, Request $request)
    {
        $user = $this->userService->getOne($id);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => "User not found"
            ], 404);
        }
        return $this->postService->create($user, $request->all());
    }

    public function createByAuth(Request $request)
    {
        $request->validate([
            'title' => 'required'
        ]);
        $user = $request->user;
        return $this->postService->create($user, $request->all());
    }
}
