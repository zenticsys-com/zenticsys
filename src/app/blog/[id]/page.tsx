import { notFound } from "next/navigation";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";

type Props = {
  params: {
    id: string;
  };
};

const BlogDetailsPage = ({ params }: Props) => {
  const post = blogPosts?.find((item) => item?.id === params?.id);

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
