import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { FaList } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { usePathname } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import clsx from "clsx";
import { fetchData } from "@/app/api/fetch-token/fetchdata";
import CryptoJS from "crypto-js";
import { IoMdSettings } from "react-icons/io";


export default function MobileVavbar() {
    const router = useRouter()
    const [userToken, setUserToken] = useState<string>()
    const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY
    const [access, setAccess] = useState<boolean>(false)
    const pathname = usePathname()
    const [ShowLoading, SetShowLoading] = useState(false)

    function handleClick(e: string): void {
        SetShowLoading(true)
        setTimeout(() => {
            router.push(e)

        }, 500);
        if (pathname === e) {
            SetShowLoading(false)
        }
    }


    const HandleLogout = async () => {
        localStorage.clear()
        window.location.reload()
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
                ShowLoading && <Loading />
            }
            <div className="bg-[#151527] w-[150px] h-max right-7 rounded-[5px] absolute z-[999] text-[14px] p-3">
                <button onClick={() => handleClick('/')} className={clsx('flex mt-3', {
                    'animate-mobilenav text-[#7e7eff]': pathname === '/'
                })}><FaEthereum className="w-[20px] h-[20px] mr-3" />Home</button>
                <button onClick={() => handleClick('/about')} className={clsx('flex mt-2', {
                    'animate-mobilenav text-[#7e7eff]': pathname === '/about'
                })}><RxPerson className="w-[20px] h-[20px] mr-3" />About</button>
                <button onClick={() => handleClick('/projects')} className={clsx('flex mt-2', {
                    'animate-mobilenav text-[#7e7eff]': pathname === '/projects'
                })}><FaList className="w-[20px] h-[20px] mr-3" />Projects</button>
                <a href="mailto:maulanarizq@gmail.com" className='flex mt-2'><IoMailOutline className="w-[20px] h-[20px] mr-3" />Contact</a>
                {
                    access && (
                        <div>
                            <button onClick={() => handleClick('/profile/edit')} className={clsx('flex mt-2', {
                                'animate-mobilenav text-[#7e7eff]': pathname === '/profile/edit'
                            })}><IoMdSettings className="w-[20px] h-[20px] mr-3" />Settings</button>
                            <button onClick={() => HandleLogout()} className="flex items-center justify-center mt-2 mr-5 text-red-500"><IoMdLogOut className="mr-3 w-[20px] h-[20px]" /> Logout</button>
                        </div>
                    )
                }

            </div>
        </>
    )
}