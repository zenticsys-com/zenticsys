import ZtsButton from "@/app/_components/ZtButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  LuCalendar as Calendar,
  LuClock as Clock,
  LuUser as User,
} from "react-icons/lu";

type BlogPost = {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
};

type BlogPostsGridProps = {
  posts: BlogPost[];
  heading: string;
};

const BlogPosts = ({ posts, heading }: BlogPostsGridProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={570}
              height={300}
              className="w-full h-auto rounded-t-lg aspect-8/5"
            />

            <CardContent className="p-6">
              <Badge
                variant="outline"
                className="border-[#ef3d23] text-[#ef3d23] mb-3"
              >
                {post.category}
              </Badge>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Link href={`/blog/${post.id}`}>
                <ZtsButton
                  text="Read More"
                  className="w-full border-primary text-primary hover:bg-primary hover:border-transparent hover:text-white"
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No posts found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
