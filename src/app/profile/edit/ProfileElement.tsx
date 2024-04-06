"use client"

import Header from "@/components/elements/header"
import Image from 'next/image'
import { FaKey } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import React, { FormEvent, useEffect, useState } from 'react';
import SuccessCard from '@/components/elements/successcard';
import { fetchData } from '@/app/api/fetch-token/fetchdata';
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function ProfileElement() {
    const router = useRouter()
    const [DisplayName, SetDisplayName] = useState<string>('');
    const [Username, SetUsername] = useState<string>('');
    const [Description, SetDescription] = useState<string>('');
    const [Password, SetPassword] = useState<string>('');
    const [Email, SetEmail] = useState<string>('');
    const [About, SetAbout] = useState<string>('');
    const [Profileimg, SetProfileimg] = useState<string>('');
    const [showSuccess, setShowSuccess] = useState(false)
    const [userToken, setUserToken] = useState<string>()
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY
    const [access, setAccess] = useState<boolean>(false)
    const [SelectedImage, setSelectedImage] = useState<string>('');
    const [SelectedFile, setSelectedFile] = useState<File | undefined>()
    const [NewToken, setNewToken] = useState<string>('')
    const [Token, SetToken] = useState<string>('');
    const [Loading, setLoading] = useState<boolean>(false)
    // const [Discord, SetDiscord] = useState<string>();
    // const [Telegram, SetTelegram] = useState<string>();
    // const [Github, SetGithub] = useState<string>();
    // const [Instagram, SetInstagram] = useState<string>();
    useEffect(() => {
        const GetUserDetails = async () => {
            const response = await fetch('/api/user-details', {
                method: "GET",
            })
            const data = await response.json()
            if (data) {
                SetDisplayName(data[0].display_name);
                SetProfileimg(data[0].photo)
                SetUsername(data[0].username);
                SetDescription(data[0].description);
                SetPassword(data[0].password);
                SetEmail(data[0].email);
                SetAbout(data[0].about);
                SetToken(data[0].token);

                // SetDiscord(data[0].discord);
                // SetTelegram(data[0].telegram);
                // SetGithub(data[0].github);
                // SetInstagram(data[0].instagram);
            }

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

    const FetchAvatar = async (FileName: string) => {
        const formdata = new FormData()
        formdata.append('FileName', FileName)
        const response = await fetch('/api/fetch-avatar', {
            method: 'POST',
            body: formdata
        })
        const data = await response.json()
        const publicUrl = data.publicUrl

        if (data.status === 'success') {
            await UpdateDataUser(publicUrl)
            setLoading(false)
        }

    }

    const UpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (SelectedImage !== '') {
            setLoading(true)
            if (SelectedFile !== undefined) {
                const FileName: string = `profile_${uuidv4()}`
                const formdata = new FormData()
                formdata.append('File', SelectedFile)
                formdata.append('FileName', FileName)
                const response = await fetch('/api/update-avatar', {
                    method: "PATCH",
                    body: formdata
                })
                const data = await response.json()
                if (data.status === true) FetchAvatar(FileName)


            }

        } else (
            UpdateDataUser()
        )


    }

    const UpdateDataUser = async (publicUrl?: string) => {

        const response = await fetch('/api/update-user', {
            method: "PUT",
            body: JSON.stringify({
                display_name: DisplayName,
                username: Username,
                description: Description,
                password: Password,
                email: Email,
                about: About,
                token: NewToken !== '' ? NewToken : Token,
                photo: publicUrl !== undefined ? publicUrl : Profileimg
                // discord: Discord,
                // telegram: Telegram,
                // github: Github,
                // instagram: Instagram,
            })
        })
        const data = await response.json()
        if (data.status === 'success') {
            setShowSuccess(true)
            setTimeout(() => {
                router.push('/')
            }, 4000);
        }
    }

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        setSelectedFile(file)
        reader.onloadend = () => {
            const imageDataUrl: any = reader.result;
            setSelectedImage(imageDataUrl);
        };

        reader.readAsDataURL(file);
    };

    const ChangeToken = async () => {
        setNewToken(uuidv4())
    }
    return (
        <>
            {
                Loading && <div className="fixed inset-0 h-screen w-screen flex items-center justify-center flex-col bg-[#0D0D18]/50 z-[1000]">
                    <p>Uploading Image</p>
                    <div className="loader mt-3"></div>

                </div>
            }
            {
                showSuccess && <SuccessCard message="Profile Updated" />
            }

            {
                access && <div>
                    <Header />
                    <form onSubmit={UpdateUser} className='mt-5 md:px-56 px-8 pb-5 md:flex'>
                        <div>
                            <Image
                                src={SelectedImage ? SelectedImage : Profileimg}
                                className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full object-cover mb-3 md:mx-0 mx-auto'
                                width={100}
                                height={100}
                                alt="Picture of the author"
                                priority
                            />
                            <label htmlFor="picture" className='cursor-pointer text-[12px] text-[#1572B6] block text-center'>Change Picture</label>
                            <button type='button' className='bg-[#151527] px-3 py-2 rounded-[5px] mt-5 items-center hidden md:flex' onClick={() => ChangeToken()} ><FaKey className='mr-1' /> Reset Token</button>
                            <button type='submit' className='bg-[#151527] px-3 py-2 rounded-[5px] mt-5 items-center hidden md:flex'><CiSaveDown2 className='mr-1' /> Save Change</button>
                        </div>
                        <div className='flex flex-col items-center md:ml-20'>
                            <input type="file" name="picture" id="picture" className='hidden' accept='image/*' onChange={handleImageUpload} />
                            <div className='flex flex-col items-start w-full'>
                                <label htmlFor="DName" className='text-[12px] font-bold'>Display Name:</label>
                                <input type="text" id='DName' value={DisplayName} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' onChange={(e) => SetDisplayName(e.target.value)} />
                                <label htmlFor="DName" className='text-[12px] font-bold'>Username:</label>
                                <input type="text" id='DName' value={Username} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' onChange={(e) => SetUsername(e.target.value)} />
                                <label htmlFor="Password" className='text-[12px] font-bold mt-5'>Password:</label>
                                <input type="text" id='Password' readOnly defaultValue={Password} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' onChange={(e) => SetPassword(e.target.value)} />
                                <label htmlFor="Email" className='text-[12px] font-bold mt-5'>Email:</label>
                                <input type="text" readOnly defaultValue={Email} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' />
                                <label htmlFor="About" className='text-[12px] font-bold mt-5'>About:</label>
                                <textarea name="about" id="About" value={About} cols={30} rows={10} className='w-full h-[100px] md:w-[700px] md:h-[120px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' onChange={(e) => SetAbout(e.target.value)}></textarea>
                                <label htmlFor="About" className='text-[12px] font-bold mt-5'>Description:</label>
                                <textarea name="about" id="About" value={Description} cols={30} rows={10} className='w-full h-[100px] md:w-[700px] md:h-[120px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' onChange={(e) => SetDescription(e.target.value)}></textarea>
                                {/* <label htmlFor="Discord" className='text-[12px] font-bold mt-5'>Discord:</label>
                        <input type="text" id='Discord' value={Discord} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' />
                        <label htmlFor="Telegram" className='text-[12px] font-bold mt-5'>Telegram:</label>
                        <input type="text" id='Telegram' value={Telegram} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' />
                        <label htmlFor="Github" className='text-[12px] font-bold mt-5'>Github:</label>
                        <input type="text" id='Github' value={Github} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' />
                        <label htmlFor="Instagram" className='text-[12px] font-bold mt-5'>Instagram:</label>
                        <input type="text" id='Instagram' value={Instagram} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' /> */}
                                <label htmlFor="Token" className='text-[12px] font-bold mt-5'>Token:</label>
                                <input type="text" readOnly value={NewToken === '' ? Token : NewToken} className='w-full h-[35px] md:w-[700px] md:h-[45px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' />
                            </div>
                            <button type='button' className='bg-[#151527] px-3 py-2 rounded-[5px] mt-5 flex items-center md:hidden' onClick={() => ChangeToken()} ><FaKey className='mr-1' /> Reset Token</button>
                            <button type='submit' className='bg-[#151527] px-3 py-2 rounded-[5px] mt-5 flex items-center md:hidden'><CiSaveDown2 className='mr-1' /> Save Change</button>
                        </div>


                    </form>
                </div>
            }

        </>
    )
}