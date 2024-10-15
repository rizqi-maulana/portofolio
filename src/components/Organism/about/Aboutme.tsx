import Image from "next/image"
import { CiBookmark } from "react-icons/ci";
import Skill from "./Skill";
import Profile from '@/assets/image/profile.jpg'


interface AboutMeType {
  Photo: string,
  About: string,
  access: boolean,
  SetShowUpdateSkill: any
  SetShowDetailsSkill: any
  SkillData: any
}

export default function AboutMe({ Photo, About, access, SetShowUpdateSkill, SetShowDetailsSkill, SkillData }: AboutMeType) {
  return (
    <section className="lg:flex block">
      <div>
        <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] hover:border-2 border-white rounded-xl md:mt-20 mt-10 mx-auto relative bg-[#151527] group">
          <Image
            src={Photo || Profile}
            className="rounded-xl w-[240px] h-[240px] md:w-[300px] md:h-[300px] group-hover:transition-all duration-300 absolute md:group-hover:left-[-20px] md:group-hover:top-[-20px] group-hover:left-[-20px] group-hover:top-[-20px] left-0 top-0 object-cover group-hover:scale-110"
            width={250}
            height={250}
            quality={100}
            alt="Picture of the author"
            sizes="100vw"
          />
        </div>

      </div>

      <div className="block lg:ml-20">

        <section>
          <div className="flex mt-10">
            <CiBookmark className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
            <h2 className="font-bold text-xl">About Me</h2>
          </div>
          {
            About.split('\n').map((item: string, index: number) => (
              <p key={index} className="md:text-sm text-[12px] mt-3">{item}</p>
            ))
          }
          <div className="mt-5 w-full h-[1px] bg-[#919191] md:hidden" />
        </section>
        <Skill SkillData={SkillData} access={access} SetShowDetailsSkill={SetShowDetailsSkill} SetShowUpdateSkill={SetShowUpdateSkill} />
      </div>

    </section>
  )
}