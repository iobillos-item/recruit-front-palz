"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactUsDialogProps {
  trigger?: React.ReactNode;
}

export function ContactUsDialog({ trigger }: ContactUsDialogProps) {
  return (
    <Dialog>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
          <DialogDescription>
            Interested in our Enterprise plan? Get in touch with our team.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            Email us at:{" "}
            <a
              href="mailto:contact@recruitpalz.com"
              className="font-medium text-primary hover:underline"
            >
              contact@recruitpalz.com
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            Or call us at:{" "}
            <a
              href="tel:+1234567890"
              className="font-medium text-primary hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
