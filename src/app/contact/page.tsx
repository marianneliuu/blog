import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-row">
      <div className="h-[70vh] w-1/3 bg-slate-400 relative overflow-hidden m-10">
        <Image className="w-full h-full object-cover" src="/testimage.jpg" width={4284} height={5712} alt="test" />
      </div>
      <h1 className="flex m-20 text-lg font-extralight">Contact Me</h1>
    </div>
  );
}
