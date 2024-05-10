import React from "react";
import {
  SiMysql,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "WMS",
      tech: [SiNextdotjs, SiReactquery, SiMysql, SiTailwindcss],
      link: "/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "WMS",
      tech: [SiNextdotjs, SiReactquery, SiMysql, SiTailwindcss],
      link: "/",
      cover: "/project-1.png",
      background: "bg-green-500",
    },
    {
      title: "WMS",
      tech: [SiNextdotjs, SiReactquery, SiMysql, SiTailwindcss],
      link: "/",
      cover: "/project-1.png",
      background: "bg-green-500",
    },
    {
      title: "WMS",
      tech: [SiNextdotjs, SiReactquery, SiMysql, SiTailwindcss],
      link: "/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "WMS",
      tech: [SiNextdotjs, SiReactquery, SiMysql, SiTailwindcss],
      link: "/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "WMS",
      tech: [SiNextdotjs, SiReactquery, SiMysql, SiTailwindcss],
      link: "/",
      cover: "/project-1.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 📚" underLineRotate={"right"} />
      <div className="grid grid-col-1 sm:grid-cols-2 pt-20 gap-7">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className=" space-y-5">
                    <h2 className=" text-3xl font-bold">{project.title}</h2>
                    <div className=" flex items-center gap-5">
                      {project.tech.map((Icon, idx) => {
                        return <Icon key={idx} className="h-10 w-10" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
