<?php

namespace App\Http\Services;

use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\JWTExceptionWithPayloadInterface;
use Firebase\JWT\Key;

class JwtService
{
    private $jwtSecret = null;
    private $jwtRefreshSecret = null;
    public function __construct()
    {
        $this->jwtSecret = env('JWT_SECRET');
        $this->jwtRefreshSecret = env('JWT_REFRESH_SECRET');
    }
    public function createToken($user)
    {
        $userId = $user->id;
        $email = $user->email;
        $jwt = JWT::encode([
            'userId' => $userId,
            'email' => $email,
            'iat' => time(),
            'exp' => time() + 3600
        ], $this->jwtSecret, 'HS256');
        return $jwt;
    }

    public function createRefreshToken($user)
    {
        $userId = $user->id;
        $email = $user->email;
        $jwt = JWT::encode([
            'userId' => $userId,
            'email' => $email,
            'iat' => time(),
            'exp' => time() + 3600 * 24 * 7
        ], $this->jwtRefreshSecret, 'HS256');
        return $jwt;
    }

    public function verifyToken($token)
    {
        try {
            return JWT::decode($token, new Key($this->jwtSecret, 'HS256'));
        } catch (\Exception $e) {
            return false;
        }
    }
    public function verifyRefreshToken($token)
    {
        try {
            return JWT::decode($token, new Key($this->jwtRefreshSecret, 'HS256'));
        } catch (\Exception $e) {
            return false;
        }
    }
}
