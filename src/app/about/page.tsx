import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center max-h-full">
      <div className="max-h-[50vh] w-3/4 bg-slate-400 relative overflow-hidden flex justify-center items-center">
        <Image className="w-full h-full object-cover" src="/aboutimage.jpg" width={4284} height={5712} alt="test" />
      </div>
      <h1 className="flex m-10 text-xl font-extralight">About This Blog</h1>
      <h2>This is more about marmar</h2>
    </div>
  );
}
