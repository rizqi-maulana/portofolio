"use client";

import Image from "next/image";
import Verify from "@/assets/image/verify-svgrepo-com.svg";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { useEffect, useMemo, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Loading from "@/app/loading";
import Link from "next/link";
import ProfileImg from "@/assets/image/profile.jpeg";

export default function Profile() {
  const [DisplayName, SetDisplayName] = useState<string>("");
  const [Username, SetUsername] = useState<string>("");
  const [Description, SetDescription] = useState<string>("");
  const [Photo, SetPhoto] = useState<string>("");
  const [Media, SetMedia] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [Instagram, setInstagram] = useState<string>("");
  const [Discord, setDiscord] = useState<string>("");
  const [Telegram, setTelegram] = useState<string>("");
  const [Github, setGithub] = useState<string>("");
  const [Linkedin, setLinkedin] = useState<string>("");

  const GetUserDetails = async () => {
    const response = await fetch("/api/user-details", {
      method: "GET",
    });
    const data = await response.json();
    if (data) {
      SetDisplayName(data[0].display_name);
      SetUsername(data[0].username);
      SetDescription(data[0].description);
      SetPhoto(data[0].photo);
    }
  };
  const fetchSocialMedia = async () => {
    const response = await fetch("/api/social-media", {
      method: "GET",
    });
    const data = await response.json();
    if (data) {
      SetMedia(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    const execute = async () => {
      await GetUserDetails();
      fetchSocialMedia();
    };
    execute();
  }, []);
  useMemo(() => {
    Media.forEach((data: any) => {
      if (data.name === "instagram") {
        setInstagram(data.link);
      }
      if (data.name === "discord") {
        setDiscord(data.link);
      }
      if (data.name === "telegram") {
        setTelegram(data.link);
      }
      if (data.name === "github") {
        setGithub(data.link);
      }
      if (data.name === "linkedin") {
        setLinkedin(data.link);
      }
    });
  }, [Media]);
  return (
    <>
      {loading && <Loading />}
      <div className="flex md:items-center">
        <Image
          src={Photo || ProfileImg}
          quality={100}
          className="rounded-full md:w-[300px] md:h-[300px] w-[100px] h-[100px] object-cover"
          width={100}
          height={100}
          alt="Picture of the author"
          sizes="100vw"
        />
        <div className="md:ml-10 ml-5">
          <div className="flex">
            <h1 className="font-bold md:text-4xl text-xl">{DisplayName}</h1>
            <Image
              src={Verify}
              quality={100}
              className="md:w-[25px] md:h-[25px] w-[15px] h-[15px]"
              width={15}
              height={15}
              alt="Verify"
            />
          </div>
          <p className="md:text-lg text-[10px] text-[#919191]">@{Username}</p>

          <h2 className="md:text-sm text-xs md:mt-5 mt-3">Find me on</h2>
          <div className="flex justify-between md:justify-start mt-2 gap-2 md:gap-4">
            <Link href={Instagram} target="_blank" rel="noopener noreferrer">
              {" "}
              <BsInstagram className="md:w-[25px] md:h-[25px]" />
            </Link>
            <Link href={Discord} target="_blank" rel="noopener noreferrer">
              {" "}
              <FaDiscord className="relative  md:w-[25px] md:h-[25px]" />
            </Link>
            <Link href={Github} target="_blank" rel="noopener noreferrer">
              {" "}
              <FaGithub className="relative  md:w-[25px] md:h-[25px]" />
            </Link>
            <Link href={Telegram} target="_blank" rel="noopener noreferrer">
              <BsTelegram className="relative md:w-[25px] md:h-[25px]" />
            </Link>
            <Link href={Linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="relative md:w-[25px] md:h-[25px]" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="md:text-base text-[12px] mt-10">{Description}</p>
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
