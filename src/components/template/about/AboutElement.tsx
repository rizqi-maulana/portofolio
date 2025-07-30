"use client";

import Education from "@/components/Organism/about/Education";
import { Work } from "@/components/Organism/about/Work";
import Trip from "@/components/Organism/about/Trip";
import AboutMe from "@/components/Organism/about/Aboutme";
import DetailsSkill from "@/components/(modals)/skill-details/detailsskill";
import { useState } from "react";
import { Tech } from "@/app/data";

export default function AboutElement() {
  const [ShowDetailsSkill, SetShowDetailsSkill] = useState(false);

  return (
    <>
      {ShowDetailsSkill && (
        <DetailsSkill Data={Tech} closeModal={SetShowDetailsSkill} />
      )}
      <section className="md:px-10 lg:px-56 px-8">
        <AboutMe SkillData={Tech} SetShowDetailsSkill={SetShowDetailsSkill} />
        <div className="h-[1px] mt-8 bg-[#919191]" />
        <div className="block lg:flex mt-3 lg:justify-between w-full">
          <div className="grid gap-5 md:gap-10">
            <Education />
            <Work />
          </div>
          <Trip />
        </div>
      </section>
    </>
  );
}
