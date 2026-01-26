<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTaxonomy extends Model
{
    use HasFactory;
    protected $table = 'post_taxonomy';
    public $timestamps = false;

    // protected $primaryKey = [...];

    public $incrementing = false;

    protected $fillable = [
        'post_id',
        'taxonomy_id',
        'taxonomy_type',
        'primary',
    ];
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'taxonomy_id');
    }

    public function tag()
    {
        return $this->belongsTo(Tag::class, 'taxonomy_id');
    }

    // Get the actual taxonomy (Category or Tag) based on taxonomy_type
    public function taxonomy()
    {
        if ($this->taxonomy_type === 'category') {
            return $this->category();
        }
        return $this->tag();
    }

    // Accessor to get the taxonomy data
    public function getTaxonomyAttribute()
    {
        if ($this->taxonomy_type === 'category') {
            return $this->category;
        }
        return $this->tag;
    }
}
