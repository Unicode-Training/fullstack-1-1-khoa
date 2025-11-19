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
}
