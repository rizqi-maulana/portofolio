import clsx from "clsx";
import { useEffect, useState } from "react";

export default function SuccessCard({ message }: { message: string }) {
    const [Close, SetClose] = useState(false)
    useEffect(() => {
        const TimeOut = async () => {
            setTimeout(() => {
                SetClose(true)
            }, 3000);
        }
        TimeOut()
    })
    return (
        <div className={clsx('absolute top-5 left-0 right-0 flex justify-center items-center animate__animated animate__slideInDown', {
            'animate__slideOutUp top-[-10px]': Close === true,
        })}>
            <h1 className="text-1xl font-bold p-2 rounded-[5px] bg-green-300">{message}</h1>
        </div>
    )
}