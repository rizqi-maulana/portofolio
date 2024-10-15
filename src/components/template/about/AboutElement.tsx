'use client'

import Education from "@/components/Organism/about/Education";
import UpdateSkill from "@/components/(modals)/update-skill/updateskill";
import { useState, useEffect } from "react";
import Loading from "../../../app/loading";
import { fetchData } from "@/app/api/fetch-token/fetchdata";
import { Work } from "@/components/Organism/about/Work";
import CryptoJS from "crypto-js";
import Trip from "@/components/Organism/about/Trip";
import AboutMe from "@/components/Organism/about/Aboutme";
import DetailsSkill from "@/components/(modals)/skill-details/detailsskill";

export default function AboutElement() {
    const [loading, setLoading] = useState(true);
    const [access, setAccess] = useState<boolean>(false)
    const [userToken, setUserToken] = useState<string>()
    const [About, SetAbout] = useState<string>('')
    const [Photo, SetPhoto] = useState<string>('')
    const [ShowUpdateSkill, SetShowUpdateSkill] = useState(false)
    const [ShowDetailsSkill, SetShowDetailsSkill] = useState(false)
    const [Data, setData] = useState<any>([])
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY

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

        const FetchUserSkill = async () => {
            const res = await fetch(`/api/skills`, {
                method: "GET"
            })
            const resdata = await res.json()
            if (resdata)
                console.log(resdata)
            setData(resdata)
        }
        FetchUserSkill()
    }, [])
    return (
        <>
            {
                loading && <Loading />
            }
            {ShowUpdateSkill && <UpdateSkill closeModal={SetShowUpdateSkill} />}
            {ShowDetailsSkill && <DetailsSkill Data={Data} closeModal={SetShowDetailsSkill} />}
            <section className="md:px-10 lg:px-56 px-8">
                <AboutMe SkillData={Data} Photo={Photo} About={About} access={access} SetShowUpdateSkill={SetShowUpdateSkill} SetShowDetailsSkill={SetShowDetailsSkill} />
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
    )
}