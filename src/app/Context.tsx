"use client";

import { createContext, useEffect, useState } from "react";
import { fetchData } from "./api/fetch-token/fetchdata";
import CryptoJS from "crypto-js";
import { cn } from "@/utils/cn";
const SecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

const fetchAndCheckToken = async (setAccess: (access: boolean) => void) => {
  try {
    const data = await fetchData();
    const userToken = data;

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token && SecretKey) {
        const accessToken = CryptoJS.AES.decrypt(token, SecretKey).toString(
          CryptoJS.enc.Utf8
        );
        console.log("Access Token:", accessToken);
        if (userToken === accessToken) {
          setAccess(true);
        } else {
          setAccess(false);
        }
      } else {
        setAccess(false);
      }
    }
  } catch (error) {
    console.error("Error:", error);
    setAccess(false);
  }
};

const GetUserDetails = async (SetPhoto: (setPhoto: string) => void) => {
  try {
    const response = await fetch("/api/user-details", {
      method: "GET",
    });
    const data = await response.json();
    // console.log('User Details:', data);
    // return data[0]?.photo || '';
    SetPhoto(data[0]?.photo || "");
  } catch (error) {
    console.error("Error fetching user details:", error);
    return "";
  }
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [access, setAccess] = useState<boolean | undefined>(undefined);
  const [Photo, SetPhoto] = useState<string>("");

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchAndCheckToken(setAccess);
      await GetUserDetails(SetPhoto);
    };

    fetchDataAsync();
  }, []);

  return (
    <UserContext.Provider value={{ Access: access, Photo: Photo }}>
      <div
        className={cn(
          "fixed inset-0 -z-50",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Optional masking effect */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black -z-40" />

      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext<any | undefined>(undefined);
export default UserProvider;
