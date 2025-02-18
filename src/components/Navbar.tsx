import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-10">
      <div className="flex flex-row space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <Link href="/" className="text-2xl">
        MARMAR
      </Link>
      <div className="flex flex-row space-x-8">
        <Link href="/contact">Contact</Link>
        <Link href="/publish">Publish</Link>
      </div>
    </nav>
  );
}
