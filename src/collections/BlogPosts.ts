import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "blogPosts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "publishedAt"],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "authorBio",
      type: "textarea",
    },
    {
      name: "authorImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "authorImageUrl",
      type: "text",
      admin: {
        description: "Use this for externally hosted author images.",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "readTime",
      type: "text",
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "coverImageUrl",
      type: "text",
      admin: {
        description: "Use this for externally hosted blog cover images.",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "seoTitle",
      type: "text",
    },
    {
      name: "seoDescription",
      type: "textarea",
    },
  ],
};
