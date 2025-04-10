"use client";

import FadingImage from "@/components/fading-image";
import Loading from "@/components/loading";
import MusicToggle from "@/components/music-toggle";
import { BlogSchema } from "@/database/blog-model";
import { getBlogBySlug } from "@/server/blog-actions";
import { redirect, useRouter } from "next/navigation";
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

  const router = useRouter();

  if (isLoading) return <Loading />;

  if (!data || error) {
    console.log(error);
    return router.replace("/not-found");
  }

  return (
    <div className="flex flex-col items-center mx-5 mt-28">
      <h1 className="text-4xl">{data.title}</h1>
      <h2 className="font-extralight text-lg mt-4">{data.author}</h2>
      <h2 className="font-extralight mb-40">{formatDate(data.date)}</h2>
      <div className="flex flex-row items-start w-full">
        <p className="flex-grow text-lg leading-relaxed whitespace-pre-line mt-14">{data.content}</p>
        <div className="flex flex-col items-center justify-between min-w-[33%] max-w-[33%] ml-20 min-h-screen sticky top-0">
          <div className="w-fit h-fit bg-stone-100 mt-14">
            <FadingImage
              src={data.contentImageURL}
              alt={data.title}
              width={data.contentImageURLWidth}
              height={data.contentImageURLHeight}
              className="w-full object-contain"
            />
          </div>
          <MusicToggle className="mt-14 mb-20 italic font-extralight" variant="outline">
            &ldquo;{data.playButtonLabel}&rdquo;
          </MusicToggle>
        </div>
      </div>
    </div>
  );
}
