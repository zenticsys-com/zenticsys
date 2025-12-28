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

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import BlogPosts from "../_components/BlogPosts";
import FeaturedPost from "../_components/FeaturedPost";

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
        <div className="lg:col-span-3">
          {featuredPost && selectedCategory === "All" && !searchTerm && (
            <FeaturedPost post={featuredPost} />
          )}
          {/* Blog Posts Grid */}
          <BlogPosts
            posts={regularPosts}
            heading={
              searchTerm || selectedCategory !== "All"
                ? "Search Results"
                : "Latest Posts"
            }
          />
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
