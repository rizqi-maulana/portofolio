"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import { TbListDetails } from "react-icons/tb";
import { TechProps } from "@/app/data";

interface ProjectData {
  title: string;
  description: string;
  tech: TechProps[];
  website: string;
  github: string;
  thumb: string;
}

export default function Projectcard({
  title,
  description,
  tech,
  website,
  github,
  thumb,
}: ProjectData) {
  return (
    <>
      <div className="w-11/12 h-max md:w-[500px] md:h-max bg-[#151527] rounded-[5px] relative flex items-center flex-col md:mx-10 md:mt-60 mt-36">
        <Image
          src={thumb}
          className="w-11/12 object-cover absolute md:top-[-160px] top-[-100px] rounded-lg"
          width={600}
          height={400}
          quality={100}
          alt="Project Image"
          priority={true}
          sizes="100vw"
        />
        <div className="p-2 md:p-4 pt-16 md:pt-24 h-[210px] md:h-[280px] flex w-full">
          <div className="px-2">
            <h2 className="font-bold md:text-xl text-xs">{title}</h2>
            <p className="md:text-sm text-xs">
              {description.slice(0, 170)}{" "}
              {description.length > 170 ? "..." : ""}
            </p>
            <div className="flex mt-2 flex-wrap gap-2">
              {tech.map((tech: any) => (
                <Image
                  key={`${tech.tech}${Math.random()}`}
                  src={tech.icon}
                  className="md:w-[25px] md:h-[25px] mr-1 md:mr-1 w-[15px] h-[15px] object-cover"
                  quality={100}
                  width={15}
                  height={15}
                  alt="Tech Stack"
                  sizes="100vw"
                />
              ))}
            </div>
            <div className="flex absolute right-2 bottom-2 gap-2 flex-wrap">
              {github && (
                <Link
                  href={github}
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-1" />{" "}
                  <p className="md:text-sm text-xs">Repository</p>
                </Link>
              )}
              {website && (
                <Link
                  href={website}
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <MdOpenInNew className="mr-1" />{" "}
                  <p className="md:text-sm text-xs">Visit</p>
                </Link>
              )}
              <Link
                href={`projects/details/${title}`}
                className="flex items-center"
              >
                <TbListDetails className="mr-1" />{" "}
                <p className="md:text-sm text-xs">Details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
