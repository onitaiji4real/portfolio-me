import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function GridAndDotBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative",
        className
      )}
    >
      {children}
    </div>
  );
}
