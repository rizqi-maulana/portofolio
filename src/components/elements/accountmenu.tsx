import { IoMdLogOut } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

export default function AccountMenu() {
    const router = useRouter()
    const pathname = usePathname()
    const [ShowLoading, SetShowLoading] = useState(false)
    const HandleLogout = async () => {
        localStorage.clear()
        window.location.reload()
    }

    function handleClick(e: string): void {
        SetShowLoading(true)
        setTimeout(() => {
            router.push(e)

        }, 500);
        if (pathname === e) {
            SetShowLoading(false)
        }
    }

    return (
        <>
            {
                ShowLoading && <Loading />
            }
            <div className="h-max w-[200px] absolute right-5 top-16 bg-[#45456e] p-3 rounded-[5px]">
                <button onClick={() => handleClick('/profile/edit')} className="flex items-center justify-center mr-5 mb-2"><IoMdSettings className="mr-3 w-[20px] h-[20px]" /> Settings</button>

                <button onClick={() => HandleLogout()} className="flex items-center justify-center mr-5 text-red-500"><IoMdLogOut className="mr-3 w-[20px] h-[20px]" /> Logout</button>

            </div>
        </>
    )
}