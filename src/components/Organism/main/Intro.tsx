"use client";
import RotatingText from "@/components/elements/rotatetext";
import clsx from "clsx";
import { useState, useEffect } from "react";

const Intro = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup jika komponen unmount sebelum timeout selesai
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={clsx(
        "h-full fixed flex items-center justify-center z-50 top-0 bg-[#0D0D18] w-full gap-2",
        {
          hidden: !loading,
        }
      )}
    >
      <RotatingText
        texts={["Hello", "Welcome to"]}
        mainClassName="text-white border-b-2 border-white"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={1000}
      />
      <RotatingText
        texts={["Everyone", "My Portfolio"]}
        mainClassName="text-white bg-[#7e7eff] px-2 rounded-md"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
};

export default Intro;
