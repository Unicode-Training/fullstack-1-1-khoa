<?php

namespace App\Core;

use App\Http\Services\AuthService;

class JWT
{
    private $authService = null;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function removeBlacklist()
    {
        $this->authService->deleteBlacklistsExpired();
    }
}
