"use client"

import { ChangeEvent, FormEvent, useEffect, useState, useRef } from "react"
import CryptoJS from "crypto-js"
import ErrorCard from "@/components/elements/errorcard"
import { useRouter } from "next/navigation"
import { fetchData } from "../../api/fetch-token/fetchdata"
import SuccessCard from "@/components/elements/successcard"

export default function LoginElement() {
    const router = useRouter()
    const ShowHidePass = useRef<any>(null)
    const ShowHideText = useRef<any>(null)
    const [email, setEmail] = useState<string | any>()
    const [password, setPassword] = useState<string>()
    const [access, setAccess] = useState<boolean>(false)
    const [errormsg, setErrormsg] = useState<string | any>()
    const [errorstats, setErrorstats] = useState<boolean>(false)
    const [userToken, setUserToken] = useState<string>()
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const PasswordKey = process.env.NEXT_PUBLIC_PASSWORD_KEY
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY

    useEffect(() => {

        fetchData()
            .then(data => {
                setUserToken(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, []);

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

    const HandleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('email', email)
        const res = await fetch('/api/login', {
            method: 'POST',
            body: formdata
        })

        const data = await res.json()
        const userData = await data[0]
        if (data) {
            if (PasswordKey && SecretKey) {
                const decryptUserPassword = CryptoJS.AES.decrypt(userData.password, PasswordKey).toString(CryptoJS.enc.Utf8);

                if (userData.email === email && decryptUserPassword === password) {
                    const encryptedUserId = CryptoJS.AES.encrypt(userData.token, SecretKey).toString();
                    localStorage.setItem('token', encryptedUserId);
                    window.location.reload()

                } else {
                    setErrormsg('Email or Password is Wrong');
                    setErrorstats(true);
                }
            }
        } else {
            setErrormsg('Email not found');
            setErrorstats(true);
        }

    }

    useEffect(() => {
        const navigate = () => {
            setShowSuccess(true)
            setTimeout(() => {
                router.push('/')
            }, 4000);
        }
        if (access) {
            navigate()
        }

    }, [access, router])

    const HandlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        if (checked) {
            ShowHidePass.current.type = 'text'
            ShowHideText.current.innerHTML = "Hide"
        } else {
            ShowHidePass.current.type = 'password'
            ShowHideText.current.innerHTML = "Show"

        }
    }
    return (
        <>
            {
                showSuccess && <SuccessCard message="Login Successful" />
            }
            {errorstats &&
                <ErrorCard message={errormsg} />
            }
            <section className="px-4 flex flex-col items-center h-full">
                <h1 className="font-bold mb-5 text-xl text-center mt-20">Welcome Back</h1>
                <form onSubmit={HandleLogin} className="bg-[#151527] p-5 rounded-[5px]">
                    <label htmlFor="Email" className='text-[12px] font-bold'>Email:</label>
                    <input type="email" id='Email' className='w-full h-[35px] border-2 border-white rounded-[8px] mt-1 mb-2 bg-transparent text-[11px] px-2' onChange={({ target }) => setEmail(target.value)} />
                    <label htmlFor="Password" className='text-[12px] font-bold'>Password:</label>
                    <input type="password" id='Password' className='w-full h-[35px] border-2 border-white rounded-[8px] mt-1 bg-transparent text-[11px] px-2' onChange={({ target }) => setPassword(target.value)} ref={ShowHidePass} />
                    <div className="w-full">
                        <input type="checkbox" name="showhidepassword" id="showhidepassword" onChange={HandlePassword} /> <label htmlFor="showhidepassword"><span ref={ShowHideText}>Show</span> Password</label>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="px-5 py-2 rounded-[5px] bg-[#0D0D18] font-bold">Login</button>
                    </div>

                </form>
            </section>

        </>
    )
}