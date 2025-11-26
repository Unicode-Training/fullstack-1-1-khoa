<?php

use App\Core\JWT;
use App\Http\Services\AuthService;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::call(function () {
    //Làm sao gọi được authService
    app(JWT::class)->removeBlacklist();
})->everyMinute();
