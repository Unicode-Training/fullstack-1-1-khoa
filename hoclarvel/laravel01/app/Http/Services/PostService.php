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

    public function getAll($request, $user)
    {
        // $query = Post::query();
        $query = $user->posts();
        if ($request->query('keyword')) {
            $query->where('title', 'like', '%' . $request->query('keyword') . '%');
        }
        // $query->where('user_id', $user->id);
        return $query->get();
    }

    public function getOne($id, $user)
    {
        return $user->posts()->where('id', $id)->first();
    }

    public function delete($id, $user)
    {
        $post = Post::find($id);
        if (!$post) {
            return 'not-found';
        }
        if ($post->user_id != $user->id) {
            return 'permission';
        }
        $post->delete();
        return $post;
    }

    public function create($user, $body)
    {
        return $user->posts()->create($body);
    }

    public function update($body, $id, $user)
    {
        $post = Post::find($id);
        if (!$post) {
            return 'not-found';
        }
        if ($post->user_id != $user->id) {
            return 'permission';
        }
        return $post->update($body);
    }
}
