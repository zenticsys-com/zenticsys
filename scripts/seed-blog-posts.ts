import nextEnv from "@next/env";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";

import { blogPosts } from "../src/data/blogPosts";

const htmlToPlainText = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const toLexical = (
  html: string,
): RequiredDataFromCollectionSlug<"blogPosts">["content"] => ({
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr" as const,
    children: [
      {
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr" as const,
        textFormat: 0,
        textStyle: "",
        children: [
          {
            type: "text",
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: htmlToPlainText(html),
            version: 1,
          },
        ],
      },
    ],
  },
});

const seed = async () => {
  const { loadEnvConfig } = nextEnv;
  loadEnvConfig(process.cwd());
  const { default: config } = await import("../src/payload.config");
  const payload = await getPayload({ config });
  let created = 0;
  let skipped = 0;

  for (const post of blogPosts) {
    const existing = await payload.find({
      collection: "blogPosts",
      limit: 1,
      where: {
        slug: {
          equals: post.id,
        },
      },
    });

    if (existing.totalDocs) {
      skipped += 1;
      continue;
    }

    await payload.create({
      collection: "blogPosts",
      data: {
        title: post.title,
        slug: post.id,
        excerpt: post.excerpt,
        content: toLexical(post.content),
        author: post.author,
        authorBio: post.authorBio,
        authorImageUrl: post.authorImage,
        publishedAt: new Date(post.date).toISOString(),
        readTime: post.readTime,
        category: post.category,
        tags: post.tags.map((tag) => ({ tag })),
        coverImageUrl: post.image,
        featured: Boolean(post.featured),
        seoTitle: post.title,
        seoDescription: post.excerpt,
        _status: "published",
      },
    });
    created += 1;
  }

  console.log(`Seeded blog posts: ${created} created, ${skipped} skipped.`);
};

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
