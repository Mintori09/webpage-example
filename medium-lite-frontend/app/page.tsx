import { HomeHeader } from "@/components/layout/home-header";
import { Footer } from "@/components/ui/footer";
import { TopicList } from "@/features/discovery/components/topic-list";
import { HeroPost } from "@/features/posts/components/hero-post";
import { PostItem } from "@/features/posts/components/post-item";

import { Spinner } from "@/components/ui/spinner";
import { SuggestedAuthors } from "@/features/users/components/suggested-authors";
import { getPosts } from "@/features/users/services/post.service";

export default async function Homepage() {
    const posts = await getPosts();
    const heroPost = posts[0];
    const feedPosts = posts.slice(1);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

            <HomeHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-16">

                    {/* Left Column: Feed */}
                    <div className="col-span-12 lg:col-span-8">
                        {heroPost && <HeroPost post={heroPost} />}

                        <div className="border-b border-[#E6E6E6] dark:border-gray-700 mb-6">
                            <h3 className="text-[#1A1A1A] dark:text-white text-lg font-bold pb-2">Latest Posts</h3>
                        </div>

                        <div className="flex flex-col gap-10">
                            {feedPosts.map((post) => (
                                <PostItem key={post.id} post={post} />
                            ))}

                            {/* Loading Indicator */}
                            {/* <div className="flex justify-center py-8"> */}
                            {/*     <Spinner size="md" /> */}
                            {/* </div> */}
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-8">
                        <TopicList />
                        <SuggestedAuthors />
                    </aside>

                </div>
            </main>
            <Footer />
        </div>
    );
}

