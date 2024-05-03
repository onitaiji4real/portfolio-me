import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function MaxWidthWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen bg-black overflow-hidden", className)}>
      {children}
    </div>
  );
}
