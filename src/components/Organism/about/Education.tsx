import { Bumigora } from "@/components/elements/bumigora";
import { Smkn2mtr } from "@/components/elements/smkn2mtr";
import { PiGraduationCap } from "react-icons/pi";

export default function Education() {
  return (
    <section>
      <div className="flex mt-5">
        <PiGraduationCap className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
        <h2 className="font-bold text-xl">Education</h2>
      </div>
      <Bumigora />
      <Smkn2mtr />
    </section>
  );
}
