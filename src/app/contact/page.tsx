import { Button } from "@/components/ui/button";
import { Github, Icon, Instagram, Linkedin, Mail } from "lucide-react";
import contactImage from "../../assets/contact.jpg";
import FadingImage from "@/components/fading-image";

export default function Contact() {
  return (
    <div className="flex flex-row items-center">
      <div className="h-[60vh] w-2/5 bg-slate-400 relative overflow-hidden m-10 bg-stone-100">
        <FadingImage className="w-full h-full object-cover" src={contactImage} alt="contact" placeholder="blur" />
      </div>
      <div className="flex flex-col m-10">
        <h1 className="text-lg font-extralight">Contact Me !</h1>
        <div className="flex flex-row mt-6 space-x-3">
          <Button variant="outline" asChild>
            <a href="mailto:marianneliuu@gmail.com" target="_blank">
              <Mail /> Email
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/marianneliuu/" target="_blank">
              <Github /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/marianne-liu/" target="_blank">
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.instagram.com/marianneliuu/" target="_blank">
              <Instagram /> Instagram
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
