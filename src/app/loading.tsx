'use client'

import { useEffect } from 'react'

export default function Loading() {
    useEffect(() => {
        async function getLoader() {
            const { ping } = await import('ldrs')
            ping.register()
        }
        getLoader()
    }, [])
    return (
        <div className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-[#0D0D18]/50 z-[1000]">
            <div className='flex flex-col items-center'>
                <l-ping
                    size="45"
                    speed="2"
                    color="white"
                ></l-ping>
                <div className="loader mt-3"></div>
            </div>
        </div>
    );
}