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
}
