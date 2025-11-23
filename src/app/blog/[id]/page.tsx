import { BlogDetailsPage } from "@/components/BlogDetailsPage";
import { blogPosts, findBlogPost } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type BlogPageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const blog = findBlogPost(params.id);

  if (!blog) {
    return { title: "Blog Post Not Found | Zenticsys" };
  }

  return {
    title: `${blog.title} | Zenticsys`,
    description: blog.excerpt,
  };
}

export default function Page({ params }: BlogPageProps) {
  const blog = findBlogPost(params.id);

  if (!blog) {
    return notFound();
  }

  return <BlogDetailsPage blog={blog} />;
}
