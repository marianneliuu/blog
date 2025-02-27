import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center p-10">
      <div className="flex flex-row space-x-8 flex-grow basis-0">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <Link href="/" className="text-2xl">
        MARMAR
      </Link>
      <div className="flex flex-row justify-end space-x-8 flex-grow basis-0">
        <Link href="/contact">Contact</Link>
        <Link href="/publish">Publish</Link>
      </div>
    </nav>
  );
}
