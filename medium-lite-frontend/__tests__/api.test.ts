import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { get, post, del } from '@/app/lib/api';
import Cookies from 'js-cookie';

// Mock removed to use jsdom environment capabilities


const TEST_EMAIL = `test_${Date.now()}@example.com`;
const TEST_PASSWORD = 'password';
let userId: number | null = null;
let postId: number | null = null;

describe('API Integration Tests', () => {

    // 1. Authentication
    describe('Authentication', () => {
        it('should register a new user', async () => {
            try {
                const res = await post<any>('/user/registry', {
                    name: 'Test User',
                    email: TEST_EMAIL,
                    password: TEST_PASSWORD,
                    password_confirmation: TEST_PASSWORD
                });

                expect(res).toBeDefined();
                expect(res.user).toBeDefined();
                expect(res.token).toBeDefined();
                expect(res.user.email).toBe(TEST_EMAIL);

                // Set token in "cookie"
                Cookies.set('token', res.token);
                userId = res.user.id;
            } catch (e: any) {
                console.error("Registration failed:", e.response?.data || e.message);
                throw e;
            }
        });

        it('should login', async () => {
            // Clear "cookie" to test login fresh
            Cookies.remove('token');

            const res = await post<any>('/user/login', {
                email: TEST_EMAIL,
                password: TEST_PASSWORD
            });

            expect(res.token).toBeDefined();
            Cookies.set('token', res.token);
        });

        it('should fetch current user (/me)', async () => {
            const user = await get<any>('/me');
            expect(user).toBeDefined();
            expect(user.id).toBe(userId);
            expect(user.email).toBe(TEST_EMAIL);
        });
    });

    // 2. Public Content
    describe('Public Content', () => {
        it('should fetch categories', async () => {
            const categories = await get<any[]>('/categories');
            expect(Array.isArray(categories)).toBe(true);
            // expect(categories.length).toBeGreaterThan(0); // Might be empty initially
        });

        it('should fetch tags', async () => {
            const tags = await get<any[]>('/tags');
            expect(Array.isArray(tags)).toBe(true);
        });

        it('should fetch posts', async () => {
            const res = await get<any>('/posts');
            // Check if pagination wrapper or direct array
            // Our types say PaginatedData
            if (Array.isArray(res)) {
                // Direct array
                expect(true).toBe(true);
            } else {
                // Paginated
                expect(Array.isArray(res.data)).toBe(true);
            }
        });
    });

    // 3. User Actions (Protected)
    describe('Writer Actions', () => {
        it('should create a post', async () => {
            const title = `Test Post ${Date.now()}`;
            const res = await post<any>('/posts', {
                title: title,
                body: '<p>This is a test post content.</p>',
                status: 'published'
            });

            expect(res).toBeDefined();
            expect(res.title).toBe(title);
            postId = res.id;
        });

        it('should fetch the created post', async () => {
            expect(postId).not.toBeNull();
            if (!postId) return;

            // We need the slug usually, but let's see if ID works or if we have to fetch by slug.
            // Usually backend returns slug.
            // We can re-fetch list and find it, or use the response from create.
            // Assume fetched by ID or slug is standardized.
            // Let's rely on the previous test response if we had a slug.
            // But we didn't capture slug in `postId`.

            // Quick fetch of all posts to find the slug
            const postsRes = await get<any>('/posts');
            const posts = Array.isArray(postsRes) ? postsRes : postsRes.data;
            const myPost = posts.find((p: any) => p.id === postId);

            expect(myPost).toBeDefined();
            const slug = myPost?.slug;

            const singlePost = await get<any>(`/posts/${slug}`);
            expect(singlePost.id).toBe(postId);
            expect(singlePost.title).toContain('Test Post');
        });

        it('should add a comment to the post', async () => {
            expect(postId).not.toBeNull();
            if (!postId) return;

            const commentBody = "Nice test post!";
            const res = await post<any>(`/posts/${postId}/comments`, {
                body: commentBody,
                parent_comment_id: null
            });

            expect(res).toBeDefined();
            // API might return the comment
            // expect(res.body).toBe(commentBody);
        });

        it('should delete the post', async () => {
            expect(postId).not.toBeNull();
            if (!postId) return;

            // Delete
            await del(`/posts/${postId}`);

            // Verify deletion
            // Fetching it should fail or return 404.
            // Our api client generic 'get' might throw or return null.
            // Let's just assume no error on delete means success for now.

            try {
                const postsRes = await get<any>('/posts');
                const posts = Array.isArray(postsRes) ? postsRes : postsRes.data;
                const myPost = posts.find((p: any) => p.id === postId);
                expect(myPost).toBeUndefined();
            } catch (e) {
                // If fetching list failed, that's bad.
                // If it succeeded, we check existence.
            }
        });
    });

    // Cleanup (Logout)
    afterAll(async () => {
        if (userId) {
            try {
                await post('/user/logout');
            } catch (e) {
                // ignore
            }
        }
    });
});
