CREATE TABLE `users` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(50) UNIQUE NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `email_verified_at` timestap NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'user',
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `posts` (
  `post_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) UNIQUE NOT NULL,
  `excerpt` text,
  `body` text NOT NULL,
  `featured_image` varchar(255),
  `published_at` datetime DEFAULT (CURRENT_TIMESTAMP),
  `status` varchar(20) DEFAULT 'draft',
  `reading_time` int,
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `categories` (
  `category_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) UNIQUE NOT NULL,
  `slug` varchar(50) UNIQUE NOT NULL
);

CREATE TABLE `tags` (
  `tag_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) UNIQUE NOT NULL,
  `slug` varchar(50) UNIQUE NOT NULL
);

CREATE TABLE `post_taxonomy` (
  `post_id` int,
  `taxonomy_id` int,
  `taxonomy_type` enum(category,tag) DEFAULT 'category',
  `primary` key(post_id,taxonomy_id,taxonomy_type)
);

CREATE TABLE `comments` (
  `comment_id` int PRIMARY KEY AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `user_id` int,
  `parent_comment_id` int,
  `body` text NOT NULL,
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
  `updated_at` timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `post_analytics` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `post_id` int,
  `user_id` int,
  `event` enum(view,like) NOT NULL,
  `created_at` timestamp DEFAULT (CURRENT_TIMESTAMP)
);

CREATE INDEX `post_taxonomy_index_0` ON `post_taxonomy` (`taxonomy_type`, `taxonomy_id`);

ALTER TABLE `posts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `post_taxonomy` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `post_analytics` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

ALTER TABLE `post_analytics` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
