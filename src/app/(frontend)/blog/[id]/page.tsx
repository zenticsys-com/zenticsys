import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { getBlogPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  const post = await getBlogPostBySlug(id);

  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
};

const BlogDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const post = await getBlogPostBySlug(id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Featured Image */}
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={post?.image}
          alt={post?.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Category */}
      <Badge className="mb-4">{post?.category}</Badge>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>

      {/* Meta Info */}
      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
        <span>{post?.author}</span>
        <span>{post?.date}</span>
        <span>{post?.readTime}</span>
      </div>

      {/* Blog Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10">
        {post?.tags?.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default BlogDetailsPage;
