### **Cấu trúc Bảng Kanban**

Chúng ta sẽ chia thành 5 cột trạng thái:

1. **Backlog** (Kho công việc tổng)
2. **To Do** (Sẽ làm trong tuần/sprint này)
3. **In Progress** (Đang code - _chỉ nên giữ tối đa 1-2 task_)
4. **Testing/Refine** (Kiểm thử & Tinh chỉnh UI)
5. **Done** (Đã xong & Commit)

---

### **Chi tiết các thẻ (Tasks)**

#### **Giai đoạn 0: Setup & Architecture (Tuần 1)**

| Trạng thái  | Task (Công việc)                 | Tag        | Ghi chú                                                     |
| ----------- | -------------------------------- | ---------- | ----------------------------------------------------------- |
| **Done**    | **Thiết lập Môi trường Dev**     | `Infra`    | Cài đặt PHP, Composer, Node.js, MySQL/Postgres.             |
| **To Do**   | **Khởi tạo Laravel Project**     | `Backend`  | Cài đặt Laravel, cấu hình `.env`, thiết lập Git repo.       |
| **To Do**   | **Khởi tạo Next.js Project**     | `Frontend` | `create-next-app`, cài đặt Tailwind CSS, cấu hình Font chữ. |
| **To Do**   | **Database Schema Design**       | `DB`       | Vẽ ERD cho Users, Posts, Tags, Comments, Likes.             |
| **Backlog** | **Thiết lập API Response Trait** | `Backend`  | Chuẩn hóa format JSON trả về (Success/Error).               |

#### **Giai đoạn 1: Authentication & User Core (Tuần 2)**

| Trạng thái  | Task (Công việc)             | Tag        | Ghi chú                                                |
| ----------- | ---------------------------- | ---------- | ------------------------------------------------------ |
| **Backlog** | **Backend Auth Setup**       | `Backend`  | Cài đặt Laravel Sanctum, tạo Migration User.           |
| **Backlog** | **API: Auth Endpoints**      | `Backend`  | Login, Register, Logout, Get User Profile.             |
| **Backlog** | **UI: Login/Register Pages** | `Frontend` | Dựng form, validation (React Hook Form), tích hợp API. |
| **Backlog** | **UI: Global Auth State**    | `Frontend` | Setup Context/Zustand để lưu User Token & Info.        |

#### **Giai đoạn 2: Public Reading Experience (Tuần 3)**

| Trạng thái  | Task (Công việc)              | Tag        | Ghi chú                                                |
| ----------- | ----------------------------- | ---------- | ------------------------------------------------------ |
| **Backlog** | **DB: Posts & Relationships** | `DB`       | Migrations & Models cho Posts, Categories, Tags.       |
| **Backlog** | **Database Seeding**          | `Backend`  | Tạo Fake Data (Factories) để có dữ liệu test UI.       |
| **Backlog** | **API: Get Posts (Public)**   | `Backend`  | `index()` (phân trang), `show($slug)`, `featured`.     |
| **Backlog** | **UI: Components System**     | `Design`   | Code PostCard, Navbar, Footer, Typography styles.      |
| **Backlog** | **UI: Homepage**              | `Frontend` | Layout trang chủ, fetch data `latest posts`.           |
| **Backlog** | **UI: Post Detail Page**      | `Frontend` | Render nội dung bài viết (Markdown/HTML), Author info. |

#### **Giai đoạn 3: Authoring Experience (Tuần 4)**

| Trạng thái  | Task (Công việc)            | Tag        | Ghi chú                                                     |
| ----------- | --------------------------- | ---------- | ----------------------------------------------------------- |
| **Backlog** | **API: Post CRUD**          | `Backend`  | Create, Update, Delete (Check quyền sở hữu).                |
| **Backlog** | **API: Image Upload**       | `Backend`  | Xử lý upload ảnh, lưu vào Storage/S3, trả về URL.           |
| **Backlog** | **UI: Dashboard Layout**    | `Frontend` | Sidebar riêng cho Admin/Author, bảo vệ route (Private).     |
| **Backlog** | **UI: WYSIWYG Editor**      | `Frontend` | Tích hợp Editor (Tiptap/Quill), xử lý upload ảnh trong bài. |
| **Backlog** | **UI: Post Settings Modal** | `Frontend` | Chọn Tags, Categories, upload ảnh bìa.                      |

#### **Giai đoạn 4: Interactions & Polish (Tuần 5)**

| Trạng thái  | Task (Công việc)          | Tag         | Ghi chú                                                       |
| ----------- | ------------------------- | ----------- | ------------------------------------------------------------- |
| **Backlog** | **API: Comments & Likes** | `Backend`   | Endpoints cho comment và toggle like.                         |
| **Backlog** | **UI: Comment Section**   | `Frontend`  | Component hiển thị list comment & form add comment.           |
| **Backlog** | **Search Functionality**  | `Fullstack` | API `LIKE %query%` và UI thanh tìm kiếm.                      |
| **Backlog** | **SEO Optimization**      | `Frontend`  | Cấu hình Meta tags, Open Graph (Next/Head hoặc Metadata API). |
| **Backlog** | **Deployment**            | `DevOps`    | Deploy Laravel (Vercel/DigitalOcean) + Next.js (Vercel).      |

---

### **Chiến thuật cho Solo Dev (Lời khuyên)**

1. **Quy tắc "Definition of Done" (DoD):** Một task chỉ được coi là xong khi: Code đã chạy API trả về đúng UI hiển thị đúng Đã commit lên Git.
2. **Đừng cầu toàn quá sớm:** Ở giai đoạn đầu, hãy tập trung vào tính năng (Logic). UI có thể chỉnh sửa đẹp sau (Polish phase). Ví dụ: Editor chưa cần đẹp, chỉ cần gõ và lưu được chữ.
3. **Công cụ quản lý:**

- **Github Projects:** Miễn phí, tích hợp thẳng vào code repo của bạn. Rất tốt cho solo dev.
- **Trello/Notion:** Trực quan, dễ kéo thả nếu bạn thích giao diện đẹp.

---

### **Bước tiếp theo bạn có thể làm ngay:**

Bạn có muốn tôi **viết chi tiết thiết kế Database (Schema SQL/Migrations)** cho các bảng `users`, `posts`, `categories`, `tags` để bạn bắt đầu **Giai đoạn 0** không?
