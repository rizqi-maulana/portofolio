"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
}

interface TooltipProps {
  items: Tech[];
}

const Tooltip: React.FC<TooltipProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-2 justify-start">
      {items.map((item, index) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ marginBottom: "8px" }} // Tambahkan jarak antar icon
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, translateX: 20 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 bg-gray-800 text-white p-2 rounded-t-lg shadow-lg z-10"
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="font-semibold text-sm">{item.name}</span>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            src={item.icon}
            alt={item.name}
            width={24} // Ukuran ikon diperkecil untuk layar kecil
            height={24}
            className="rounded-lg transition duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
