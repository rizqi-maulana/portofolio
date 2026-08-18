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
              "https://res.cloudinary.com/dju3jontk/image/upload/v1762918093/MVIMG_20250622_114929_2_1_hsiltu.webp"
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
            I'm Muhammad Rizqi Maulana, a full-stack developer based in Mataram, Indonesia, specialized in React, Next.js, and React Native. I focus on shipping reliable products end-to-end, from interface to API to deployment.
          </p>
          <p className="md:text-sm text-[12px] mt-3">
            As a Full-Stack Developer at Full Code Studios (Jul 2024 – Apr 2026), I built and shipped full-stack web applications using React/Next.js and Node.js/NestJS, owning features from concept through production deployment. I integrated internal and third-party APIs, set up CI/CD pipelines to automate testing and deployment, and developed responsive, accessible interfaces with React and Tailwind CSS. Earlier, as a Front-End Developer at Cloud Gakkai, I partnered with backend engineers on API integration and UI state management.
          </p>
          <p className="md:text-sm text-[12px] mt-3">
            I also enjoy mentoring. As a Mentor at UnboxLabs, I guided junior developers in React, JavaScript, and full-stack fundamentals, reviewed code, and coached best practices — work recognized with a Teaching Certificate and an Award of Appreciation.
          </p>
          <p className="md:text-sm text-[12px] mt-3">
            My toolkit includes React, Next.js, React Native, TypeScript, JavaScript, Tailwind CSS, Node.js, NestJS, MongoDB, Supabase, Git, and CI/CD. I am currently pursuing a Bachelor's degree in Software Engineering at Bumigora University.
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
