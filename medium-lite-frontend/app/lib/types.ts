export interface User {
    id: number;
    name: string;
    email: string;
    profile_photo_url?: string; // Assuming Laravel might send this, or use standard Avatar
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Taxonomy {
    id: number;
    name: string;
    slug: string;
    type: 'category' | 'tag'; // Based on typical Laravel polymorphism or shared table
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    body: string; // HTML content
    excerpt?: string; // Often useful for lists
    featured_image?: string; // URL
    user?: User; // Author
    user_id: number;
    categories?: Category[];
    tags?: Tag[];
    taxonomies?: Taxonomy[]; // Sometimes API returns mixed taxonomies
    created_at: string;
    updated_at: string;
    comments_count?: number; // Useful if available
    reading_time?: string; // Calculated on front or back
}

export interface Comment {
    id: number;
    body: string;
    user_id: number;
    user?: User;
    post_id: number;
    parent_comment_id?: number | null;
    children?: Comment[]; // Nested comments
    created_at: string;
    updated_at: string;
}

// API Response Wrappers
export interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
}

export interface PaginatedData<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
}

// Specific Responses
export type LoginResponse = ApiResponse<{
    token: string;
    user: User;
}>;

export type PostsResponse = ApiResponse<PaginatedData<Post>>;
export type SinglePostResponse = ApiResponse<Post>;
export type CategoriesResponse = ApiResponse<Category[]>;
export type TagsResponse = ApiResponse<Tag[]>;
export type CommentsResponse = ApiResponse<Comment[]>;
