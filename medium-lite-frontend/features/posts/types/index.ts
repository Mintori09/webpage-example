export interface Post {
    id: string;
    title: string;
    summary: string;
    author: {
        name: string;
        avatar: string;
    };
    image: string;
    date: string;
    readTime: string;
    category?: string;
}
