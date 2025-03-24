import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-row justify-center items-center flex-1 h-full w-full p-10 space-x-3">
      <Image
        className="w-6 h-6 scale-x-[-1]"
        src="https://media.tenor.com/kQjsTRbRQoYAAAAi/quby.gif"
        width={240}
        height={240}
        alt="dance!"
      />
      <h1 className="text-lg font-extralight">Loading...</h1>
      <Image
        className="w-6 h-6 scale-x-[-1]"
        src="https://media.tenor.com/kQjsTRbRQoYAAAAi/quby.gif"
        width={240}
        height={240}
        alt="dance!"
      />
    </div>
  );
}
