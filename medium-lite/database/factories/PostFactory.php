<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    public function definition(): array
    {
        $title = $this->faker->sentence();
        return [
            'title' => $title,
            'slug' => Str::slug($title) . '-' . $this->faker->unique()->numberBetween(1, 1000),
            'excerpt' => $this->faker->paragraph(2),
            'body' => $this->faker->paragraphs(5, true),
            'featured_image' => 'https://picsum.photos/800/600',
            'published_at' => now(),
            'status' => $this->faker->randomElement(['published', 'draft']),
            'reading_time' => $this->faker->numberBetween(1, 15),
            'user_id' => \App\Models\User::all()->random()->id ?? \App\Models\User::factory(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
