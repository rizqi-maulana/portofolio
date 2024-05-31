
import ShortTrip from "@/components/elements/shorttrip";
import { RiWechatChannelsLine } from "react-icons/ri";

export default function Trip() {
  return (
    <section>

      <div className="flex mt-5">
        <RiWechatChannelsLine className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
        <h2 className="font-bold text-xl">Short Trip</h2>
      </div>
      <ShortTrip />
    </section>
  )
}