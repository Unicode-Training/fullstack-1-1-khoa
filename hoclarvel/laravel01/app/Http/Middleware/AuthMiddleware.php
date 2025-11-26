<?php

namespace App\Http\Middleware;

use App\Http\Services\AuthService;
use App\Http\Services\JwtService;
use App\Http\Services\UserService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    private $jwtService = null;
    private $userService = null;
    private $authService = null;
    public function __construct(JwtService $jwtService, UserService $userService, AuthService $authService)
    {
        $this->jwtService = $jwtService;
        $this->userService = $userService;
        $this->authService = $authService;
    }
    public function handle(Request $request, Closure $next): Response
    {
        $authorization = $request->header('authorization') ?? "";
        $tokenArr = explode(' ', $authorization);
        $token = end($tokenArr);
        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorize'
            ], 401);
        }
        $decoded = $this->jwtService->verifyToken($token);
        if (!$decoded) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorize'
            ], 401);
        }

        $user = $this->userService->getOne($decoded->userId);
        $request->user = $user;
        $request->token = $token;
        $request->jti = $decoded->jti;
        $request->expired = date('Y-m-d H:i:s', $decoded->exp);

        //Lấy jti
        //Truy vấn với bảng blacklist
        //- Tồn tại --> 401
        //- Không tồn tại --> Bỏ qua
        $isBlacklist = $this->authService->isBlacklist($decoded->jti, $user);
        if ($isBlacklist) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorize'
            ], 401);
        }

        return $next($request);
    }
}
