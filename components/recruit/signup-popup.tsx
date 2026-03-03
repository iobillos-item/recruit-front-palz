"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function SignupPopup() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't show popup on mobile
    if (isMobile) return;

    const section = document.getElementById("automated-background-checks");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="!max-w-[750px] w-[90vw] p-0 gap-0 bg-transparent border-none shadow-none" showCloseButton={false}>
        <div className="relative bg-background rounded-2xl overflow-hidden border-[3px] border-black">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-50 rounded-full p-1.5 border-2 border-transparent hover:border-black transition-colors focus:outline-none"
            aria-label="Close"
            tabIndex={-1}
          >
            <X className="h-4 w-4 text-white" />
          </button>

          <div className="relative flex">
            {/* Left side - Video */}
            <div className="w-[280px] min-h-[450px] flex-shrink-0 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5C542' }}>
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
              >
                <source src="/videos/popup-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right side - Blue background */}
            <div className="flex-1" style={{ backgroundColor: '#3D8EFA' }}></div>

            {/* Content - overlaps video */}
            <div className="absolute inset-y-0 left-[180px] right-0 z-10 px-10 py-14 flex flex-col justify-center">
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="text-[42px] font-bold text-white leading-tight">
                  Founder&apos;s Plan - $99
                </DialogTitle>
                <DialogDescription className="text-sm text-white/90 leading-relaxed">
                  Get unlimited resume screenings and priority support with our exclusive Founder&apos;s Plan. Limited time offer for early adopters!
                </DialogDescription>
              </DialogHeader>

              <ul className="mt-4 space-y-1.5 list-disc list-inside">
                <li className="text-sm text-white">
                  Unlimited Free Screenings
                </li>
                <li className="text-sm text-white">
                  5000 monthly credits + 1000 free credits
                </li>
                <li className="text-sm text-white">
                  Priority support and early access to new features
                </li>
              </ul>

              <Button
                className="mt-8 w-fit px-6 font-semibold rounded-md hover:opacity-90"
                size="default"
                style={{ backgroundColor: '#E5A835', color: '#1a1a1a' }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
