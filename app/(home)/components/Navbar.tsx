import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: `${process.env.BASE_URL}`,
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "http://localhost:3000/another",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "",
      label: "Linkedin",
      icon: SiX,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className=" text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Anguschen🍀
      </h1>

      <div className=" flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
