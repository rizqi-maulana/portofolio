"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileVavbar from "./mobilenavbar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import Loading from "@/app/loading";
// import { fetchData } from "@/app/api/fetch-token/fetchdata";
// import CryptoJS from "crypto-js";
import AccountMenu from "./accountmenu";
import Image from "next/image";
import ProfileImg from "@/assets/image/profile.jpeg";
import { useContext } from "react";
import { UserContext } from "@/app/Context";
import Link from "next/link";
export default function Header() {
  const [ShowMobileNav, SetShowMobileNav] = useState(false);
  // const [userToken, setUserToken] = useState<string>()
  // const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY
  // const [access, setAccess] = useState<boolean>(false)
  //   const router = useRouter();
  const pathname = usePathname();
  const [ShowLoading, SetShowLoading] = useState(false);
  // const [Photo, SetPhoto] = useState<string>('');
  const [ShowAccMenu, SetShowAccMenu] = useState<boolean>(false);
  const user = useContext(UserContext);

  const MobileNavHandler = (): void => {
    SetShowMobileNav(!ShowMobileNav);
  };

  // function handleClick(e: string): void {
  //     // SetShowLoading(true)
  //     setTimeout(() => {
  //         router.push(e)
  //     }, 500);
  //     // if (pathname === e) {
  //     //     SetShowLoading(false)
  //     // }
  // }

  // useEffect(() => {
  //     fetchData()
  //         .then(data => {
  //             setUserToken(data);
  //         })
  //         .catch(error => {
  //             console.error('Error:', error);
  //         });
  //     const GetUserDetails = async () => {
  //         const response = await fetch('/api/user-details', {
  //             method: "GET",
  //         })
  //         const data = await response.json()
  //         if (data) {

  //             SetPhoto(data[0].photo);

  //         }
  //     }
  //     GetUserDetails()
  // }, [])

  // useEffect(() => {
  //     const token = localStorage.getItem('token')

  //     if (token) {
  //         if (SecretKey) {
  //             const accessToken = CryptoJS.AES.decrypt(token, SecretKey).toString(CryptoJS.enc.Utf8)
  //             if (userToken === accessToken) {
  //                 setAccess(true)
  //             }
  //         }
  //     }
  // }, [userToken, SecretKey])

  return (
    <>
      {/* {
                ShowLoading && <Loading />
            } */}
      <header className="w-full flex md:px-7 md:mt-5 px-5 py-2 bg-red justify-between ">
        <h1 className="font-bold md:text-2xl sm:text-xl">Maulana</h1>
        <nav>
          <IoMenu className="text-2xl md:hidden" onClick={MobileNavHandler} />
          {ShowMobileNav && <MobileVavbar />}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href={"/"}
              className={clsx("hover:text-[#a9a9f6]", {
                "animate-desktopnav text-[#7e7eff] underline": pathname === "/",
              })}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className={clsx("hover:text-[#a9a9f6]", {
                "animate-desktopnav text-[#7e7eff] underline":
                  pathname === "/about",
              })}
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className={clsx("hover:text-[#a9a9f6]", {
                "animate-desktopnav text-[#7e7eff] underline":
                  pathname === "/projects",
              })}
            >
              Projects
            </Link>
            <Link
              href={"/certificate"}
              className={clsx("hover:text-[#a9a9f6]", {
                "animate-desktopnav text-[#7e7eff] underline":
                  pathname === "/certificate",
              })}
            >
              Certificate
            </Link>
            <Link
              href="mailto:maulanarizq@gmail.com"
              className="hover:text-[#a9a9f6]"
            >
              Contact
            </Link>
            {user.Access && (
              <button
                onClick={() => SetShowAccMenu(!ShowAccMenu)}
                className="w-[30px] h-[30px] rounded-full cursor-pointer"
              >
                <Image
                  src={user.Photo || ProfileImg}
                  quality={100}
                  alt="profile"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                ></Image>
              </button>
            )}
            {ShowAccMenu && <AccountMenu />}
          </div>
        </nav>
      </header>
    </>
  );
}
