import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { BlogPosts } from "./collections/BlogPosts";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: "src",
    },
  },
  collections: [Users, Media, BlogPosts],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: "src/payload-types.ts",
  },
});
