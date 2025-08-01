import Projectcard from "@/components/elements/projectscard";

interface ProjectShowType {
  Projects: Array<any>;
}

export default function ProjectShow({ Projects }: ProjectShowType) {
  return (
    <section className="px-3 flex flex-col items-center md:px-10 md:flex-wrap md:grid md:grid-cols-2 md:w-max md:mx-auto">
      {Projects.map((ProjectData: any) => (
        <Projectcard
          key={ProjectData.name}
          title={ProjectData.name}
          description={ProjectData.description}
          tech={ProjectData.tech.map((data: any) => data)}
          website={ProjectData.website}
          github={ProjectData.github}
          thumb={ProjectData.thumb}
        />
      ))}
    </section>
  );
}
