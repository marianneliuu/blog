"use client";

import { BlogSchema } from "@/database/blog-model";
import { getBlogBySlug } from "@/server/blog-actions";
import Image from "next/image";
import { use } from "react";
import useSWR from "swr";

interface BlogProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: Date) {
  let mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  let dd = String(date.getDate()).padStart(2, "0");
  let yy = String(date.getFullYear()).slice(-2);

  return `${mm}.${dd}.${yy}`;
}

export default function Blog(props: BlogProps) {
  const { slug } = use(props.params);

  const { data, error, isLoading } = useSWR<BlogSchema>(`/blogs/${slug}`, () => getBlogBySlug(slug));

  if (isLoading) return <div>Loading...</div>;

  if (!data || error) {
    console.log(error);
    return <div>Error Loading Blog</div>;
  }

  return (
    <div className="flex flex-col items-center mx-5 mt-28 mb-28">
      <h1 className="text-4xl">{data.title}</h1>
      <h2 className="font-extralight text-lg mt-4">{data.author}</h2>
      <h2 className="font-extralight mb-40">{formatDate(data.date)}</h2>
      <div className="flex flex-row items-start mt-8 w-full">
        <p className="flex-grow text-lg leading-relaxed whitespace-pre-line">{data.content}</p>
        <Image
          src={data.contentImageURL}
          alt={data.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/3 object-contain ml-20 mb-4 sticky top-14"
        />
      </div>
    </div>
  );
}
