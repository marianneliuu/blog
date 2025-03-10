"use client";

import BlogCard from "@/components/blog-card";
import { BlogSchema } from "@/database/blog-model";
import { getAllBlogs } from "@/server/blog-actions";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR<BlogSchema[]>("/", getAllBlogs, {});

  if (isLoading) return <div>Loading...</div>;

  if (!data || error) {
    console.log(error);
    return <div>Error Loading Blogs</div>;
  }

  return (
    <>
      <div className="h-[calc(100vh-126px)] flex flex-row w-full min-h-96">
        <div className="h-full w-1/2 flex flex-col-reverse pb-60 ps-10">
          <h2 className="text-lg font-extralight italic">slipping through our fingers</h2>
          <h1 className="text-3xl">marianne</h1>
        </div>
        <div className="h-full w-1/2 bg-slate-400 relative overflow-hidden">
          <Image className="w-full h-full object-cover" src="/testimage.jpg" width={4284} height={5712} alt="test" />
        </div>
      </div>
      <div className="bg-stone-100 min-h-10 mt-10"></div>
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
    </>
  );
}
