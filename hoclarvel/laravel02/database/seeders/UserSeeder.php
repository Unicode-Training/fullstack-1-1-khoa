<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $isExisting = User::where('email', 'admin@gmail.com')->first();
        if (!$isExisting) {
            $user = new User();
            $user->name = 'Admin';
            $user->email = 'admin@gmail.com';
            $user->password = Hash::make('123456');
            $user->save();
        }

        // User::factory()->count(10)->create();
        $user = User::factory()->count(10)->hasOrder(5)->create();
    }
}
