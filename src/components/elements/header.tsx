"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileVavbar from "./mobilenavbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
export default function Header() {
  const [ShowMobileNav, SetShowMobileNav] = useState(false);
  const pathname = usePathname();

  const MobileNavHandler = (): void => {
    SetShowMobileNav(!ShowMobileNav);
  };
  return (
    <>
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
              Hire Me
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
