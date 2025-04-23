import { Experience } from "@/components/elements/experience";
import { MdWork } from "react-icons/md";

export const Work = () => {
  return (
    <section>
      <div className="flex mt-5">
        <MdWork className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
        <h2 className="font-bold text-xl">Work Experience</h2>
      </div>
      <Experience />
    </section>
  );
};
