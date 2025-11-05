<?php

namespace App\Http\Services;

use App\Models\User;

class UserService
{
    public function getAll()
    {
        $users = User::where('status', 0)->paginate(3);
        return $users;
    }
}
