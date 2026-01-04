import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ZtsButton from "@/app/_components/ZtButton";
import {
  LuArrowRight as ArrowRight,
  LuCalendar as Calendar,
  LuClock as Clock,
  LuUser as User,
} from "react-icons/lu";

type FeaturedPostProps = {
  post: {
    id: string;
    image: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
  };
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>

      <Card className="shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <Image
              src={post.image}
              alt={post.title}
              width={570}
              height={380}
              className="w-full h-auto shadow-lg"
            />

            <Badge className="absolute top-4 left-4 bg-[#ef3d23] text-white">
              Featured
            </Badge>
          </div>

          <CardContent className="p-8">
            <Badge
              variant="outline"
              className="border-[#ef3d23] text-[#ef3d23] mb-4"
            >
              {post.category}
            </Badge>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {post.title}
            </h3>

            <p className="text-gray-600 mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </span>

              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </span>

              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </span>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center"
            >
              <ZtsButton
                text="Read More"
                className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
                icon={<ArrowRight className="ml-2 h-4 w-4" />}
                iconPlacement="after"
              />
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default FeaturedPost;
