<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Services\PostService;
use App\Http\Controllers\Controller;

class PostController extends Controller
{

    private $postService = null;
    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }
    public function index(Request $request)
    {
        $user = $request->user;
        return $this->postService->getAll($request, $user);
    }

    public function show($id, Request $request)
    {
        $user = $request->user;
        $post = $this->postService->getOne($id, $user);
        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => "Post not found"
            ]);
        }
        return $post;
    }

    public function update(Request $request, $id)
    {
        $user = $request->user;
        $result = $this->postService->update($request->all(), $id, $user);

        if ((string)$result == 'not-found') {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 404);
        }
        if ((string)$result == 'permission') {
            return response()->json([
                'success' => false,
                'message' => 'User permission'
            ], 403);
        }
        return response()->json([
            'success' => true,
            'message' => 'Update post successful'
        ]);
    }

    public function delete($id, Request $request)
    {
        $user = $request->user;
        $result = $this->postService->delete($id, $user);
        if ((string)$result == 'not-found') {
            return response()->json([
                'success' => false,
                'message' => 'Post not found'
            ], 404);
        }
        if ((string)$result == 'permission') {
            return response()->json([
                'success' => false,
                'message' => 'User permission'
            ], 403);
        }
        return response()->json([
            'success' => true,
            'message' => 'Delete post successful'
        ]);
    }
}

//posts.view
//posts.create
//posts.update
//posts.delete