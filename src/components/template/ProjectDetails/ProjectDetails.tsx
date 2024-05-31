"use client"

import { useCallback, useEffect } from "react"
import { useParams } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { AnimatedTooltip } from "@/components/elements/animated-tooltip"
import AnimatedShinyLink from "@/components/elements/animated-shiny-link"
import { FaGithub } from "react-icons/fa";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MdOpenInNew } from "react-icons/md"
import { FaShareAlt } from "react-icons/fa";
import AnimatedShinyButton from "@/components/elements/animated-shiny-button"
import { AnimatedList } from "@/components/elements/animated-list"
import { Notification } from "@/components/elements/Notification"

export default function ProjectDetails() {
  const { detailsid } = useParams()
  const [ProjectTitle, setProjectTitle] = useState<string>('')
  const [ProjectImage, setProjectImage] = useState<string>('')
  const [ProjectDesc, setProjectDesc] = useState<string>('')
  const [ProjectTech, setProjectTech] = useState<any[]>([])
  const [ProjectGithub, setProjectGithub] = useState<string>('')
  const [ProjectLink, setProjectLink] = useState<string>('')
  const decodeDetailsid = decodeURIComponent(`${detailsid}`)
  const [DataFound, setDataFound] = useState<boolean>(true)
  const [ShowNotif, setShowNotif] = useState<boolean>(false)
  useEffect(() => {
    const fetchProject = async () => {
      const formdata = new FormData()
      formdata.append('params', `${decodeDetailsid}`)
      const response = await fetch('/api/project-details', {
        method: "POST",
        body: formdata
      });
      const data = await response.json();

      if (data.length === 0) {
        setDataFound(false)
      } else if (data) {
        setProjectTitle(data[0].title)
        setProjectDesc(data[0].description)
        setProjectImage(data[0].thumb)
        setProjectTech(data[0].techstack[0].TechStack)
        setProjectGithub(data[0].github)
        setProjectLink(data[0].website)
      }
    }
    fetchProject()
  }, [])

  const HandleCopied = useCallback(() => {
    setShowNotif(true)
    navigator.clipboard.writeText(`https://maulanya.com/projects/details/${detailsid}`)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowNotif(false)
    }, 2000);
  }, [ShowNotif])

  return (
    <>
      {
        DataFound ? (
          <section className="lg:px-56 px-3 mt-10">
            {
              ShowNotif &&
              <AnimatedList>
                <Notification color="#1E86FF" />
              </AnimatedList>
            }
            <div className="lg:flex justify-between block ">
              <div>
                {
                  ProjectImage &&
                  <Image src={ProjectImage!} className="w-[200px] h-[200px] rounded-2xl" width={200} height={200} sizes="(100vw)" alt={ProjectTitle} />
                }
              </div>
              <div className="lg:w-[80%] w-full">
                <h1 className="text-3xl font-bold mb-3">{ProjectTitle}</h1>
                <p>{ProjectDesc}</p>
                <div />
                <div className="mt-10 lg:flex block justify-between">
                  <div>
                    <h3 className="mb-3 font-semibold">Tech Stack:</h3>
                    <div className="flex bg-slate-900 p-5 rounded-xl w-full lg:w-[500px]">
                      <AnimatedTooltip items={ProjectTech} />

                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-2">
                    <h3 className="mb-3 font-semibold">Source:</h3>

                    {ProjectGithub !== 'null' &&
                      <AnimatedShinyLink href={ProjectGithub} className="flex items-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <FaGithub className="mr-3" /> Repository
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                      </AnimatedShinyLink>

                    }
                    {
                      ProjectLink !== 'null' &&
                      <AnimatedShinyLink href={ProjectLink} className="flex items-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <MdOpenInNew className="mr-3" /> Visit
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                      </AnimatedShinyLink>
                    }

                    <AnimatedShinyButton onClick={HandleCopied} className="flex items-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <FaShareAlt className="mr-3" /> Share
                      <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyButton>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex items-center justify-center">
            <h1>Project Not Found</h1>
          </div>
        )
      }
    </>
  )
}