import { Experience } from "@/components/elements/experience"
import { MdWork } from "react-icons/md";
import { experince } from "@/data/experience";

export const Work = () => {
  return (
    <section>
      <div className="flex mt-5">
        <MdWork className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
        <h2 className="font-bold text-xl">Work Experience</h2>
      </div>
      {
        experince.map((data: any, id: number) => (
          <Experience key={id} Company={data.Company} Location={data.Location} Date={data.Date} ExpeImage={data.Image} />
        )
        )
      }
    </section>
  )
}