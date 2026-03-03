"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RecruitHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <nav className="px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative w-32 h-8">
            <Image
              src="/svg/recruit-palz-logo.svg"
              alt="RecruitPalz"
              fill
              className="object-contain"
            />
          </Link>

          <div className="flex items-center gap-3">
            <a href="#pricing-section">
              <Button variant="ghost" size="sm" className="rounded-full">
                Pricing
              </Button>
            </a>
            <Link href="/login">
              <Button variant="outline" size="sm" className="rounded-full">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" size="sm" className="rounded-full">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default RecruitHeader;
