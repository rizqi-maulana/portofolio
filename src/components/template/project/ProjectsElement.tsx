'use client'

import UploadProject from "@/components/(modals)/upload-project/uploadproject"
import { UploadProjectBtn } from "@/components/Organism/project/UploadProjectBtn"
import { useState, useEffect } from "react"
import { fetchData } from "../../../app/api/fetch-token/fetchdata";
import CryptoJS from "crypto-js";
import ProjectShow from "@/components/Organism/project/ProjectShow"

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
        }


    }, [userToken, SecretKey])

    return (
        <>

            {
                ShowUploadProject && <UploadProject closeModal={SetUploadProject} />
            }

            <UploadProjectBtn access={access} SetUploadProject={SetUploadProject} />

            <ProjectShow Projects={Projects} />
        </>
    )
}