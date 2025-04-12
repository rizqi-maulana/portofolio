import ProjectDetails from "@/components/template/ProjectDetails/ProjectDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
  description:
    "Hi, I'm Rizqi Maulana or often called Maulana and I'm a web developer, this is my portofolio, explaining what projects I've created.",
};

export default function page() {
  return <ProjectDetails />;
}
