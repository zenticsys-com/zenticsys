import {
  convertLexicalToHTML,
  defaultHTMLConverters,
  type HTMLConverters,
} from "@payloadcms/richtext-lexical/html";
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

export type BlogPostsResult = {
  posts: BlogViewPost[];
  featuredPost?: BlogViewPost;
  page: number;
  totalPages: number;
  totalDocs: number;
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

const escapeHTML = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const blogHTMLConverters: HTMLConverters = {
  ...defaultHTMLConverters,
  blocks: {
    Code: ({ node }) => {
      const fields = node.fields as {
        code?: string;
        language?: string;
      };
      const language = fields.language || "text";

      return `<pre class="blog-code-block"><code class="language-${escapeHTML(
        language,
      )}">${escapeHTML(fields.code || "")}</code></pre>`;
    },
  },
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
    converters: blogHTMLConverters,
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

type GetBlogPostsOptions = {
  page?: number;
  limit?: number;
};

export const getBlogPosts = async ({
  page = 1,
  limit = 4,
}: GetBlogPostsOptions = {}): Promise<BlogPostsResult> => {
  const payload = await getPayload({ config });
  const [featuredPosts, posts] = await Promise.all([
    page === 1
      ? payload.find({
          collection: "blogPosts",
          depth: 1,
          limit: 1,
          sort: "-publishedAt",
          where: {
            and: [
              {
                _status: {
                  equals: "published",
                },
              },
              {
                featured: {
                  equals: true,
                },
              },
            ],
          },
        })
      : Promise.resolve({ docs: [] }),
    payload.find({
      collection: "blogPosts",
      depth: 1,
      limit,
      page,
      sort: "-publishedAt",
      where: {
        and: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            or: [
              {
                featured: {
                  equals: false,
                },
              },
              {
                featured: {
                  exists: false,
                },
              },
            ],
          },
        ],
      },
    }),
  ]);

  if (!posts.totalDocs) {
    const start = (page - 1) * limit;
    const fallbackPosts = fallbackBlogPosts.map(fallbackToViewPost);
    const fallbackFeaturedPost =
      page === 1 ? fallbackPosts.find((post) => post.featured) : undefined;
    const fallbackRegularPosts = fallbackPosts.filter((post) => !post.featured);

    return {
      posts: fallbackRegularPosts.slice(start, start + limit),
      featuredPost: fallbackFeaturedPost,
      page,
      totalDocs: fallbackRegularPosts.length,
      totalPages: Math.max(1, Math.ceil(fallbackRegularPosts.length / limit)),
    };
  }

  return {
    posts: posts.docs.map(payloadToViewPost),
    featuredPost: featuredPosts.docs[0]
      ? payloadToViewPost(featuredPosts.docs[0])
      : undefined,
    page: posts.page || page,
    totalDocs: posts.totalDocs,
    totalPages: posts.totalPages,
  };
};

export const getBlogPostBySlug = async (slug: string) => {
  const payload = await getPayload({ config });
  const posts = await payload.find({
    collection: "blogPosts",
    depth: 1,
    limit: 1,
    where: {
      and: [
        {
          _status: {
            equals: "published",
          },
        },
        {
          or: [
            {
              slug: {
                equals: slug,
              },
            },
            {
              id: {
                equals: slug,
              },
            },
          ],
        },
      ],
    },
  });

  if (posts.docs[0]) {
    return payloadToViewPost(posts.docs[0]);
  }

  return fallbackBlogPosts
    .map(fallbackToViewPost)
    .find((post) => post.slug === slug || post.id === slug);
};
