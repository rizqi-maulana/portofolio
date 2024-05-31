import ProjectDetails from "@/components/template/ProjectDetails/ProjectDetails"

import { Metadata } from "next";

interface DetailsType {
  params: { detailsid: string };
}


export default function page() {
  return <ProjectDetails />
}

export async function generateMetadata({ params }: DetailsType): Promise<Metadata> {
  return {
    title: decodeURIComponent(`${params.detailsid}`),
  };
}