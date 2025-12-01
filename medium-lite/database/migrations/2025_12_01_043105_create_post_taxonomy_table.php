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
        Schema::create('post_taxonomy', function (Blueprint $table) {
            $table->unsignedBigInteger('taxonomy_id');
            $table->enum('taxonomy_type',['category','tag'])->default('category');
            $table->foreignId('post_id')->constrained('posts')->onDelete('cascade');
            $table->primary([ 'post_id','taxonomy_type', 'taxonomy_id']);
            $table->boolean('primary')->default(false);
            $table->index(['taxonomy_id', 'taxonomy_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_taxonomy');
    }
};
