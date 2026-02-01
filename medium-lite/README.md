# Medium-Lite Project

A lightweight blogging platform inspired by Medium, built with a **Laravel API Backend** and a **Next.js Frontend** (planned).

## 📂 Project Structure

- **Backend**: Laravel 12 (API-only mode).
- **Frontend**: Next.js 15 (Planned, see `frontend-mvp-plan.md`).
- **Database**: MySQL/MariaDB.

## 🚀 Getting Started (Backend)

### Prerequisites
- PHP 8.2+
- Composer
- Node.js & NPM (for frontend/assets)
- MySQL

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd medium-lite
    ```

2.  **Install PHP dependencies**:
    ```bash
    composer install
    ```

3.  **Environment Setup**:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
    *Configure your database credentials in `.env`*.

4.  **Database Migration**:
    ```bash
    php artisan migrate
    ```

5.  **Run the Server**:
    ```bash
    php artisan serve
    ```
    The API will be available at `http://localhost:8000`.

## 📖 API Documentation

The backend provides a comprehensive JSON API for the frontend. 

- **Base URL**: `http://localhost:8000/api`
- **Authentication**: Laravel Sanctum (Bearer Token).

### Key Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **Auth** | | |
| `POST` | `/api/user/login` | Login user |
| `POST` | `/api/user/registry` | Register new user |
| `GET` | `/api/me` | Get current user profile |
| **Content** | | |
| `GET` | `/api/posts` | List posts (filter with `?category=` or `?tag=`) |
| `GET` | `/api/posts/{slug}` | Get single post |
| `POST` | `/api/posts` | Create post (requires Auth) |
| `GET` | `/api/posts/{id}/comments` | Get comments for a post |

*For a complete list of endpoints and test payloads, refer to **Section 6** in [`plan.md`](./plan.md).*

## 🗺️ Development Plans

This project follows a structured development path:

1.  **Backend API**: Completed. See [`plan.md`](./plan.md) for architecture and API specifications.
2.  **Frontend MVP**: Planned. See [`frontend-mvp-plan.md`](./frontend-mvp-plan.md) for the Next.js roadmap and component design.

## 🛠️ Tech Stack

- **Laravel 11/12**: Core Framework.
- **Sanctum**: API Authentication.
- **MySQL**: Relational Database.
- **Tailwind CSS v4**: Styling (for backend views/frontend).

## 📄 License
This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
