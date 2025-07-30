import { IoMdLogOut } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

export default function AccountMenu() {
  const HandleLogout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="h-max w-[200px] absolute right-5 top-16 bg-[#45456e] p-3 rounded-[5px]">
        <Link
          href={"/profile/edit"}
          className="flex items-center justify-center mr-5 mb-2 w-max"
        >
          <IoMdSettings className="mr-3 w-[20px] h-[20px]" /> Settings
        </Link>

        <button
          onClick={() => HandleLogout()}
          className="flex items-center justify-center mr-5 text-red-500"
        >
          <IoMdLogOut className="mr-3 w-[20px] h-[20px]" /> Logout
        </button>
      </div>
    </>
  );
}
