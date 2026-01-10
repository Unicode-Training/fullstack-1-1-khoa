<?php

namespace Database\Seeders;

use App\Models\Product;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();
        for ($i = 1; $i <= 50; $i++) {
            $product = new Product();
            $product->name = $faker->sentence();
            $product->slug = $faker->slug();
            $product->price = $faker->numberBetween(500000, 2000000);
            $product->status = $faker->numberBetween(0, 1);
            $product->content = $faker->randomHtml();
            $product->save();
        }
    }
}
