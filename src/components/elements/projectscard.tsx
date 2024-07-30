"use client"
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UpdateProject from '../(modals)/update-project/updateproject';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { fetchData } from '@/app/api/fetch-token/fetchdata';
import CryptoJS from 'crypto-js';
import { TbListDetails } from "react-icons/tb";

interface ProjectData {
    title: string, description: string, tech: Array<any>, website: string, github: string, thumb: string, id: string,
}


export default function Projectcard({ title, description, tech, website, github, thumb, id }: ProjectData) {
    const searchParams = useSearchParams()
    const [ShowUpdate, SetShowUpdate] = useState(false)
    const [userToken, setUserToken] = useState<string>()
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY
    const [access, setAccess] = useState<boolean>(false)
    const HandleDelete = async (id: string) => {
        const formdata = new FormData()
        formdata.append('id', id)
        const response = await fetch('/api/delete-project', {
            method: "DELETE",
            body: formdata
        })
        const data = await response.json()
        if (data.status === 'success') return;

    }

    const ShowUpdateForm = () => {
        if (searchParams.get('id')) {
            SetShowUpdate(true)

        } else {

            SetShowUpdate(false)

        }

    }

    useEffect(() => {
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
                ShowUpdate && <UpdateProject closeModal={SetShowUpdate} />
            }
            <div className="w-[95%] h-max md:w-[500px] md:h-max bg-[#151527] rounded-[5px] relative flex items-center flex-col md:mx-10 md:mt-60 mt-36">
                <Image
                    src={thumb}
                    className="w-max h-[150px] md:w-max md:h-[280px] object-cover absolute md:top-[-200px] top-[-100px] rounded-[5px]"
                    width={150}
                    height={150}
                    alt="Project Image"
                    priority={true}
                    sizes='100vw'
                />
                <div className='p-2 md:p-4 pt-16 md:pt-24 h-[210px] md:h-[280px] flex w-full'>
                    <div className='px-2'>
                        <h2 className='font-bold md:text-xl text-xs'>{title}</h2>
                        <p className='md:text-sm text-[10px]'>{description.slice(0, 170)} {description.length > 170 ? '...' : ''}</p>
                        <div className='flex mt-2'>
                            {
                                tech.map((tech: any) => (
                                    <Image
                                        key={`${tech.tech}${Math.random()}`}
                                        src={tech.icon}
                                        className='md:w-[25px] md:h-[25px] mr-1 md:mr-1 w-[15px] h-[15px] object-cover'
                                        width={15}
                                        height={15}
                                        alt="Tech Stack"
                                        sizes='100vw'
                                    />


                                ))
                            }
                        </div>
                        <div className="flex absolute bottom-2 gap-2 flex-wrap">
                            <a href={github} className={clsx('flex items-center', { 'hidden mr-0': github === 'null' })} target="_blank" rel="noopener noreferrer"><FaGithub className='mr-1' /> <p className='md:text-sm text-[10px]'>Repository</p></a>
                            <a href={website} className={clsx('flex items-center', { 'hidden': website === 'null' })} target="_blank" rel="noopener noreferrer"> <MdOpenInNew className='mr-1' /> <p className='md:text-sm text-[10px]'>Visit</p></a>
                            <Link href={`projects/details/${title}`} className='flex items-center'><TbListDetails className='mr-1' /> <p className='md:text-sm text-[10px]'>Details</p></Link>
                            {
                                access && (
                                    <>
                                        <Link href={`?id=${id}`} onClick={() => ShowUpdateForm()} className='flex'> <FaEdit className='mr-1' /> <p className='md:text-sm text-[10px]'>Update</p></Link>
                                        <button className='flex text-red-400' onClick={() => HandleDelete(id)}> <MdDelete className='mr-1' /> <p className='md:text-sm text-[10px]'>Delete</p></button>
                                    </>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}