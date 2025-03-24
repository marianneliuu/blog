import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center max-h-full">
      <div className="max-h-[50vh] w-3/4 bg-slate-400 relative overflow-hidden flex justify-center items-center">
        <Image className="w-full h-full object-cover" src="/aboutimage.jpg" width={4284} height={5712} alt="test" />
      </div>
      <h1 className="flex mt-5 text-xl font-extralight">About This Blog</h1>
      <h2 className="w-3/4 mt-2">
        I coded this blog, &ldquo;From, Marianne,&rdquo; as a place to document my wonders, thoughts, and memories with
        the friends who matter most. This started as a challenge to learn coding, but quickly became a space to remember
        the moments that made it all worthwhile. Inspired by the timeless feeling of nostalgia from the Mamma Mia song,
        &ldquo;Slipping Through My Fingers,&rdquo; I built this blog as an archive of memories with my closest friends.
        Enjoy!
      </h2>
    </div>
  );
}
