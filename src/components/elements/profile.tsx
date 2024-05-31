'use client'

import Image from "next/image"
import Verify from '@/assets/image/verify-svgrepo-com.svg'
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { useEffect, useMemo, useState } from "react";
import Loading from "@/app/loading";
import Link from "next/link";
import ProfileImg from '@/assets/image/profile.jpg'


export default function Profile() {
    const [DisplayName, SetDisplayName] = useState<string>('');
    const [Username, SetUsername] = useState<string>('');
    const [Description, SetDescription] = useState<string>('');
    const [Photo, SetPhoto] = useState<string>('');
    const [Media, SetMedia] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [Instagram, setInstagram] = useState<string>('');
    const [Discord, setDiscord] = useState<string>('');
    const [Telegram, setTelegram] = useState<string>('');
    const [Github, setGithub] = useState<string>('');


    const GetUserDetails = async () => {
        const response = await fetch('/api/user-details', {
            method: "GET",
        })
        const data = await response.json()
        if (data) {
            SetDisplayName(data[0].display_name);
            SetUsername(data[0].username);
            SetDescription(data[0].description);
            SetPhoto(data[0].photo);


        }

    }
    const fetchSocialMedia = async () => {
        const response = await fetch('/api/social-media', {
            method: "GET",
        })
        const data = await response.json()
        if (data) {
            SetMedia(data);
        }
        setLoading(false);
    }


    useEffect(() => {
        const execute = async () => {
            await GetUserDetails()
            fetchSocialMedia()
        }
        execute()
    }, [])
    useMemo(() => {
        Media.forEach((data: any) => {
            if (data.name === 'instagram') {
                setInstagram(data.link)
            }
            if (data.name === 'discord') {
                setDiscord(data.link)
            }
            if (data.name === 'telegram') {
                setTelegram(data.link)
            }
            if (data.name === 'github') {
                setGithub(data.link)
            }

        });

    }, [Media])
    return (
        <>
            {
                loading && <Loading />
            }
            <div className="flex md:items-center">
                <Image
                    src={Photo || ProfileImg}
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
                            className="md:w-[25px] md:h-[25px] w-[15px] h-[15px]"
                            width={15}
                            height={15}
                            alt="Verify"

                        />
                    </div>
                    <p className="md:text-lg text-[10px] text-[#919191]">@{Username}</p>

                    <h2 className="md:text-sm text-xs md:mt-5 mt-3">Find me on</h2>
                    <div className="flex justify-between md:justify-start mt-2 gap-4">
                        <a href={Instagram} target="_blank" rel="noopener noreferrer"> <BsInstagram className="md:w-[25px] md:h-[25px]" /></a>
                        <a href={Discord} target="_blank" rel="noopener noreferrer"> <FaDiscord className="relative left-[-5px] md:w-[25px] md:h-[25px]" /></a>
                        <a href={Github} target="_blank" rel="noopener noreferrer"> <FaGithub className="relative left-[-10px] md:w-[25px] md:h-[25px]" /></a>
                        <a href={Telegram} target="_blank" rel="noopener noreferrer"><BsTelegram className="relative left-[-15px] md:w-[25px] md:h-[25px]" /></a>
                    </div>
                </div>
            </div>
            <div>
                <p className="md:text-xl text-[12px] mt-10">{Description}</p>
                <Link href={"/about"} className="text-[#838383] md:text-sm text-[10px] mt-1">Click here For More...</Link>
            </div>
        </>
    )
}