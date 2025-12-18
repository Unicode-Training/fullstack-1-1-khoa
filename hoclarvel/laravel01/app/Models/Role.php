<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $fillable = ['name'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'users_roles', 'role_id', 'user_id', 'id', 'id');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'roles_permissions', 'role_id', 'permission_id', 'id', 'id');
    }
}
