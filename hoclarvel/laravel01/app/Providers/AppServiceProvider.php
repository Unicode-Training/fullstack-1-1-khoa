<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Event;
use App\Events\LearnQueueCreatedEvent;
use Illuminate\Support\ServiceProvider;
use App\Listeners\LearnQueueCreatedListener;
use App\Listeners\LearnQueueCreated2Listener;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(
            LearnQueueCreatedEvent::class,
            LearnQueueCreatedListener::class,
        );
        Event::listen(
            LearnQueueCreatedEvent::class,
            LearnQueueCreated2Listener::class,
        );
        DB::listen(function ($query) {
            Log::info(
                $query->sql,
                ['bindings' => $query->bindings, 'time' => $query->time]
            );
        });
    }
}
