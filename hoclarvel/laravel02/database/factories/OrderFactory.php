<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = [
            'pending',
            'paid',
            'completed',
            'cancel'
        ];
        return [
            'total' => fake()->numberBetween(500000, 2000000),
            'status' => $status[array_rand($status)],
            'user_id' => 2
        ];
    }
}
