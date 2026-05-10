import BlogHeroSection from "./_partials/BlogHeroSection";
import OurFeaturedPost from "./_partials/OurFeaturedPost";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const POSTS_PER_PAGE = 4;

const BlogPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const currentPage = Math.max(Number(params.page) || 1, 1);
  const { featuredPost, posts, totalPages } = await getBlogPosts({
    page: currentPage,
    limit: POSTS_PER_PAGE,
  });

  return (
    <div>
      <BlogHeroSection />
      <OurFeaturedPost
        currentPage={currentPage}
        featuredPost={featuredPost}
        posts={posts}
        totalPages={totalPages}
      />
    </div>
  );
};

export default BlogPage;
