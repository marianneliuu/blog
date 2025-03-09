"use server";

import { BlogFormSchema } from "@/app/publish/page";
import { BlogModel, BlogSchema } from "@/database/blog-model";
import connectDB from "@/database/db";
import slugify from "slugify";

export const addBlog = async (blog: BlogFormSchema) => {
  await connectDB();
  const newBlog: BlogSchema = {
    ...blog,
    date: new Date(),
    slug: slugify(blog.title, { lower: true }),
  };

  await BlogModel.create(newBlog);
};
