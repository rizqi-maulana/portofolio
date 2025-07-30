"use client";

import { createContext } from "react";
import { cn } from "@/utils/cn";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={[]}>
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
