<?php

namespace App\Http\Services;

use App\Models\Post;

class PostService
{
    public function getPostsByUser($user, $request)
    {
        $query = $user->posts(); //Tạo query
        if ($request->query('keyword')) {
            $query->where('title', 'like', '%' . $request->query('keyword') . '%');
        }
        return $query->get();
    }

    public function getAll($request)
    {
        $query = Post::query();
        if ($request->query('keyword')) {
            $query->where('title', 'like', '%' . $request->query('keyword') . '%');
        }
        return $query->get();
    }

    public function getOne($id)
    {
        return Post::find($id);
    }

    public function delete($id)
    {
        $post = $this->getOne($id);
        $post->delete();
        return $post;
    }

    public function create($user, $body)
    {
        return $user->posts()->create($body);
    }
}
