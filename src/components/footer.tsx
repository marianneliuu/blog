import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function Footer() {
  return (
    <div className="w-full h-20 mt-14 px-10 flex justify-between items-center bg-stone-100 text-sm font-extralight">
      <Dialog>
        <DialogTrigger>
          <Image
            className="w-5 scale-x-[-1]"
            src="https://media1.tenor.com/m/JJ36Rzh8qoQAAAAC/ning-nang.gif"
            width={424}
            height={498}
            alt="dance!"
          />
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center w-72">
          <DialogHeader>
            <DialogTitle>You found me!</DialogTitle>
          </DialogHeader>
          <Image
            className="w-64 scale-x-[-1]"
            src="https://media1.tenor.com/m/JJ36Rzh8qoQAAAAC/ning-nang.gif"
            width={424}
            height={498}
            alt="dance!"
          />
        </DialogContent>
      </Dialog>

      <div>© 2025 MARIANNE</div>
    </div>
  );
}
