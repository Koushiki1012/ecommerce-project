<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
        // Prefetch setting for Vite
        Vite::prefetch(concurrency: 3);

        // Share authenticated user data globally to Inertia pages
        Inertia::share('auth', function () {
            return [
                'user' => Auth::user(),
            ];
        });
    }
}
