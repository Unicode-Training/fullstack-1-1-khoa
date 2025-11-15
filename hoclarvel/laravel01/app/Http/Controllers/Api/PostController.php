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

        return $this->postService->getAll($request);
    }

    public function show($id)
    {
        $post = $this->postService->getOne($id);
        if (!$post) {
            return response()->json([
                'success' => false,
                'message' => "Post not found"
            ]);
        }
        return $post;
    }

    public function delete($id)
    {
        return $this->postService->delete($id);
    }
}
