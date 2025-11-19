<?php

namespace App\Http\Middleware;

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
    public function __construct(JwtService $jwtService, UserService $userService)
    {
        $this->jwtService = $jwtService;
        $this->userService = $userService;
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
        return $next($request);
    }
}
