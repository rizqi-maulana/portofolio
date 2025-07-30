"use client";

import Image from "next/image";
import Verify from "@/assets/image/verify-svgrepo-com.svg";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="flex md:items-center">
        <Image
          src={
            "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1745204894/IMG_20241105_131603_1_rkrwci.webp"
          }
          quality={100}
          className="rounded-full md:w-[300px] md:h-[300px] w-[100px] h-[100px] object-cover"
          width={100}
          height={100}
          alt="Picture of the author"
          sizes="100vw"
        />
        <div className="md:ml-10 ml-5">
          <div className="flex">
            <h1 className="font-bold md:text-4xl text-xl">Maulana</h1>
            <Image
              src={Verify}
              quality={100}
              className="md:w-[25px] md:h-[25px] w-[15px] h-[15px]"
              width={15}
              height={15}
              alt="Verify"
            />
          </div>
          <p className="md:text-lg text-[10px] text-[#919191]">@Mauln</p>

          <h2 className="md:text-sm text-xs md:mt-5 mt-3">Find me on</h2>
          <div className="flex justify-between md:justify-start mt-2 gap-2 md:gap-4">
            <Link
              href={
                "https://www.instagram.com/maulana151526?igsh=MWF5Y3M5dHRrMmdqNw=="
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsInstagram className="md:w-[25px] md:h-[25px]" />
            </Link>
            <Link
              href={"https://discord.com/users/753298841712721961"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaDiscord className="relative  md:w-[25px] md:h-[25px]" />
            </Link>
            <Link
              href={"https://github.com/rizqi-maulana"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub className="relative  md:w-[25px] md:h-[25px]" />
            </Link>
            <Link
              href={"https://t.me/MRizqi_Maulana"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram className="relative md:w-[25px] md:h-[25px]" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rizqi-maulana-3535032a5/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="relative md:w-[25px] md:h-[25px]" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="md:text-base text-[12px] mt-10">
          Web Developer who loves crafting polished web experiences, especially
          on the frontend. I use JavaScript, React.js, and Next.js to make
          things look great. Collaborating with teams, I enjoy creating dynamic
          and visually appealing web applications.
        </p>
        <Link
          href={"/about"}
          className="text-[#838383] md:text-xs text-[10px] mt-1"
        >
          Click here For More...
        </Link>
      </div>
    </>
  );
}
