"use client";

import type { BlogViewPost } from "@/lib/blog";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import BlogPosts from "../_components/BlogPosts";
import BlogSidebar from "../_components/BlogSidebar";
import FeaturedPost from "../_components/FeaturedPost";

type Props = {
  posts: BlogViewPost[];
  featuredPost?: BlogViewPost;
  currentPage: number;
  totalPages: number;
};

const OurFeaturedPost = ({
  posts,
  featuredPost,
  currentPage,
  totalPages,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((post) => post.category))).sort(),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post?.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post?.tags?.some((tag) =>
        tag?.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || post?.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const regularPosts = filteredPosts;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const resetToFirstPage = () => {
    if (currentPage > 1) {
      router.replace(pathname);
    }
  };

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value);
    resetToFirstPage();
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    resetToFirstPage();
  };

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

          {!searchTerm && selectedCategory === "All" && totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {currentPage > 1 && (
                <Link
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary"
                  href={`${pathname}?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              )}

              {pages.map((page) => (
                <Link
                  aria-current={page === currentPage ? "page" : undefined}
                  className={`rounded-md border px-4 py-2 text-sm font-medium ${
                    page === currentPage
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                  }`}
                  href={page === 1 ? pathname : `${pathname}?page=${page}`}
                  key={page}
                >
                  {page}
                </Link>
              ))}

              {currentPage < totalPages && (
                <Link
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary"
                  href={`${pathname}?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </div>

        <BlogSidebar
          searchTerm={searchTerm}
          setSearchTerm={handleSearchTermChange}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default OurFeaturedPost;
