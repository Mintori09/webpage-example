
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
# Development Plan: Medium-Lite Website (Next.js + and Laravel API)

This plan outlines the development of a lightweight, Medium-inspired blogging platform. The system is split into two parts: a **Laravel API Backend** (existing codebase) and a **Next.js Frontend** (new application).

## 1. Project Goal
Create a "Medium-lite" blogging experience.
- **Backend**: Laravel application serving as a headless CMS/API.
- **Frontend**: Next.js application for High performance, SEO, and rigorous design implementation.
- **Database**: Use existing schema without modification.

## 2. Architecture

### Backend (Laravel API)
- **Role**: JSON API provider.
- **Auth**: Laravel Sanctum (SPA Authentication).
- **Controllers**: New `Api/PostController`, `Api/AuthController`, etc.
- **Resources**: API Resources to transform models into JSON.

### Frontend (Next.js)
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4.
- **State**: React Server Components (RSC) for fetching, Client Components for interaction.
- **Deployment**: Vercel or Node.js server.

### Database Schema (Locked)
Using existing tables: `users`, `posts`, `categories`, `tags`, `post_taxonomy`, `comments`.

## 3. API Plan
We will expose the following endpoints in `routes/api.php`.

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/user/login` | Issue Sanctum token / session cookie |
| POST | `/api/user/registry` | Create new user |
| POST | `/api/user/logout` | Revoke token |
| GET | `/api/me` | Get current authenticated user |

### Public Content
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/posts` | List posts (paginated, filter by category/tag) |
| GET | `/api/posts/{slug}` | Get single post details |
| GET | `/api/posts/search` | Search posts by title/body |
| GET | `/api/users/{id}/posts` | List posts by a specific user |
| GET | `/api/categories` | List all categories |
| GET | `/api/tags` | List all tags |
| GET | `/api/posts/{id}/comments` | Get comments for a post |

### User Actions (Protected)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/posts/{id}/comments` | Add a comment |
| POST | `/api/posts` | Create a post (Draft/Published) |
| PUT | `/api/posts/{id}` | Update a post |
| DELETE | `/api/posts/{id}` | Delete a post |
| POST | `/api/upload` | Upload image for post content |

### Admin
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/admin/posts` | List all posts (Admin only) |
| POST | `/api/upload-editor-image` | Upload image from Editor |

## 4. Design System (Next.js)
Using Tailwind CSS.
- **Typography**: `Merriweather` (Body), `Inter` (UI).
- **Theme**: Minimalist, ample whitespace, reading-focus. 
- **Components**:
    - `ArticleCard`: Minimal preview.
    - `ArticleReader`: Typography-focused layout `prose prose-lg`.
    - `Navbar`: Sticky, glassmorphism effect.

## 5. Implementation Phases

### Phase 1: API Development (Laravel)
- **Tasks**:
    - [x] Install/Configure Sanctum.
    - [x] Create API Resources (`PostResource`, `UserResource`).
    - [x] Implement `PostController` & `UserController`.
    - [x] Implement Protected Routes.
    - [x] Test endpoints.

### Phase 2: Frontend Setup (Next.js)
- **Tasks**:
    - [ ] Initialize Next.js project: `npx create-next-app@latest`.
    - [ ] Setup Tailwind V4.
    - [ ] Configure `axios` or `fetch` wrapper for API requests.
    - [ ] Setup global types/interfaces for API responses.

### Phase 3: Public Views
- **Tasks**:
    - [ ] **Home Page (`/`)**: Fetch and display recent posts.
    - [ ] **Post Page (`/posts/[slug]`)**: 
        - SSG/ISR or Dynamic Rendering.
        - Render Markdown/HTML body properly.
    - [ ] **Category Page (`/category/[slug]`)**: Filtered feed.

### Phase 4: Integration & Auth
- **Tasks**:
    - [ ] Login/Register Pages.
    - [ ] Persist auth state.
    - [ ] Commenting UI:
        - View comments (Public).
        - Post comment form (Protected, requires Login).

## 6. API Test Specification
This section defines the expected behavior and payloads for manual or automated testing (Postman/Bruno/Pest) for **ALL** endpoints.

### 6.1 Authentication

#### Login (`POST /api/user/login`)
- **Request**:
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": {
      "token": "1|laravel_sanctum_token...",
      "user": { "id": 1, "name": "User", "email": "user@example.com", ... }
    },
    "message": "Login successfully"
  }
  ```

#### Register (`POST /api/user/registry`)
- **Request**:
  ```json
  {
    "name": "New User",
    "email": "new@example.com",
    "password": "password",
    "password_confirmation": "password"
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "status": "success",
    "data": { "token": "...", "user": { ... } },
    "message": "Register successfully"
  }
  ```

