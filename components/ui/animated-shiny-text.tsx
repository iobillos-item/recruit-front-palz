import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      className={cn(
        "relative inline-block text-black",
        className
      )}
      {...props}
    >
      {children}
      <span
        style={
          {
            "--shiny-width": `${shimmerWidth}px`,
            animation: "shiny-text 8s infinite",
            backgroundSize: `${shimmerWidth}px 100%`,
          } as CSSProperties
        }
        className="absolute inset-0 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none select-none"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}
