import { FaEthereum } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { FaList } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BiCertification } from "react-icons/bi";
import Link from "next/link";

export default function MobileVavbar() {
  const pathname = usePathname();

  return (
    <>
      {}
      <div className="bg-[#151527] w-[150px] h-max right-7 rounded-[5px] absolute z-[999] text-[14px] p-3">
        <Link
          href="/"
          className={clsx("flex mt-3", {
            "animate-mobilenav text-[#7e7eff]": pathname === "/",
          })}
        >
          <FaEthereum className="w-[20px] h-[20px] mr-3" />
          Home
        </Link>
        <Link
          href="/about"
          className={clsx("flex mt-2", {
            "animate-mobilenav text-[#7e7eff]": pathname === "/about",
          })}
        >
          <RxPerson className="w-[20px] h-[20px] mr-3" />
          About
        </Link>
        <Link
          href="/projects"
          className={clsx("flex mt-2", {
            "animate-mobilenav text-[#7e7eff]": pathname === "/projects",
          })}
        >
          <FaList className="w-[20px] h-[20px] mr-3" />
          Projects
        </Link>
        <Link
          href="/certificate"
          className={clsx("flex mt-2", {
            "animate-mobilenav text-[#7e7eff]": pathname === "/certificate",
          })}
        >
          <BiCertification className="w-[20px] h-[20px] mr-3" />
          Certificate
        </Link>
        <Link href="mailto:maulanarizq@gmail.com" className="flex mt-2">
          <IoMailOutline className="w-[20px] h-[20px] mr-3" />
          Hire Me
        </Link>
      </div>
    </>
  );
}
