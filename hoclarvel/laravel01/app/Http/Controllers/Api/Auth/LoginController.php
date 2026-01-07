<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Services\AuthService;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    private $authService = null;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function login(Request $request)
    {
        $body = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        return $this->authService->login($body);
    }

    public function profile(Request $request)
    {
        return $request->user;
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user;
        if ($request->name) {
            $user->name = $request->name;
        }
        if ($request->email) {
            $user->email = $request->email;
        }
        $user->save();
        return $user;
    }

    public function refreshToken(Request $request)
    {
        $refreshToken = $request->refreshToken;
        $newToken = $this->authService->refreshToken($refreshToken);
        if (!$newToken) {
            return response()->json([
                'success' => false,
                'message' => 'Refresh token invalid'
            ], 401);
        }
        return $newToken;
    }

    public function logout(Request $request)
    {
        $user = $request->user;

        $status = $this->authService->logout($user, $request->jti, $request->expired);
        if (!$status) {

            return response()->json([
                'message' => 'Logout failed',
                'success' => false
            ], 500);
        }
        return response()->json([
            'message' => 'Logout successfuly',
            'success' => true,
            'date' => date('Y-m-d H:i:s')
        ]);
    }

    public function test()
    {
        return $this->authService->deleteBlacklistsExpired();
    }
}

//Viết API đăng ký tài khoản

//POST /api/auth/register

//Sau khi đăng ký thành công --> Dispatch Event: UserRegistered --> Listener gửi email thông báo chúc mừng đăng ký thành công

//Buổi sau: Cache