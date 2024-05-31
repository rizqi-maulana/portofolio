import Image from "next/image"
import { CiBookmark } from "react-icons/ci";
import Skill from "./Skill";
import Profile from '@/assets/image/profile.jpg'


interface AboutMeType {
  Photo: string,
  About: string,
  access: boolean,
  SetShowUpdateSkill: any
}

export default function AboutMe({ Photo, About, access, SetShowUpdateSkill }: AboutMeType) {
  return (
    <section className="lg:flex block">
      <div>
        <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] border-2 border-white rounded-xl md:mt-20 mt-10 mx-auto relative bg-[#151527]">
          <Image
            src={Photo || Profile}
            className="rounded-xl w-[240px] h-[240px] md:w-[300px] md:h-[300px] absolute md:left-[-40px] md:top-[-40px] left-[-20px] top-[-20px] object-cover"
            width={250}
            height={250}
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
          <p className="md:text-sm text-[12px] mt-3">{About}</p>
          <div className="mt-5 w-full h-[1px] bg-[#919191] md:hidden" />
        </section>
        <Skill access={access} SetShowUpdateSkill={SetShowUpdateSkill} />
      </div>

    </section>
  )
}