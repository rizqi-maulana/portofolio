'use client'

import Header from "@/components/elements/header"
import Image from "next/image"
import { CiBookmark } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { Skillcontainer } from "@/components/elements/skillcontainer";
import { PiGraduationCap } from "react-icons/pi";
import Smkn2mtr from "@/components/elements/smkn2mtr";
import { FaRocket } from "react-icons/fa";
import UpdateSkill from "@/components/(modals)/update-skill/updateskill";
import { useState, useEffect } from "react";
import Loading from "../loading";
import { fetchData } from "../api/fetch-token/fetchdata";
import ShortTrip from "@/components/elements/shorttrip";
import CryptoJS from "crypto-js";
import { RiWechatChannelsLine } from "react-icons/ri";

export default function AboutElement() {
    const [About, SetAbout] = useState<string>('')
    const [Photo, SetPhoto] = useState<string>('')
    const [loading, setLoading] = useState(true);
    const [userToken, setUserToken] = useState<string>()
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY
    const [access, setAccess] = useState<boolean>(false)

    const [ShowUpdateSkill, SetShowUpdateSkill] = useState(false)

    useEffect(() => {
        const GetUserDetails = async () => {
            const response = await fetch('/api/user-details', {
                method: "GET",
            })
            const data = await response.json()
            if (data) {
                SetPhoto(data[0].photo);
                SetAbout(data[0].about);
            }
            setLoading(false);

        }
        GetUserDetails()
        fetchData()
            .then(data => {
                setUserToken(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [])
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            if (SecretKey) {
                const accessToken = CryptoJS.AES.decrypt(token, SecretKey).toString(CryptoJS.enc.Utf8)
                if (userToken === accessToken) {
                    setAccess(true)
                }
            }
        }
    }, [userToken, SecretKey])

    return (
        <>
            {
                loading && <Loading />
            }
            {ShowUpdateSkill && <UpdateSkill closeModal={SetShowUpdateSkill} />}
            <Header />
            <section className="md:px-10 lg:px-56 px-8">

                <div className="lg:flex block">


                    <section>
                        <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] border-2 border-white rounded-xl md:mt-20 mt-10 mx-auto relative bg-[#151527]">
                            <Image
                                src={Photo}
                                className="rounded-xl w-[240px] h-[240px] md:w-[300px] md:h-[300px] absolute md:left-[-40px] md:top-[-40px] left-[-20px] top-[-20px] object-cover"
                                width={250}
                                height={250}
                                alt="Picture of the author"
                                priority
                            />
                        </div>

                    </section>

                    <div className="block lg:ml-20">

                        <section>
                            <div className="flex mt-10">
                                <CiBookmark className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
                                <h2 className="font-bold text-xl">About Me</h2>
                            </div>
                            <p className="md:text-sm text-[12px] mt-3">{About}</p>
                            <div className="mt-5 w-full h-[1px] bg-[#919191] md:hidden" />
                        </section>

                        <section>
                            <div className="flex mt-5 justify-between">
                                <div className="flex">
                                    <FaCode className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
                                    <h2 className="font-bold text-xl">Skill</h2>
                                </div>
                                {/* Admin Access */}
                                {

                                    access &&
                                    <button className="flex items-center bg-[#151527] px-3 py-2 rounded-[5px]" onClick={() => SetShowUpdateSkill(true)}><FaRocket className="mr-2" /> Update Skill</button>
                                }
                                {/* Admin Access */}
                            </div>
                            <Skillcontainer />
                        </section>

                    </div>

                </div>
                <div className="h-[1px] mt-8 bg-[#919191]" />
                <div className="block lg::flex mt-3 md:justify-between w-full">
                    <section>

                        <div className="flex mt-5">
                            <PiGraduationCap className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
                            <h2 className="font-bold text-xl">Education</h2>
                        </div>
                        <Smkn2mtr />
                    </section>

                    <section>

                        <div className="flex mt-5">
                            <RiWechatChannelsLine className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative left-[-5px]" />
                            <h2 className="font-bold text-xl">Short Trip</h2>
                        </div>
                        <ShortTrip />
                    </section>
                </div>


            </section>
        </>
    )
}