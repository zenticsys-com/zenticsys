import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "siteSettings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
      defaultValue: "Zenticsys",
    },
    {
      name: "siteDescription",
      type: "textarea",
      required: true,
      defaultValue:
        "Zenticsys builds innovative software, cloud, and data solutions to help businesses scale with confidence.",
    },
    {
      name: "defaultSeo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Zenticsys | Modern Software Solutions",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue:
            "Zenticsys builds innovative software, cloud, and data solutions to help businesses scale with confidence.",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "imageUrl",
          type: "text",
          admin: {
            description: "Use this for externally hosted social share images.",
          },
        },
      ],
    },
    {
      name: "contact",
      type: "group",
      fields: [
        {
          name: "email",
          type: "email",
        },
        {
          name: "phone",
          type: "text",
        },
        {
          name: "address",
          type: "textarea",
        },
      ],
    },
    {
      name: "socialLinks",
      type: "group",
      fields: [
        {
          name: "facebook",
          type: "text",
          defaultValue: "https://www.facebook.com/zenticsys/",
        },
        {
          name: "linkedin",
          type: "text",
          defaultValue: "https://www.linkedin.com/company/zenticsys/",
        },
        {
          name: "instagram",
          type: "text",
          defaultValue: "https://www.instagram.com/zentic.sys",
        },
      ],
    },
    {
      name: "footer",
      type: "group",
      fields: [
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "We are a software development company dedicated to creating innovative solutions that transform businesses and drive digital success.",
        },
        {
          name: "newsletterTitle",
          type: "text",
          defaultValue: "Newsletter",
        },
        {
          name: "newsletterDescription",
          type: "textarea",
          defaultValue: "Stay updated with our latest insights and news.",
        },
        {
          name: "copyrightText",
          type: "text",
          defaultValue: "(c) 2024 Zenticsys. All rights reserved.",
        },
      ],
    },
  ],
};