#### Logout (`POST /api/user/logout`)
- **Auth**: Bearer Token
- **Response (200 OK)**:
  ```json
  { "status": "success", "data": null, "message": "Logged out successfully" }
  ```

#### Profile (`GET /api/me`)
- **Auth**: Bearer Token
- **Response (200 OK)**:
  ```json
  { "status": "success", "data": { "id": 1, ... }, "message": "User profile retrieved successfully" }
  ```

### 6.2 Public Content

#### List Posts (`GET /api/posts`)
- **Query Params**: `?limit=10`, `?category=slug`, `?tag=slug`
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": {
        "data": [
          {
            "id": 1,
            "title": "My Post",
            "slug": "my-post",
            "user": { "id": 1, "name": "Author" },
            "categories": [],
            "tags": []
          }
        ],
        "links": { ... },
        "meta": { ... }
    },
    "message": "Get posts successfully!"
  }
  ```

#### Single Post (`GET /api/posts/{slug}`)
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": { "id": 1, "title": "...", "body": "...", "user": {...}, "taxonomies": [...] },
    "message": "Get post details successfully!"
  }
  ```

#### Search (`GET /api/posts/search`)
- **Query Params**: `?q=keyword`
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": { "data": [...] },
    "message": "Search results for: keyword"
  }
  ```

#### User Posts (`GET /api/users/{id}/posts`)
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": { "data": [...] },
    "message": "User posts retrieved successfully"
  }
  ```

#### Categories (`GET /api/categories`)
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": [ { "id": 1, "name": "Tech", "slug": "tech" } ],
    "message": "Get categories successfully!"
  }
  ```

#### Tags (`GET /api/tags`)
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": [ { "id": 1, "name": "News", "slug": "news" } ],
    "message": "Get tags successfully!"
  }
  ```

#### Get Comments (`GET /api/posts/{id}/comments`)
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": [
        {
            "id": 1,
            "body": "Great post!",
            "user": { "name": "Commenter" },
            "children": [ { "id": 2, "body": "Reply", ... } ]
        }
    ],
    "message": "Get comments for post successfully!"
  }
  ```

### 6.3 User Actions (Protected)

#### Create Post (`POST /api/posts`)
- **Auth**: Bearer Token
- **Headers**: `Content-Type: multipart/form-data`
- **Request**:
    - `title`: "My New Post"
    - `body`: "<p>Content...</p>"
    - `status`: "published" (or "draft")
    - `featured_image`: (File, optional)
    - `taxonomies[0][id]`: 1
    - `taxonomies[0][type]`: "category"
- **Response (201 Created)**:
  ```json
  { "status": "success", "data": { "id": 2, "title": "My New Post", ... }, "message": "Post created successfully" }
  ```

#### Update Post (`PUT /api/posts/{id}`)
- **Auth**: Bearer Token
- **Note**: Laravel cannot handle `PUT` with `multipart/form-data` natively correctly sometimes. Use `POST` with `_method=PUT` if sending files, or JSON if just text.
- **Request**: Same as Create, fields optional.
- **Response (200 OK)**:
  ```json
  { "status": "success", "data": { ... }, "message": "Post updated successfully" }
  ```

#### Delete Post (`DELETE /api/posts/{id}`)
- **Auth**: Bearer Token (Must be owner)
- **Response (200 OK)**:
  ```json
  { "status": "success", "data": null, "message": "Post deleted successfully" }
  ```

#### Add Comment (`POST /api/posts/{id}/comments`)
- **Auth**: Bearer Token
- **Request**:
  ```json
  {
    "body": "My comment text",
    "parent_comment_id": null (or ID for reply)
  }
  ```
- **Response (201 Created)**:
  ```json
  { "status": "success", "data": { ... }, "message": "Comment added successfully" }
  ```

#### Upload Image (`POST /api/upload`)
- **Auth**: Bearer Token
- **Request**: `image` (File)
- **Response (200 OK)**:
  ```json
  {
    "status": "success",
    "data": { "url": "http://.../storage/uploads/..." },
    "message": "Image uploaded successfully"
  }
  ```

### 6.4 Admin

#### Admin Post List (`GET /api/admin/posts`)
- **Auth**: Bearer Token (Admin Role)
- **Response**: Standard pagination response.

#### Editor Upload (`POST /api/upload-editor-image`)
- **Auth**: Bearer Token (Admin Role - *Wait, check middleware*)
- **Request**: `image` (File)
- **Response**: `{ "url": "..." }`
