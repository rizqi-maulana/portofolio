import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import Skill from "./Skill";
import { FaFilePdf } from "react-icons/fa6";

interface AboutMeType {
  SetShowDetailsSkill: any;
  SkillData: any;
}

export default function AboutMe({
  SetShowDetailsSkill,
  SkillData,
}: AboutMeType) {
  return (
    <section className="lg:flex block">
      <div>
        <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] hover:border-2 border-white rounded-xl md:mt-20 mt-10 mx-auto relative bg-[#151527] group">
          <Image
            src={
              "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1745204894/IMG_20241105_131603_1_rkrwci.webp"
            }
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
          <p className="md:text-sm text-[12px] mt-3">
            My name is Muhammad Rizqi Maulana, I am 19 years old, a web
            fullstack developer and technology enthusiast. I have a strong
            passion for developing modern applications with a focus on security,
            and I am always eager to explore new technologies and automation
            solutions. I have experience working as a developer and mentor in
            several teams, developing web applications using JavaScript,
            TypeScript, Next.js, React.js, and mentoring junior developers.
            Being active in communities and collaborative projects has enriched
            my skills in innovation, teamwork, and adapting to the fast-evolving
            tech landscape. I also enjoy improving SEO for websites and
            experimenting with automation in development processes. Sharing my
            experiences and learning alongside the developer community,
            especially about application security and industry best practices,
            is something I highly value. I am open to collaboration, technology
            discussions, and exploring fresh ideas in application development.
          </p>
          <a
            href="/CV M.Rizqi Maulana.pdf"
            download
            className="flex items-center bg-[#1e1e38] text-xs xl:text-base w-max px-3 py-2 mt-2 rounded-[5px]"
          >
            <FaFilePdf className="mr-2" />
            CV Summary
          </a>
          <div className="mt-5 w-full h-[1px] bg-[#919191] md:hidden" />
        </section>
        <Skill
          SkillData={SkillData}
          SetShowDetailsSkill={SetShowDetailsSkill}
        />
      </div>
    </section>
  );
}
