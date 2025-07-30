"use client";
import ProjectShow from "@/components/Organism/project/ProjectShow";
import { Project } from "@/app/data";

export const ProjectsElement = () => {
  return (
    <>
      <ProjectShow Projects={Project} />
    </>
  );
};
