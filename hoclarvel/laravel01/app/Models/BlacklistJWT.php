<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlacklistJWT extends Model
{
    protected $table = 'blacklist_jwt';
    protected $fillable = ['token', 'expired'];
}
