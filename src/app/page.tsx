"use client";

import BlogList from "@/components/blog-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[calc(110vh-126px)] flex flex-row w-full min-h-96">
        <div className="h-full w-1/2 flex flex-col-reverse pb-80 ps-10">
          <h2 className="text-lg font-extralight italic">slipping through our fingers</h2>
          <h1 className="text-3xl mb-1">From, Marianne</h1>
        </div>
        <div className="h-full w-1/2 relative overflow-hidden">
          <Image className="w-full h-full object-cover" src="/homepage.jpg" width={3648} height={4390} alt="cover" />
        </div>
      </div>
      <div className="bg-stone-100 min-h-10 mt-10"></div>
      <BlogList />
    </>
  );
}
