<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); //Khóa chính, auto increment, kiểu bigint
            $table->string('name', 150)->nullable(); //varchar(255)
            $table->integer('price')->default(0); //int
            $table->integer('sale_price')->default(0); //int
            $table->boolean('status')->default(true); //tinyint
            $table->text('description')->nullable(); //text
            $table->timestamps(); //created_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
