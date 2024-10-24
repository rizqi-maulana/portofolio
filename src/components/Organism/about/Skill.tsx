import { Skillcontainer } from "@/components/elements/skillcontainer"
import { FaRocket } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

interface SkillType {
  access: boolean,
  SetShowUpdateSkill: any
  SetShowDetailsSkill: any
  SkillData: any
}

export default function Skill({ access, SetShowUpdateSkill, SetShowDetailsSkill, SkillData }: SkillType) {
  return (
    <section>
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <FaCode className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
          <h2 className="font-bold text-xl">Skill</h2>
        </div>
        {/* Admin Access */}
        {

          access &&
          <button className="flex items-center bg-[#151527] px-3 py-2 rounded-[5px]" onClick={() => SetShowUpdateSkill(true)}><FaRocket className="mr-2" />Update Skill</button>
        }
        {/* Admin Access */}
      </div>
      <Skillcontainer SkillData={SkillData} />
      <button className="flex items-center bg-[#151527] text-xs xl:text-base px-3 py-2 mt-2 rounded-[5px]" onClick={() => SetShowDetailsSkill(true)}><GrTechnology className="mr-2" />see Details</button>
    </section>
  )
}