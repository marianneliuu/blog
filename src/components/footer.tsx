import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import quby from "../assets/quby.gif";

export default function Footer() {
  return (
    <div className="relative w-full h-16 mt-14 px-10 flex justify-between items-center bg-stone-100 text-sm font-extralight">
      <div
        className="absolute inset-0 w-full h-full opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('https://media1.tenor.com/m/RCu7qA-pVOwAAAAd/water-sparkling.gif')" }}
      ></div>
      <Dialog>
        <DialogTrigger>
          <Image className="w-7 scale-x-[-1]" src={quby} alt="dance!" />
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center w-72">
          <DialogHeader>
            <DialogTitle>You found me!</DialogTitle>
          </DialogHeader>
          <Image className="w-64 scale-x-[-1]" src={quby} alt="dance!" />
        </DialogContent>
      </Dialog>

      <div>© 2025 MARIANNE</div>
    </div>
  );
}
