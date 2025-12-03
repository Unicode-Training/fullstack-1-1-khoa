<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $name): Response
    {
        $user = $request->user;
        $roles = $user->roles()->with('permissions')->get();
        $permissionUnique = [];
        foreach ($roles as $role) {
            foreach ($role->permissions as $item) {
                if (!in_array($item->name, $permissionUnique)) {
                    array_push($permissionUnique, $item->name);
                }
            }
        }
        if (in_array($name, $permissionUnique)) {
            return $next($request);
        }
        return response()->json([
            'success' => false,
            'Permission deny'
        ], 403);
    }
}
