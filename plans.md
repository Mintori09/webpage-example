# Project Plan: Stitich — Medium-like Blogging Platform

**Version:** 1.0
**Date:** October 26, 2023
**Status:** Planning Phase

---

## **1. Project Overview**

**Objective:**
Design a complete, modern, and minimalistic blogging platform ("Stitich") inspired by Medium. The project includes a full high-fidelity UI/UX design package and a comprehensive API specification to support a **Next.js frontend** communicating with a **Laravel backend**.

**Core Philosophy:**

- **Content-First:** Prioritize typography and whitespace to enhance reading focus.
- **Role-Based:** Distinct and optimized workflows for **Readers** (consumption) and **Authors** (creation).
- **Scalable Architecture:** A decoupled architecture using Next.js for the interface and Laravel for the robust API layer.

---

## **2. Scope of Work**

1.  **UI/UX Design:** Complete wireframes and high-fidelity designs for all public and private pages.
2.  **API Design:** Definition of RESTful API endpoints required for the Next.js frontend to consume data from the Laravel backend.
3.  **Deliverables:** Figma design files and technical API documentation.

---

## **3. Technical Stack**

- **Frontend:** Next.js (React)
- **Backend:** Laravel (API)
- **Authentication:** Laravel Sanctum or JWT
- **Database:** MySQL / PostgreSQL

---

## **4. User Workflows**

### **Reader Workflow**

> **Discover** (Home/Search) $\to$ **Read** (Post Detail) $\to$ **Interact** (Like, Comment, Share) $\to$ **Register/Login** (Optional)

### **Author Workflow**

> **Login** $\to$ **Dashboard** (Overview) $\to$ **Create** (Editor) $\to$ **Configure** (Meta/Tags) $\to$ **Publish** $\to$ **Analyze** (Stats)

---

## **5. Functional Requirements & API Specification**

The following table maps the required UI pages to their specific features and the corresponding API endpoints needed for the Next.js frontend.

### **Phase I: Public Pages (Reader-Facing)**

| Page / Component                         | UI Features                                                                                           | API Endpoints (Next.js $\to$ Laravel)                                                                             |
| :--------------------------------------- | :---------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **1. Homepage** (`/`)                    | • Hero/Featured article<br>• Latest posts feed (infinite scroll)<br>• Sidebar: Top Tags, Top Authors  | `GET /api/posts/featured`<br>`GET /api/posts?page={n}`<br>`GET /api/tags/trending`<br>`GET /api/authors/trending` |
| **2. Post Detail** (`/posts/[slug]`)     | • Full content rendering<br>• Author info & Publish date<br>• Like & Share buttons<br>• Related posts | `GET /api/posts/{slug}`<br>`GET /api/posts/{slug}/related`<br>`POST /api/posts/{slug}/like`                       |
| **3. Comments** (Component)              | • List comments<br>• Add new comment form                                                             | `GET /api/posts/{slug}/comments`<br>`POST /api/posts/{slug}/comments`                                             |
| **4. Archives** (`/category`, `/tag`)    | • Filtered post list by category or tag                                                               | `GET /api/categories/{slug}/posts`<br>`GET /api/tags/{slug}/posts`                                                |
| **5. Author Profile** (`/author/[user]`) | • User Avatar, Bio, Name<br>• List of published posts                                                 | `GET /api/users/{username}`<br>`GET /api/users/{username}/posts`                                                  |
| **6. Search** (`/search`)                | • Search input & Real-time results                                                                    | `GET /api/posts/search?q={query}`                                                                                 |

### **Phase II: Authentication & Settings**

| Page / Component      | UI Features                                          | API Endpoints (Next.js $\to$ Laravel)                                                  |
| :-------------------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **7. Authentication** | • Login Form<br>• Register Form<br>• Forgot Password | `POST /api/auth/login`<br>`POST /api/auth/register`<br>`POST /api/auth/password/email` |
| **8. User Settings**  | • Update Avatar/Bio<br>• Change Password             | `PUT /api/user/profile`<br>`PUT /api/user/password`                                    |

### **Phase III: Author Dashboard**

| Page / Component                       | UI Features                                                                      | API Endpoints (Next.js $\to$ Laravel)                                                                  |
| :------------------------------------- | :------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **9. Dashboard** (`/dashboard`)        | • Tabs: Published vs Drafts<br>• Quick Stats (Views, Likes)<br>• CTA: "New Post" | `GET /api/user/stats`<br>`GET /api/user/posts?status=published`<br>`GET /api/user/posts?status=draft`  |
| **10. Post Editor** (`/dashboard/new`) | • WYSIWYG Editor<br>• Auto-save functionality<br>• Image upload handling         | `POST /api/posts` (Create)<br>`PUT /api/posts/{id}` (Update)<br>`POST /api/uploads/image`              |
| **11. Post Settings** (Modal)          | • Cover Image upload<br>• Tags & Category selection<br>• Slug & SEO Meta         | `GET /api/categories` (for selection)<br>`GET /api/tags` (for selection)<br>`PUT /api/posts/{id}/meta` |

---

## **6. Design Requirements**

- **Style:** Minimalist, elegant, typography-driven (Medium-like).
- **Typography:** High readability, generous line height, clear hierarchy.
- **Responsiveness:** Fluid layouts for Desktop, Tablet, and Mobile.
- **Theme:** Light Mode (Default) + Dark Mode support.
- **Components:** Modular design system (Cards, Buttons, Inputs, Avatars).

---

## **7. Deliverables**

1.  **UI/UX Design Kit:**
    - Figma file containing all screens and components.
    - Wireframes and High-fidelity mockups.
    - Style guide: Typography, Color Palette, Spacing, Grid System.
2.  **Technical Documentation:**
    - API Contract (Swagger/OpenAPI Spec) detailing request/response bodies for Laravel backend.
    - Next.js Data Fetching strategy (SWR/TanStack Query vs Server Actions).

---

## **8. Project Timeline (Estimated)**

- **Week 1:** Wireframing & API Schema Definition.
- **Week 2:** Visual Design System (Typography, Colors) & Database Design.
- **Week 3:** Public Pages UI Design & Frontend Integration Setup.
- **Week 4:** Dashboard/Editor UI Design & Auth Integration.
- **Week 5:** Final Polish, Prototyping, and Handoff.
