# Medium-Lite Frontend

A modern, responsive blogging platform frontend built with Next.js 15 (App Router) and Tailwind CSS v4, integrated with a Laravel API backend.

## Tech Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **State Management**: React Context (AuthProvider) + Server Components
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Configure API**
   Ensure your Laravel API is running (default: `http://localhost:8000/api`).
   If different, create a `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://your-api-url/api
   ```

3. **Run Development Server**
   ```bash
   pnpm dev
   ```

## Application Structure & Pages

The application is structured using the Next.js App Router. Below is a guide to the key pages and their functionality.

### 1- Public Content

#### **Home Page**
- **Path**: `/app/page.tsx`
- **Route**: `/`
- **Description**: The landing page of the application. It fetches the latest posts from the API and displays them in a feed alongside a sidebar of recommended topics.
- **Key Features**: Server-side fetching, infinite scrolling hook (ready structure), responsive layout.

#### **Post Detail**
- **Path**: `/app/posts/[slug]/page.tsx`
- **Route**: `/posts/{slug}`
- **Description**: Displays the full content of a single story.
- **Key Features**: 
    - Renders rich HTML content safely.
    - Shows author details, publication date, and reading time.
    - Integrates the **Comments Section** at the bottom.

#### **Search Results**
- **Path**: `/app/search/page.tsx`
- **Route**: `/search?q={query}`
- **Description**: Displays search results based on the user's query.
- **Key Features**: Dynamic query parameter handling, re-uses `ArticleCard` for consistency.

#### **User Profile**
- **Path**: `/app/u/[id]/page.tsx`
- **Route**: `/u/{userId}`
- **Description**: Public profile page for a user.
- **Key Features**: Displays user information (avatar, name) and a list of stories published by that user.

### 2- Authentication

#### **Login**
- **Path**: `/app/(auth)/login/page.tsx`
- **Route**: `/login`
- **Description**: User sign-in form.
- **Key Features**: Clients-side validation, integrates with `AuthProvider` to store Sanctum tokens in cookies.

#### **Register**
- **Path**: `/app/(auth)/register/page.tsx`
- **Route**: `/register`
- **Description**: New user registration form.
- **Key Features**: Form validation (password confirmation), auto-login upon successful registration.

### 3- Writer Experience (Protected)

#### **New Story (Editor)**
- **Path**: `/app/new-story/page.tsx`
- **Route**: `/new-story`
- **Description**: The writing interface.
- **Key Features**: 
    - Clean, distraction-free writing environment.
    - Title and Body inputs.
    - Category selection.
    - Publishing functionality (creates `published` post via API).
    - Protected route (redirects to login if unauthenticated).

#### **My Stories (Dashboard)**
- **Path**: `/app/me/stories/page.tsx`
- **Route**: `/me/stories`
- **Description**: Dashboard for the logged-in user to manage their content.
- **Key Features**: 
    - Lists all posts authored by the current user.
    - Delete functionality.
    - Edit links (hooks provided).

## Key Components

- **Navbar** (`components/Navbar.tsx`): Sticky header with search, write link, and user dropdown menu. Handles auth state display.
- **Sidebar** (`components/Sidebar.tsx`): Displays recommended topics (categories) and other side content.
- **ArticleCard** (`components/ArticleCard.tsx`): Reusable component to display a post summary (title, excerpt, author, thumbnail) in lists.
- **CommentsSection** (`components/CommentsSection.tsx`): Handles fetching and posting comments for a specific article.
- **AuthProvider** (`context/AuthProvider.tsx`): Global context provider that manages `user` state and handles Login/Register/Logout logic.
