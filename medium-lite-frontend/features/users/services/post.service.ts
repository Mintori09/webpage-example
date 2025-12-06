import { Post } from "@/features/posts/types";

const MOCK_POSTS: Post[] = [
    {
        id: "1",
        title: "The Unseen Revolution in Renewable Energy",
        summary: "Beyond solar panels and wind turbines, a new wave of technologies is set to redefine how we power our world.",
        author: { name: "Sarah Day", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBArFvuGNQ9qp5W7sYjeCMrQTt-r2vYGB1VQdfeiP7M6IlFwdZcTfiVJhpvbZsXbOSbRbF0BUuCyBz9GDgf__A652RDZl_nfoOyuoHNx8dPgMmJ3sw0zRyRKxu7lADjJoyjyyf2re1TnwQ9lfxy3kH2f2WSuWs1VyM9nznnjj0yF5OzyZ1_jIB9ZwNrBMzSeNiIQksb_dXHx_88M5-NMpHVIzoNOLfmFot3LcNB4mUr1kX08r-CDDbuytjUHj-fg5cA-wMYTGkbZyay" },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjCbXIl3xmwgPxBnbcUVxVZei3veZucDsvuFQWD5MNl9XZevjrComsPBPZfRMmtdd9wXJdvebyT5BPD0KGYJG6CHrD9FsMPS4pWNQ5IxywdcKeyQhUHe0lSCN_GE-hIJNC8dcDUZ40uB_OryY_APZ_RK6Z0F44KaD2EukVmoBxH0zHp-2v7gf7jo07sHZC5UjdpDxNOOccxosJkpVmy2ctWeUMgoaI5c1vBH92x4nGfEl_PR4KRs6vtXYfUWQ0OAZitl_gdKMu_2i_",
        date: "Jul 12",
        readTime: "7 min read"
    },
    {
        id: "2",
        title: "The Future of AI is Not What You Think",
        summary: "A deep dive into the next generation of artificial intelligence and its surprising implications for society.",
        author: { name: "Jane Doe", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVW2tfBgw_S4-d302P8qge6n4-sUDmrY_CupI-LBdiQtcuQ2i9hWR4V99tqtU0r3AUbs3_KagnLErut-8CY8CAKC0nVy9HnKnuyDNZjuviTAG3sC0O7v6YS2ylZeKmo-mEYGs7fWHOrZYmSuVzQpPzLMFiKqs7vgkuELFOblhkeyQU0qGjSjTkK7jZwLTiDUdRV4BsCoRCWhOlLn1zt71QxnYrVEGic96s6pGICf_7nHPIRzvp4gt4mcu7OqhN8fHSW128uggHJXZm" },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPZS_0Rj9CDtDV18XsCSFIjITHytq6zSlfBiUYDhpthnZr064UYzQXGPvoKialHrNFK-nEo-JLznyrZmj0DV3hDd1idlwEiQkPaSq_Gi4DOq0QyvXYSBSZ7I_rVZJsTUHfRw-_8v6x-fxOml6UTd2ou8gxiB19N3fsp_yzvP5tQwR67RmLI2COeGQS7NsDkxnSYP6Jaa8X4XY4V8Na3iShIKriHPXK8S-Q1JYcDIC-LCueDaJh4kYv0Co2i0CujMnm-VhSM_nkRjnd",
        date: "Jul 11",
        readTime: "5 min read",
        category: "AI"
    },
];

export async function getPosts(): Promise<Post[]> {
    return MOCK_POSTS;
}
