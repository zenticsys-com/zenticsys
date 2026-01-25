"use client";

import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

import BlogPosts from "../_components/BlogPosts";
import BlogSidebar from "../_components/BlogSidebar";
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

          <BlogPosts
            posts={regularPosts}
            heading={
              searchTerm || selectedCategory !== "All"
                ? "Search Results"
                : "Latest Posts"
            }
          />
        </div>

        <BlogSidebar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default OurFeaturedPost;
