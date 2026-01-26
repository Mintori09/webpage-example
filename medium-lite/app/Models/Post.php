<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin Builder
 */
class Post extends Model
{
    protected $fillable = ['title', 'slug', 'excerpt', 'body', 'status', 'user_id', 'reading_time'];

    public function taxonomies(): HasMany|Post
    {
        return $this->hasMany(PostTaxonomy::class, 'post_id');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'post_taxonomy', 'post_id', 'taxonomy_id')
            ->wherePivot('taxonomy_type', 'category')
            ->withPivot('taxonomy_type', 'primary');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'post_taxonomy', 'post_id', 'taxonomy_id')
            ->wherePivot('taxonomy_type', 'tag')
            ->withPivot('taxonomy_type', 'primary');
    }
}
