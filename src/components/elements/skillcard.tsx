"use client";
import javascript from '@/assets/image/javascript-svgrepo-com.svg'
import Image from 'next/image';
import { cn } from "@/utils/cn";
import React, { useEffect, useState, useCallback } from "react";

export const Skillcard = ({
    items,
    direction = "left",
    pauseOnHover = false,
}: {
    items: {
        name: string;
        icon: string;
    }[];
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const getDirection = useCallback(() => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    }, [containerRef, direction]);
    useEffect(() => {
        function addAnimation() {
            if (containerRef.current && scrollerRef.current) {
                containerRef.current.style.setProperty("--animation-duration", "40s");
                // const scrollerContent = Array.from(scrollerRef.current.children);

                // Duplicate Item

                // scrollerContent.forEach((item) => {
                //     const duplicatedItem = item.cloneNode(true);
                //     if (scrollerRef.current) {
                //         scrollerRef.current.appendChild(duplicatedItem);
                //     }
                // });

                getDirection();
                // getSpeed();
                setStart(true);
            }
        }
        addAnimation();
    }, [getDirection]);
    const [start, setStart] = useState(false);


    // const getSpeed = () => {
    //     if (containerRef.current) {
    //         if (speed === "fast") {
    //             containerRef.current.style.setProperty("--animation-duration", "20s");
    //         } else if (speed === "normal") {
    //             containerRef.current.style.setProperty("--animation-duration", "40s");
    //         } else {
    //             containerRef.current.style.setProperty("--animation-duration", "80s");
    //         }
    //     }
    // };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li

                        key={`${item.icon}${Math.random()}`}
                    >
                        <blockquote>
                            <div className='bg-[#151527] w-max p-2 rounded-[5px] flex items-center'>
                                <Image
                                    key={item.icon}
                                    src={item.icon || javascript}
                                    className="md:w-7 md:h-7 w-[15px] h-[15px]"
                                    width={28}
                                    height={28}
                                    alt="Picture of the author"
                                    priority={true}
                                />
                                <h3 className='text-[10px] md:text-sm ml-2'>{item.name}</h3>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
