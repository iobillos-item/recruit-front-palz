"use client";

import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ShinyButtonProps extends ButtonProps {
  shimmer?: boolean;
}

const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, shimmer = true, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {shimmer && (
          <span
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s cubic-bezier(0.4, 0, 0.2, 1) 1",
            }}
          />
        )}
      </Button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

export { ShinyButton };
