"use client";

import { useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Tooltip from "@/components/elements/animated-tooltip";
import AnimatedShinyLink from "@/components/elements/animated-shiny-link";
import { FaGithub } from "react-icons/fa";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MdOpenInNew } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import AnimatedShinyButton from "@/components/elements/animated-shiny-button";
import { ToastContainer, toast } from "react-toastify";
import { GitHubReadme } from "react-github-readme-md";
import { Project } from "@/app/data";

export default function ProjectDetails() {
  const { detailsid } = useParams();
  const [ProjectTitle, setProjectTitle] = useState<string>("");
  const [ProjectImage, setProjectImage] = useState<string>("");
  const [ProjectDesc, setProjectDesc] = useState<string>("");
  const [ProjectTech, setProjectTech] = useState<any[]>([]);
  const [ProjectGithub, setProjectGithub] = useState<string | null>(null);
  const [ProjectLink, setProjectLink] = useState<string | null>(null);
  const [Readme, setReadme] = useState<string>("");
  const decodeDetailsid = decodeURIComponent(`${detailsid}`);
  // const formattedDetailsid = decodeDetailsid.replace(/\s+/g, '-');
  const [DataFound, setDataFound] = useState<boolean>(true);
  useEffect(() => {
    const SearchProject = async () => {
      const project = Project.find((item) => item.name === decodeDetailsid);
      if (project) {
        setProjectTitle(project.name);
        setProjectDesc(project.description);
        setProjectImage(project.thumb);
        setProjectTech(project.tech);
        project.github && setProjectGithub(project.github);
        project.website && setProjectLink(project.website);
        if (project.github) {
          const match = project.github.match(/\/([^\/]+)\/?$/);
          if (match && match[1]) {
            setReadme(match[1]);
          }
        }
      } else {
        setDataFound(false);
      }
    };
    SearchProject();
    // const fetchProject = async () => {
    //   const formdata = new FormData();
    //   formdata.append("params", `${decodeDetailsid}`);
    //   const response = await fetch("/api/project-details", {
    //     method: "POST",
    //     body: formdata,
    //   });
    //   const data = await response.json();

    //   if (data.length === 0) {
    //     setDataFound(false);
    //   } else if (data) {
    //     setProjectTitle(data[0].title);
    //     setProjectDesc(data[0].description);
    //     setProjectImage(data[0].thumb);
    //     setProjectTech(data[0].techstack[0].TechStack);
    //     setProjectGithub(data[0].github);
    //     setProjectLink(data[0].website);
    //     setReadme(data[0].github.match(/\/([^\/]+)\/?$/)[1]);
    //   }
    // };
    // fetchProject();
  }, [decodeDetailsid]);

  const HandleCopied = useCallback(() => {
    toast.success("Link copied to clipboard", {
      position: "top-center",
    });
    navigator.clipboard.writeText(
      `https://maulanya.my.id/projects/details/${detailsid}`
    );
  }, [detailsid]);

  return (
    <>
      {DataFound ? (
        <section className="xl:px-56 lg:px-20 px-3 mt-10">
          <ToastContainer />
          <div className="flex lg:justify-between flex-col justify-center items-center">
            {ProjectImage && (
              <Image
                src={ProjectImage!}
                className="w-max lg:h-[350px] h-[200px] mb-10 rounded-2xl"
                width={200}
                height={200}
                sizes="100vw"
                alt={ProjectTitle}
                quality={100}
              />
            )}
            <div className="lg:w-[80%] w-full">
              <h1 className="lg:text-3xl text-xl font-bold mt-3 lg:mt-0 mb-3">
                {ProjectTitle}
              </h1>
              <div className="lg:flex block mt-10 justify-between">
                <div>
                  <h3 className="mb-3 font-semibold">Tech Stack:</h3>
                  <div className="flex bg-slate-900 gap-1 p-5 rounded-xl w-full lg:w-[500px]">
                    <Tooltip items={ProjectTech} />
                  </div>
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <h3 className="my-3 md:mt-0 font-semibold">Source:</h3>

                  {ProjectGithub !== null && (
                    <AnimatedShinyLink
                      href={ProjectGithub}
                      className="flex items-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                    >
                      <FaGithub className="mr-3" /> Repository
                      <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyLink>
                  )}
                  {ProjectLink !== null && (
                    <AnimatedShinyLink
                      href={ProjectLink}
                      className="flex items-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                    >
                      <MdOpenInNew className="mr-3" /> Visit
                      <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyLink>
                  )}

                  <AnimatedShinyButton
                    onClick={HandleCopied}
                    className="flex items-center cursor-pointer py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                  >
                    <FaShareAlt className="mr-3" /> Share
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyButton>
                </div>
                <div></div>
              </div>
              <p className="lg:text-base text-sm mt-5 whitespace-pre-line">
                {ProjectDesc}
              </p>

              {ProjectGithub !== "null" && (
                <GitHubReadme username="rizqi-maulana" repo={Readme} />
              )}
            </div>
          </div>
        </section>
      ) : (
        <div className="flex items-center justify-center">
          <h1>Project Not Found</h1>
        </div>
      )}
    </>
  );
}
