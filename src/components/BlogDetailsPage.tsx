"use client";

import { blogPosts, type BlogPost } from "@/data/blogPosts";
import NextLink from "next/link";

import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import {
  LuArrowRight as ArrowRight,
  LuBookmarkPlus as BookmarkPlus,
  LuCalendar as Calendar,
  LuClock as Clock,
  LuFacebook as Facebook,
  LuLinkedin as Linkedin,
  LuShare2 as Share2,
  LuTwitter as Twitter,
  LuUser as User,
} from "react-icons/lu";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface BlogDetailsPageProps {
  blog: BlogPost;
}

export function BlogDetailsPage({ blog }: BlogDetailsPageProps) {
  const relatedPosts = blogPosts
    .filter((post) => post.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Back to Blog */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <Button variant="outline" className="mb-4" asChild>
            <NextLink href="/blog" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </NextLink>
          </Button> */}
          <Link href="/blog" className="inline-flex items-center mb-4">
            <ZtsButton
              text="Back to Blog"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="border-[#ef3d23] text-[#ef3d23] mb-4"
          >
            {blog.category}
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {blog.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {blog.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {blog.readTime}
            </div>
          </div>

          {/* Social Share */}
          {/* <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-600">Share:</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <BookmarkPlus className="w-4 h-4" />
              </Button>
            </div>
          </div> */}

          {/* Featured Image */}
          <div className="mb-12">
            <ImageWithFallback
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="text-gray-700 leading-relaxed"
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* <div className="">
                  <ImageWithFallback
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div> */}
                <div className="relative h-auto">
                  <Image
                    src={blog.authorImage}
                    alt="Modern office workspace"
                    width={570}
                    height={384}
                    className="w-full  aspect-5/6 shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    About {blog.author}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.authorBio}</p>
                  {/* <Button variant="outline" asChild>
                    <NextLink href="/about">View Profile</NextLink>
                  </Button> */}
                  <Link href={"/about"}>
                    <ZtsButton text="View Profile" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  {/* <Button
                    variant="outline"
                    className="w-full border-[#ef3d23] text-[#ef3d23] hover:bg-[#ef3d23] hover:text-white"
                    asChild
                  >
                    <NextLink href={`/blog/${post.id}`}>Read More</NextLink>
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ef3d23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our software development expertise can help you
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              className="bg-white text-[#ef3d23] hover:bg-gray-100"
              asChild
            >
              <NextLink href="/schedule" className="inline-flex items-center">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </NextLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ef3d23]"
              asChild
            >
              <NextLink href="/services">View Our Services</NextLink>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
