import { cn } from "@/utils/cn";
import { CSSProperties, FC, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
  onClick(): void
}

const AnimatedShinyButton: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "max-w-md text-neutral-600/50 dark:text-neutral-400/50 ",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        className,
      )}
    >
      {children}
    </button>
  );
};

export default AnimatedShinyButton;
