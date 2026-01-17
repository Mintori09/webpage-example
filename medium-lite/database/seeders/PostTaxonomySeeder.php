<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Category;
use App\Models\Tag;
use App\Models\PostTaxonomy;

class PostTaxonomySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Đảm bảo có sẵn Categories và Tags (Sử dụng Factory hoặc tạo thủ công)
        $categories = Category::all();
        if ($categories->isEmpty()) {
            $categories = Category::factory()->count(5)->create();
        }

        $tags = Tag::all();
        if ($tags->isEmpty()) {
            $tags = Tag::factory()->count(10)->create();
        }

        // 2. Lấy tất cả bài viết hiện có
        $posts = Post::all();

        if ($posts->isEmpty()) {
            $this->command->warn("Chưa có bài viết nào! Hãy chạy PostSeeder trước.");
            return;
        }

        // 3. Gán Taxonomy cho từng bài viết
        foreach ($posts as $post) {
            // Gán 1 Category làm Primary (Bắt buộc)
            PostTaxonomy::factory()->create([
                'post_id' => $post->id,
                'taxonomy_id' => $categories->random()->id,
                'taxonomy_type' => 'category',
                'primary' => true,
            ]);

            // Gán ngẫu nhiên 2-3 Tags cho mỗi bài viết
            $randomTags = $tags->random(rand(2, 3));
            foreach ($randomTags as $tag) {
                // Sử dụng updateOrCreate để an toàn tuyệt đối với khóa chính phức hợp
                PostTaxonomy::updateOrCreate([
                    'post_id' => $post->id,
                    'taxonomy_id' => $tag->id,
                    'taxonomy_type' => 'tag',
                ], [
                    'primary' => false,
                ]);
            }
        }

        $this->command->info('Đã gán thành công Category và Tags cho ' . $posts->count() . ' bài viết.');
    }
}
