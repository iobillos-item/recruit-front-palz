"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
));
Accordion.displayName = "Accordion";

interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onToggle'> {
  value: string;
  open?: boolean;
  onToggle?: (value: string) => void;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, open, onToggle, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border border-border rounded-lg", className)}
      {...props}
    />
  )
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, open, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between p-6 text-left font-medium transition-all hover:bg-muted/50",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown
      className={cn(
        "h-5 w-5 shrink-0 transition-transform duration-200",
        open && "rotate-180"
      )}
    />
  </button>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { open?: boolean }
>(({ className, children, open, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden transition-all duration-200",
      open ? "max-h-96" : "max-h-0"
    )}
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>
  </div>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
