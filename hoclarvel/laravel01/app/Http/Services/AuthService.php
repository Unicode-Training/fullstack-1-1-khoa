<?php

namespace App\Http\Services;

use App\Models\BlacklistJWT;
use Exception;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Request;

class AuthService
{
    private $userService = null;
    private $jwtService = null;
    public function __construct(UserService $userService, JwtService $jwtService)
    {
        $this->userService = $userService;
        $this->jwtService = $jwtService;
    }
    public function login($body)
    {
        //Tìm trong database xem có email không?
        $user = $this->userService->getUserByEmail($body['email']);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated'
            ]);
        }
        $passwordHash = $user->password;
        if (!Hash::check($body['password'], $passwordHash)) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated'
            ]);
        }
        return [
            'access_token' => $this->jwtService->createToken($user),
            'refresh_token' => $this->jwtService->createRefreshToken($user)
        ];
    }

    public function refreshToken($refreshToken)
    {
        //Verify refresh token
        $decoded = $this->jwtService->verifyRefreshToken($refreshToken);
        if (!$decoded) {
            return false;
        }
        $decoded->id = $decoded->userId;
        return [
            'access_token' => $this->jwtService->createToken($decoded),
            'refresh_token' => $this->jwtService->createRefreshToken($decoded)
        ];
    }

    public function logout($user, $token, $expired)
    {
        try {
            return $user->blacklists()->create(
                [
                    'token' => $token,
                    'expired' => $expired
                ]
            );
        } catch (Exception $e) {
            return false;
        }
    }

    public function isBlacklist($jti, $user)
    {
        return $user->blacklists()->where('token', $jti)->count();
    }

    public function deleteBlacklistsExpired()
    {
        return BlacklistJWT::where('expired', '<=', date('Y-m-d H:i:s'))->delete();
    }
}
