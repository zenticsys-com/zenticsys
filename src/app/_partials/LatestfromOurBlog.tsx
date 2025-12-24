"use client";
import { Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import ZtsButton from "../_components/ZtButton";
import Link from "next/link";

const LatestfromOurBlog = () => {
  const blogPosts = [
    {
      title: "The Future of Software Development",
      excerpt:
        "Exploring emerging trends and technologies shaping the software industry.",
      date: "Dec 15, 2024",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Building Scalable Cloud Architecture",
      excerpt:
        "Best practices for designing and implementing scalable cloud solutions.",
      date: "Dec 10, 2024",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AI and Machine Learning in Business",
      excerpt:
        "How artificial intelligence is revolutionizing business operations.",
      date: "Dec 5, 2024",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600">
            Insights, tips, and industry trends
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="w-full h-auto ">
                <Image
                  src={post.image}
                  alt="image"
                  width={570}
                  height={380}
                  sizes="(max-width: 768px) 100vw, 570px"
                  className="w-full h-auto rounded-t-lg shadow-lg"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button
                  component={NextLink}
                  href="/blog"
                  className="text-primary hover:text-primary-dark p-0 min-w-0"
                  variant="text"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12  flex justify-center">
          <Link href="/schedule">
            <ZtsButton
              text="Schedule a Call Today"
              className="border-primary text-primary hover:bg-primary hover:border-transparent hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestfromOurBlog;
