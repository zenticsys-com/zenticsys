"use client";

import ZtsButton from "@/app/_components/ZtButton";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import { useState } from "react";
import {
  LuArrowRight as ArrowRight,
  LuCalendar as Calendar,
  LuClock as Clock,
  LuSearch as Search,
  LuUser as User,
} from "react-icons/lu";
// import { ImageWithFallback } from "@/figma/ImageWithFallback";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const OurFeaturedPost = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Industry Insights",
    "Development",
    "AI & ML",
    "Cloud",
    "Security",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && !searchTerm && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Post
              </h2>
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    {/* <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    /> */}
                    <div className="w-full h-auto ">
                      <Image
                        src={featuredPost.image}
                        alt="image"
                        width={570}
                        height={380}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-[#ef3d23] text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <Badge
                      variant="outline"
                      className="border-[#ef3d23] text-[#ef3d23] mb-4"
                    >
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    {/* <Button
                        className="bg-[#ef3d23] hover:bg-[#d63420] text-white"
                        asChild
                      >
                        <NextLink
                          href={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center"
                        >
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </NextLink>
                      </Button> */}
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center mb-4"
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
          )}

          {/* Blog Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {searchTerm || selectedCategory !== "All"
                ? "Search Results"
                : "Latest Posts"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  {/* <div className="relative h-48">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  <div className="w-full h-auto ">
                    <Image
                      src={post.image}
                      alt="image"
                      width={570}
                      height={300}
                      className="w-full h-auto rounded-t-lg shadow-lg aspect-8/5"
                    />
                  </div>
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
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
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

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No posts found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Search */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Search
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left p-2 rounded transition-colors ${
                      selectedCategory === category
                        ? "bg-[#ef3d23] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Tags */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Development",
                  "AI & ML",
                  "Cloud Computing",
                  "Cybersecurity",
                  "Digital Transformation",
                  "Mobile Development",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-xs px-3 py-1 bg-gray-100 hover:bg-[#ef3d23] hover:text-white transition-colors rounded-full"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="border-none shadow-lg bg-[#ef3d23] text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-red-100 mb-4">
                Get the latest insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input
                  placeholder="Your email address"
                  className="bg-white text-gray-900 placeholder-gray-500"
                />
                {/* <Button className="w-full bg-white text-[#ef3d23] hover:bg-gray-100">
                    Subscribe
                  </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturedPost;
