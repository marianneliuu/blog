import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function BlogCard() {
  return (
    <div className="min-w-1/3 w-1/3 px-10 pt-10">
      <Image src="/testimage.jpg" width={4284} height={5712} alt="test" />
      <h1 className="text-2xl mt-3">Title</h1>
      <h2 className="text-sm font-extralight">Description</h2>
      <div className="mt-4">
        <Link href="/">
          <div className="font-light flex flex-row items-center space-x-1">
            <p>Read More</p>
            <ChevronRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
}
