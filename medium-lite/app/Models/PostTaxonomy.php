<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTaxonomy extends Model
{
   use HasFactory;
    protected $table = 'post_taxonomy';

    public $timestamps = false;

    protected $primaryKey = ['post_id', 'taxonomy_type', 'taxonomy_id'];
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
}
