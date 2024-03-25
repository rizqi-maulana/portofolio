import { Metadata } from "next";
import { ProjectsElement } from "./ProjectsElement";

export const metadata: Metadata = {
    title: 'Projects',
    description: "Hi, I'm Rizqi Maulana or often called Maulana and I'm a web developer, this is my portofolio, explaining what projects I've created.",
    keywords: 'Projects Rizqi Maulana Portofolio Maulanya',
}

export default function Page() {
    return (
        <ProjectsElement />
    )
}
