"use server";

import { BlogFormSchema } from "@/app/publish/page";
import { BlogModel, BlogSchema } from "@/database/blog-model";
import connectDB from "@/database/db";
import slugify from "slugify";

const sanitizeBlog = (blog: BlogSchema): BlogSchema => ({
  title: blog.title,
  slug: blog.slug,
  author: blog.author,
  date: blog.date,
  description: blog.description,
  content: blog.content,
  playButtonLabel: blog.playButtonLabel,
  imageURL: blog.imageURL,
  imageURLWidth: blog.imageURLWidth,
  imageURLHeight: blog.imageURLHeight,
  contentImageURL: blog.contentImageURL,
  contentImageURLWidth: blog.contentImageURLWidth,
  contentImageURLHeight: blog.contentImageURLHeight,
});

export const addBlog = async (blog: BlogFormSchema): Promise<string> => {
  await connectDB();
  const newBlog: BlogSchema = {
    ...blog,
    date: new Date(),
    slug: slugify(blog.title, { lower: true }),
  };
  return (await BlogModel.create(newBlog)).slug;
};

export const getAllBlogs = async (): Promise<BlogSchema[]> => {
  await connectDB();
  return (await BlogModel.find().sort({ date: "descending" }).lean()).map(sanitizeBlog);
};

export const getBlogBySlug = async (slug: string): Promise<BlogSchema> => {
  await connectDB();
  return sanitizeBlog(await BlogModel.findOne({ slug }).lean().orFail());
};
