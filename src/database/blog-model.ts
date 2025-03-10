import mongoose, { Schema } from "mongoose";

export type BlogSchema = {
  title: string;
  slug: string;
  author: string;
  date: Date;
  description: string;
  content: string;
  playButtonLabel: string;
  imageURL: string;
  contentImageURL: string;
};

export const BlogSchema = new Schema<BlogSchema>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  playButtonLabel: { type: String, required: true },
  imageURL: { type: String, required: true },
  contentImageURL: { type: String, required: true },
});

BlogSchema.index({ slug: 1 }, { unique: true });

export const BlogModel =
  (mongoose.models.Blog as mongoose.Model<BlogSchema>) || mongoose.model<BlogSchema>("Blog", BlogSchema, "blogs");
