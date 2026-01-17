<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\Category;
use App\Models\Tag;
use App\Models\PostTaxonomy;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostTaxonomyFactory extends Factory
{
    protected $model = PostTaxonomy::class;

    public function definition(): array
    {
        return [
            'post_id'       => Post::factory(),
            'taxonomy_id'   => Category::factory(),
            'taxonomy_type' => 'category',
            'primary'       => false,
        ];
    }

    public function tag(): static
    {
        return $this->state(fn (array $attributes) => [
            'taxonomy_type' => 'tag',
            'taxonomy_id'   => Tag::factory(),
            'primary'       => false,
        ]);
    }

    public function isPrimary(): static
    {
        return $this->state(fn (array $attributes) => [
            'primary' => true,
        ]);
    }
}
