"use client";

import BlogCard from "@/components/blog-card";
import { BlogSchema } from "@/database/blog-model";
import { getAllBlogs } from "@/server/blog-actions";
import useSWR from "swr";

export default function BlogList() {
  const { data, error, isLoading } = useSWR<BlogSchema[]>("/", getAllBlogs, {});

  if (isLoading) return <div>Loading...</div>;

  if (!data || error) {
    console.log(error);
    return <div>Error Loading Blogs</div>;
  }

  return (
    <div className="flex flex-row flex-wrap">
      {data.map((blog) => (
        <BlogCard
          key={blog.slug}
          title={blog.title}
          description={blog.description}
          imageURL={blog.imageURL}
          slug={blog.slug}
        />
      ))}
    </div>
  );
}
