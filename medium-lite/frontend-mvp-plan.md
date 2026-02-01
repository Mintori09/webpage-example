# Frontend MVP Plan (Next.js 15)

This plan details the implementation of the "Medium-lite" frontend using Next.js 15 (App Router), leveraging **all 18 endpoints** available in the Laravel API.

## 1. Tech Stack & Configuration
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4.
- **Language**: TypeScript.
- **Data Fetching**: 
    - **Server Actions/Components**: For SEO-critical routes (`GET /posts`).
    - **Client Components**: For interactive elements (Comments, Dashboard).
- **Auth**: `js-cookie` + Context API.

## 2. Comprehensive API Mapping
This table maps every backend route to a specific frontend feature/component.

| Backend Route (`routes/api.php`) | Method | Frontend Feature / Component | Notes |
| :--- | :--- | :--- | :--- |
| **Auth** | | | |
| `/user/login` | GET/POST* | `/login` Page | *Fix backend route to POST recommended. |
| `/user/registry` | POST | `/register` Page | |
| `/user/logout` | POST | `AvatarDropdown` (Logout action) | Requires Auth Token. |
| `/me` | GET | `AuthProvider` (Global State) | Fetches user profile on load. |
| **Public Content** | | | |
| `/posts` | GET | `/` (Home), `/posts` (Archive) | Supports pagination, filtering. |
| `/posts/{slug}` | GET | `/posts/[slug]` (Article Reader) | Main content view. |
| `/posts/search` | GET | `Navbar` (Search Bar) | Redirects to `/search?q=...` |
| `/users/{id}/posts` | GET | `/u/[id]` (Public Profile) | Shows author's published posts. |
| `/categories` | GET | `CategoryList` (Sidebar), `Editor` | Filter lists & selection. |
| `/tags` | GET | `TagCloud` (Sidebar), `Editor` | Filter lists & selection. |
| `/posts/{id}/comments` | GET | `CommentsSection` | Loaded below the article. |
| **Protected Actions** | | | |
| `/posts` | POST | `/new-story` (Editor) | Create draft/published post. |
| `/posts/{id}` | PUT | `/p/[id]/edit` (Editor) | Update existing post. |
| `/posts/{id}` | DELETE | `/dashboard` (My Stories) | Delete action button. |
| `/posts/{id}/comments` | POST | `CommentForm` | Add new comment. |
| `/upload` | POST | `Editor` (Featured Image) | Upload cover image. |
| **Admin** | | | |
| `/admin/posts` | RES | `/admin/posts` (Admin Panel) | CRUD for admins only. |
| `/upload-editor-image` | POST | `Editor` (Rich Text) | Upload images inside body. |

## 3. Detailed Feature Specifications

### A. Core Pages

#### 1. Home Page (`app/page.tsx`)
- **API**: `GET /posts`
- **UI**: 
    - Hero: Latest featured post.
    - Feed: Infinite scroll or paginated list of `ArticleCard`.
    - Sidebar:
        - **Topics**: `GET /categories` (pills).
        - **Trending**: `GET /tags`.

#### 2. Search Results (`app/search/page.tsx`)
- **API**: `GET /posts/search?q={query}`
- **UI**: List of matching posts.

#### 3. Article Reader (`app/posts/[slug]/page.tsx`)
- **API**: `GET /posts/{slug}`
- **UI**:
    - **Header**: Title, Author (Link to `/u/[id]`), Date, Reading Time.
    - **Body**: Render HTML content from API.
    - **Footer**: Tags list.
    - **Comments**: `<CommentsSection postId={id} />` (`GET /posts/{id}/comments`).
        - **Add Comment**: Form calls `POST /posts/{id}/comments` (Requires Auth).

#### 4. Public User Profile (`app/u/[id]/page.tsx`)
- **API**: `GET /users/{id}/posts`
- **UI**:
    - User Info (Name, Avatar).
    - List of articles written by this user.

### B. Writer Experience (Protected)

#### 1. The Editor (`app/new-story/page.tsx`)
- **API**: 
    - Init: `GET /categories`, `GET /tags` (for selectors).
    - Save: `POST /posts` (Create) or `PUT /posts/{id}` (Update).
    - Media: 
        - Featured Image: `POST /upload`.
        - Content Images: `POST /upload-editor-image` (via Tiptap/Editor handler).
- **Features**:
    - Auto-save support (optional).
    - "Publish" vs "Save Draft" toggle.

#### 2. User Dashboard (`app/me/stories/page.tsx`)
- **API**: 
    - Data: Re-use `GET /users/{current_id}/posts`.
    - Delete: `DELETE /posts/{id}`.
- **UI**:
    - Tabs: Drafts | Published.
    - List with "Edit" (Link to editor) and "Delete" actions.

### C. Admin Panel (Optional MVP Addition)
- **Route**: `/admin` (Protected by `checkadmin`).
- **Index**: `GET /admin/posts` (Table view of all system posts).
- **Actions**: Moderate content (Delete/Edit any post).

## 4. Auth Implementation
- **Login (`/login`)**: Calls `GET /user/login` (Note: Fix method in backend if possible).
- **Register (`/register`)**: Calls `POST /user/registry`.
- **State**:
    - On load: Call `GET /me`.
    - If 401: clear state.
    - If 200: set `user` context.

## 5. Development Roadmap

1.  **Foundation**: Setup Next.js, Tailwind, and `api.ts` client.
2.  **Auth**: Implement Login/Register and `AuthProvider`.
3.  **Public Read**: Home, Search, Post Detail, Profile, Comments (Read).
4.  **Writer Flow**: Editor (w/ image uploads), Dashboard, Comments (Write).
5.  **Admin**: Basic Admin table (if user role = admin).
