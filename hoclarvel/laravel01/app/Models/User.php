<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
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
}
