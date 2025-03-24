"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FadingImage from "./fading-image";

interface BlogCardProps {
  title: string;
  description: string;
  imageURL: string;
  imageURLWidth: number;
  imageURLHeight: number;
  slug: string;
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <div className="min-w-1/3 w-1/3 px-10 pt-10">
      <FadingImage src={props.imageURL} width={props.imageURLWidth} height={props.imageURLHeight} alt="test" />
      <h1 className="text-2xl mt-3">{props.title}</h1>
      <h2 className="text-sm font-extralight">{props.description}</h2>
      <div className="mt-4">
        <Link href={`/blogs/${props.slug}`}>
          <div className="font-light flex flex-row items-center space-x-1">
            <p>Read More</p>
            <ChevronRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
}
