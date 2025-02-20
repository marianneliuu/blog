import BlogCard from "@/components/blog-card";
import Image from "next/image";

export default function Home() {
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
        <BlogCard title={"title1"} description={"fs"} imageURL={"/testimage.jpg"} />
        <BlogCard title={"title2"} description={"fs2"} imageURL={"/testimage.jpg"} />
        <BlogCard title={"title3"} description={"fs3"} imageURL={"/testimage.jpg"} />
        <BlogCard title={"title4"} description={"fs4"} imageURL={"/testimage.jpg"} />
      </div>
    </>
  );
}
