import ProjectDetails from "@/components/template/ProjectDetails/ProjectDetails"

import { Metadata } from "next";

interface DetailsType {
  params: { detailsid: string };
}


export default function page() {
  return <ProjectDetails />
}

export async function generateMetadata({ params }: DetailsType): Promise<Metadata> {
  const decodeurl = decodeURIComponent(`${params.detailsid}`)
  return {
    title: decodeURIComponent(`${decodeurl}`),
    description: `project details from ${decodeurl}, explanation of the project, techstack and further information regarding the project.`,
  };
}