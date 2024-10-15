'use client'

import { useRef, useEffect } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { lineWobble } from 'ldrs'

export default function DetailsSkill({ closeModal, Data }: any) {
  const outside = useRef(null)

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target === outside.current) {
        closeModal(false)

      }
    })
    if (typeof window !== 'undefined') {
      lineWobble.register();
    }

    // Cleanup listener saat komponen di-unmount
    return () => {
      document.removeEventListener('click', () => { });
    };

  }, [closeModal])

  return (
    <div className="w-full h-full fixed flex items-center justify-center flex-col z-[1003] bg-[#0D0D18]/40 top-0 left-0" ref={outside}>

      <div className="px-5 py-10 flex items-center justify-center flex-wrap gap-5 rounded-[5px] bg-[#151527] md:w-3/5 w-full animate__animated animate__bounceIn">
        {
          Data.map((item: any) => (
            <div key={uuidv4()} className="flex items-center justify-center gap-2 bg-[#1e1e4d] py-3 px-4 rounded-lg">
              <Image src={item.icon} className="md:w-[25px] md:h-[25px] object-contain" alt="image" width={25} height={25} quality={100} sizes="100vw" />
              <h3 className="text-white text-xs md:text-base">{item.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}
