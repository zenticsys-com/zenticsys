import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getPayload } from "payload";

import { blogPosts as fallbackBlogPosts } from "@/data/blogPosts";
import type { BlogPost as FallbackBlogPost } from "@/data/blogPosts";
import type { BlogPost } from "@/payload-types";
import config from "@/payload.config";

export type BlogViewPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
};

const formatDate = (date?: string | null) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

const getMediaURL = (media: BlogPost["coverImage"] | BlogPost["authorImage"]) => {
  if (typeof media === "object" && media?.url) {
    return media.url;
  }

  return "";
};

const fallbackToViewPost = (post: FallbackBlogPost): BlogViewPost => ({
  ...post,
  slug: post.id,
  seoTitle: post.title,
  seoDescription: post.excerpt,
});

const payloadToViewPost = (post: BlogPost): BlogViewPost => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  content: convertLexicalToHTML({
    data: post.content,
    disableContainer: true,
  }),
  author: post.author,
  authorBio: post.authorBio || "",
  authorImage:
    getMediaURL(post.authorImage) ||
    post.authorImageUrl ||
    "/assets/images/zenticsys-con-2-black.png",
  date: formatDate(post.publishedAt || post.createdAt),
  readTime: post.readTime || "",
  category: post.category,
  tags: post.tags?.map(({ tag }) => tag) || [],
  image:
    getMediaURL(post.coverImage) ||
    post.coverImageUrl ||
    "/assets/images/zenticsys-con-2-black.png",
  featured: Boolean(post.featured),
  seoTitle: post.seoTitle || post.title,
  seoDescription: post.seoDescription || post.excerpt,
});

export const getBlogPosts = async (): Promise<BlogViewPost[]> => {
  const payload = await getPayload({ config });
  const posts = await payload.find({
    collection: "blogPosts",
    depth: 1,
    limit: 100,
    sort: "-publishedAt",
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  if (!posts.docs.length) {
    return fallbackBlogPosts.map(fallbackToViewPost);
  }

  return posts.docs.map(payloadToViewPost);
};

export const getBlogPostBySlug = async (slug: string) => {
  const posts = await getBlogPosts();

  return posts.find((post) => post.slug === slug || post.id === slug);
};
