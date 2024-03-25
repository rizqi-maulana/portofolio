'use client'

import Header from "@/components/elements/header"
import Projectcard from "@/components/elements/projectscard"
import { RiUploadCloud2Fill } from "react-icons/ri";
import UploadProject from "@/components/(modals)/upload-project/uploadproject"
import { useState, useEffect } from "react"
import { fetchData } from "../api/fetch-token/fetchdata";
import CryptoJS from "crypto-js";

export const ProjectsElement = () => {
    const [ShowUploadProject, SetUploadProject] = useState(false)
    const [Projects, SetProjects] = useState<any>([]);
    const [userToken, setUserToken] = useState<string>()
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY
    const [access, setAccess] = useState<boolean>(false)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchProjects = async () => {
            try {
                const response = await fetch('/api/projects', {
                    method: "GET"
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                if (data) SetProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };
        FetchProjects()
        async function getLoader() {
            const { cardio } = await import('ldrs')
            cardio.register()
        }
        getLoader()
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

        if (token && SecretKey) {
            const accessToken = CryptoJS.AES.decrypt(token, SecretKey).toString(CryptoJS.enc.Utf8);
            if (userToken === accessToken) {
                setAccess(true);
            }
        } else {
            console.log('Token or secret key not available');
        }


    }, [userToken, SecretKey])
    return (
        <>
            <Header />

            {/* start error disini */}
            {
                ShowUploadProject && <UploadProject closeModal={SetUploadProject} />
            }
            {/* end error disini */}

            {
                access &&
                <button onClick={() => SetUploadProject(true)} className="mx-auto flex mt-5 items-center bg-[#151527] px-3 py-2 rounded-[5px]"><RiUploadCloud2Fill className="mr-2" /> Upload Project</button>
            }
            <section className='px-3 flex flex-col items-center md:px-10 md:flex-wrap md:grid md:grid-cols-2 md:w-max md:mx-auto'>

                {

                    // loading ? (
                    // <l-cardio
                    //     size="45"
                    //     speed="2"
                    //     color="white"
                    // ></l-cardio>
                    // ) :
                    Projects.map((ProjectData: any) => (
                        <Projectcard key={ProjectData.id} id={ProjectData.id} title={ProjectData.title} description={ProjectData.description} tech={ProjectData.techstack[0].TechStack.map((data: any) => data)} website={ProjectData.website} github={ProjectData.github} thumb={ProjectData.thumb} />
                    ))

                }

            </section>
        </>
    )
}