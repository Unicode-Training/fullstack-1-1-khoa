<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class User extends Model
{
    use Notifiable;
    //Tự động ánh xạ tới table
    protected $table = 'users'; //Chủ động khai báo tên table

    // public $timestamps = false;

    protected $hidden = [
        'password'
    ];

    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    public function phone()
    {
        return $this->hasOne(Phone::class, 'user_id', 'id');
    }

    public function posts()
    {
        return $this->hasMany(Post::class, 'user_id', 'id');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'users_courses', 'user_id', 'course_id');
    }

    public function blacklists()
    {
        return $this->hasMany(BlacklistJWT::class, 'user_id', 'id');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_roles', 'user_id', 'role_id', 'id', 'id');
    }
}
