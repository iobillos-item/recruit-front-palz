"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Lazy load Lottie animation
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Preload the Lottie animation
    const preloadAnimation = async () => {
      const data = await import("@/public/lottie/recruitpalz-hero.json");
      setAnimationData(data.default);
    };
    preloadAnimation();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-blue-500">
      {/* Background Image - Mobile/Tablet */}
      <div className="absolute inset-0 w-full h-full z-0 lg:hidden bg-blue-400">
        <Image
          src="/images/hero-bg.webp"
          alt="Cartoon farmer points over a grassy hill with mountains in the background under a blue sky"
          fill
          className="object-cover object-[center_5%] md:object-center"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Background Image - Desktop */}
      <div className="absolute inset-0 w-full h-full z-0 hidden lg:block bg-blue-400">
        <Image
          src="/images/hero-bg-lg.webp"
          alt="Cartoon boy pointing at a grassy hill under a blue sky with clouds"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 pt-12 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile/Tablet - Centered Layout */}
          <div className="lg:hidden text-center">
            <p className="text-white/90 text-sm mb-4 animate-fade-in">
              Introducing
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4 animate-fade-in [animation-delay:100ms]">
              The #1 Automated
              <br />
              Recruiting Tool
            </h1>
            <p className="text-white text-base md:text-lg mb-6 animate-fade-in [animation-delay:200ms]">
              AI-Powered Recruiting Platform Built by Recruiting Professionals
            </p>
            <div className="animate-fade-in [animation-delay:300ms]">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-6 py-3 text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  Try 14 days FREE Trial
                </Button>
              </Link>
            </div>

            {/* Lottie - Centered */}
            <div className="relative flex justify-center mt-48 md:mt-32 animate-fade-in [animation-delay:400ms]">
              <div className="w-full max-w-md h-[350px] md:h-[450px]">
                {animationData && (
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className="w-full h-full"
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid meet",
                      progressiveLoad: true,
                      hideOnTransparent: true,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Desktop - Two Column Layout */}
          <div className="hidden lg:block">
            {/* Top Section - Two Column Header */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Left Column - Introducing + Heading */}
              <div className="animate-fade-in">
                <p className="text-white/90 text-sm md:text-base mb-4">
                  Introducing
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  The #1 Automated
                  <br />
                  Recruiting Tool
                </h1>
              </div>

              {/* Right Column - Description + CTA */}
              <div className="flex flex-col justify-end animate-fade-in [animation-delay:100ms]">
                <p className="text-white text-base md:text-lg mb-6">
                  AI-Powered Recruiting Platform Built by
                  <br />
                  Recruiting Professionals
                </p>
                <div>
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-6 py-3 text-sm shadow-lg hover:shadow-xl transition-all"
                    >
                      Try 14 days FREE Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Section - Lottie Animation */}
            <div className="relative flex justify-end mt-16 animate-fade-in [animation-delay:200ms]">
              <div className="w-full max-w-4xl h-[500px]">
                {animationData && (
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className="w-full h-full"
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid meet",
                      progressiveLoad: true,
                      hideOnTransparent: true,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
