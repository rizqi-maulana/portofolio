"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hook/use-outside-click";
import { experince } from "@/data/experience";

export const Experience = () => {
  const [active, setActive] = useState<(typeof experince)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.Company}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.Company}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#0D0D18] sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.Company}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.Image}
                  alt={active.Company}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-top"
                  sizes="100vw"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.Company}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.Company}
                    </motion.h3>
                    <motion.p
                      layoutId={`date-${Location}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 md:text-base text-sm"
                    >
                      {active.Location}
                    </motion.p>
                    <motion.p
                      layoutId={`Date-${Date}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 md:text-sm text-xs"
                    >
                      {active.Date}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.Link}
                    target="_blank"
                    className="px-10 py-2 text-sm rounded-full font-bold bg-white text-black"
                  >
                    Visit
                  </motion.a>
                </div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <div className="max-h-52 overflow-y-auto p-4" dangerouslySetInnerHTML={{ __html: active.Content }} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl w-full grid grid-cols-1 items-start gap-4">
        {experince.map((card, index) => (
          <motion.div
            layoutId={`card-${card.Company}-${id}`}
            key={card.Company}
            onClick={() => setActive(card)}
            className="cursor-pointer"
          >
            <div className="md:h-[120px] md:w-[480px] w-[235px] h-[90px] bg-[#151527] rounded-[5px] mt-5 flex items-center justify-evenly">
              <motion.div layoutId={`image-${card.Company}-${id}`}>
                <Image
                  src={card.Image}
                  alt={card.Company}
                  className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-cover'
                  width={70}
                  height={70}
                  sizes="100vw"
                />
              </motion.div>
              <div>
                <h2 className='font-bold text-[15px] md:text-xl'>{card.Company}</h2>
                <div className='text-[#999999] text-[10px] md:text-sm'>
                  <p>• {card.Location}</p>
                  <p>{card.Date}</p>
                </div>
                <p className="underline md:hidden text-[10px] mt-1">Details</p>
              </div>
              <p className="underline hidden md:block">Details</p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// import Image from "next/image";

// interface ExperienceType {
//   Company: string,
//   Location: string,
//   Date: string,
//   ExpeImage: any
// }

// export const Experience = ({ Company, Location, Date, ExpeImage }: ExperienceType) => {
//   return (
//     <div className="md:h-[120px] md:w-[400px] w-[235px] h-[90px] bg-[#151527] rounded-[5px] mt-5 flex items-center justify-evenly">
//       <Image
//         src={ExpeImage}
//         className='w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-cover'
//         width={70}
//         height={70}
//         alt="Experience image"
//         sizes="100vw"
//       />
//       <div>
//         <h2 className='font-bold text-[15px] md:text-xl'>{Company}</h2>
//         <div className='text-[#999999] text-[10px] md:text-sm'>
//           <p>• {Location}</p>
//           <p>{Date}</p>
//         </div>

//       </div>
//     </div>
//   )
// }