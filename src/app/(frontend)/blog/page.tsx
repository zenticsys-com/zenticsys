import BlogHeroSection from "./_partials/BlogHeroSection";
import OurFeaturedPost from "./_partials/OurFeaturedPost";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

const BlogPage = async () => {
  const posts = await getBlogPosts();

  return (
    <div>
      <BlogHeroSection />
      <OurFeaturedPost posts={posts} />
    </div>
  );
};

export default BlogPage;
