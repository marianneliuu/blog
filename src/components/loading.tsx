import Image from "next/image";
import quby from "../assets/quby.gif";

export default function Loading() {
  return (
    <div className="flex flex-row justify-center items-center flex-1 h-full w-full p-10 space-x-3">
      <Image className="w-6 h-6 scale-x-[-1]" src={quby} alt="dance!" />
      <h1 className="text-lg font-extralight">Loading...</h1>
      <Image className="w-6 h-6 scale-x-[-1]" src={quby} alt="dance!" />
    </div>
  );
}
