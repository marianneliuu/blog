"use client";

import BlogCard from "@/components/blog-card";
import { BlogSchema } from "@/database/blog-model";
import { getAllBlogs } from "@/server/blog-actions";
import useSWR from "swr";
import Loading from "./loading";
import { useRouter } from "next/navigation";

export default function BlogList() {
  const { data, error, isLoading } = useSWR<BlogSchema[]>("/", getAllBlogs, {});
  const router = useRouter();

  if (isLoading) return <Loading />;

  if (!data || error) {
    console.log(error);
    router.replace("/not-found");
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
