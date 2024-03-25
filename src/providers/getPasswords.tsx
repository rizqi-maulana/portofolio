"use client"

import React, { useEffect } from 'react'
import CryptoJS from "crypto-js";

interface getPasswordProps {
    children: React.ReactNode
}


export const GetPassword = ({ children }: getPasswordProps) => {
    const PasswordKey = process.env.NEXT_PUBLIC_PASSWORD_KEY as string
    useEffect(() => {

        const HandleKeyDown = async (event: KeyboardEvent) => {
            if (event.key === 'b' && event.ctrlKey) {
                const Password = prompt('masukan password yang di Encrypt:');
                const Code = prompt('masukan code:')
                if (Password && Code) {
                    alert(CryptoJS.AES.decrypt(Password, PasswordKey).toString(CryptoJS.enc.Utf8))
                }
            }
        }
        document.addEventListener('keydown', HandleKeyDown)

        return () => document.removeEventListener('keydown', HandleKeyDown)
    }, [PasswordKey])
    return (
        <>
            {children}
        </>
    )
}