"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hook/use-outside-click";
import { experince } from "@/data/experience";

export const Experience = () => {
  const [active, setActive] = useState<
    (typeof experince)[number] | boolean | null
  >(null);
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
                  quality={100}
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
                      className="font-medium text-neutral-200 text-base"
                    >
                      {active.Company}
                    </motion.h3>
                    <motion.p
                      layoutId={`date-${active.Location}-${id}`}
                      className="text-neutral-400 md:text-base text-sm"
                    >
                      {active.Location}
                    </motion.p>
                    <motion.p
                      layoutId={`Date-${Date}-${id}`}
                      className="text-neutral-400 md:text-sm text-xs"
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
                    className="text-sm md:text-sm lg:text-base h-96 md:h-fit md:max-h-52 pb-10 overflow-y-auto flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] "
                  >
                    {active.Content.split("\n").map(
                      (item: string, index: number) => (
                        <p key={index} className="md:text-sm text-[12px] mt-3">
                          {item}
                        </p>
                      )
                    )}
                    {/* <div dangerouslySetInnerHTML={{ __html: active.Content }} /> */}
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
            <div className="md:h-[120px] md:w-[480px] w-full h-[90px] bg-[#151527] rounded-[5px] mt-5 flex md:flex-row flex-col md:items-center items-start justify-center md:justify-between px-10 pl-5">
              <motion.div
                layoutId={`image-${card.Company}-${id}`}
                className="flex items-center gap-5 md:gap-10"
              >
                <Image
                  src={card.Image}
                  alt={card.Company}
                  className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] object-cover"
                  width={70}
                  height={70}
                  sizes="100vw"
                />
                <div className="grid gap-1">
                  <div>
                    <h2 className="font-bold text-base md:text-lg">
                      {card.Company}
                    </h2>
                    <div className="text-[#999999] text-xs md:text-sm">
                      <p>• {card.Location}</p>
                      <p>{card.Date}</p>
                    </div>
                  </div>
                  <p className="underline md:hidden block text-xs md:text-base">
                    Details
                  </p>
                </div>
              </motion.div>
              <p className="underline hidden md:block text-xs md:text-base">
                Details
              </p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

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
