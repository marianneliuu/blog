import { blogData } from "@/blog-data";
import Image from "next/image";

interface BlogProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: Date) {
  let mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  let dd = String(date.getDate()).padStart(2, "0");
  let yy = String(date.getFullYear()).slice(-2);

  return `${mm}.${dd}.${yy}`;
}

export default async function Blog(props: BlogProps) {
  const { slug } = await props.params;

  const selectedBlog = blogData.find((blog) => blog.slug === slug);

  if (!selectedBlog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="flex flex-col items-center mx-5 mt-28 mb-28">
      <h1 className="text-4xl">{selectedBlog.title}</h1>
      <h2 className="font-extralight text-lg mt-4">{selectedBlog.author}</h2>
      <h2 className="font-extralight mb-40">{formatDate(selectedBlog.date)}</h2>
      <div className="flex flex-row items-start mt-8 w-full">
        <p className="flex-grow text-lg leading-relaxed whitespace-pre-line">{selectedBlog.content}</p>
        <Image
          src={selectedBlog.contentImageURL}
          alt={selectedBlog.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/3 object-contain ml-20 mb-4 sticky top-14"
        />
      </div>
    </div>
  );
}
