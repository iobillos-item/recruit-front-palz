"use client";

import {
  Crosshair,
  ListChecks,
  Scale,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { recruitContent } from "@/lib/recruit-content";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const usePreferredTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setTheme(media.matches ? "dark" : "light");
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  return theme;
};

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.3, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView] as const;
};

export default function FeatureSection() {
  const currentTheme = usePreferredTheme();
  const [backgroundCheckAnimation, setBackgroundCheckAnimation] = useState<any>(null);
  const [finalInterviewAnimation, setFinalInterviewAnimation] = useState<any>(null);
  const [videoRef, videoInView] = useInView();

  useEffect(() => {
    // Lazy load animations
    import("@/public/lottie/recruitpalz-background-check.json").then((data) => {
      setBackgroundCheckAnimation(data.default);
    });
    import("@/public/lottie/recruitpalz-final-interview.json").then((data) => {
      setFinalInterviewAnimation(data.default);
    });
  }, []);

  return (
    <>
      <section className="bg-card py-20 relative">
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(var(--card)))",
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Automated Job Creation &<br />Management Platform
            </h2>
            <p className="text-lg text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
              {recruitContent.automatedJobCreation.description}
            </p>
          </div>

          <div ref={videoRef} className="w-full h-[400px] md:h-[700px] relative rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/market-slow-convert-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={`absolute inset-0 p-8 md:p-20 flex items-center justify-center ${videoInView ? 'animate-slide-in-view' : ''}`}>
              <div className="relative w-full h-full max-w-5xl">
                <Image
                  src="/svg/automated-job-creation-screenshot.svg"
                  alt="Automated Job Creation"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-[896px] h-[300px] md:h-[599px] relative rounded-lg overflow-hidden order-2 md:order-1 bg-gray-200">
              <Image
                src="/images/smart-candidate-screening-bg.webp"
                alt="Bright office scene with reception desk, meeting room, and city skyline view"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="/svg/smart-candidate-screening-screenshot.svg"
                    alt="Smart Candidate Screening"
                    fill
                    className="object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[640px] h-auto md:h-[599px] bg-card flex flex-col justify-center px-8 md:px-28 py-8 order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 max-w-xl">
                {recruitContent.smartCandidateScreening.name}
              </h3>
              <p className="text-lg text-foreground font-medium leading-relaxed max-w-xl">
                {recruitContent.smartCandidateScreening.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-[640px] h-auto md:h-[599px] bg-card flex flex-col justify-center px-8 md:px-28 py-8">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 max-w-xl">
                {recruitContent.automatedJobPosting.name}
              </h3>
              <p className="text-lg text-foreground font-medium leading-relaxed max-w-xl">
                {recruitContent.automatedJobPosting.description}
              </p>
            </div>
            <div className="w-full md:w-[896px] h-[300px] md:h-[599px] relative rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/images/recruitpalz-job-posting-bg.webp"
                alt="Night cityscape view from a desk with laptop, lamp, and books"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/svg/recruitpalz-job-posting-screenshot.svg"
                    alt="Automated Job Posting"
                    fill
                    className="object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-5 pb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">
              {recruitContent.featureSection.items_two.name}
            </h2>
            <p className="text-lg font-medium text-center max-w-3xl mx-auto leading-relaxed text-foreground">
              {recruitContent.featureSection.items_two.description}
            </p>
          </div>
          <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden bg-gray-200">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="/videos/automated-interviews-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-[640px] h-auto md:h-[599px] bg-card flex flex-col justify-center px-8 md:px-28 py-8">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 max-w-xl">
                {recruitContent.automatedExamsCheatDetection.name}
              </h3>
              <p className="text-lg text-foreground font-medium leading-relaxed max-w-xl">
                {recruitContent.automatedExamsCheatDetection.description}
              </p>
            </div>
            <div className="w-full md:w-[896px] h-[300px] md:h-[599px] relative rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/images/recruitpalz-automated-exams-light-bg.webp"
                alt="Office scene with a large window overlooking a bright blue sky with clouds"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/svg/recruitpalz-automated-exams-light-screenshot.svg"
                    alt="Automated Exams & Cheat Detection"
                    fill
                    className="object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="automated-background-checks" className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-[896px] h-[300px] md:h-[599px] relative rounded-lg overflow-hidden order-2 md:order-1 bg-gray-200">
              <Image
                src="/images/verify-bg.webp"
                alt="Solid yellow gradient background"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div className="relative w-full h-full scale-150">
                  {backgroundCheckAnimation && (
                    <Lottie
                      animationData={backgroundCheckAnimation}
                      loop
                      autoplay
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-[640px] h-auto md:h-[599px] bg-card flex flex-col justify-center px-8 md:px-28 py-8 order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 max-w-xl">
                {recruitContent.automatedBackgroundChecks.name}
              </h3>
              <p className="text-lg text-foreground font-medium leading-relaxed max-w-xl">
                {recruitContent.automatedBackgroundChecks.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-[640px] h-auto md:h-[599px] bg-card flex flex-col justify-center px-8 md:px-28 py-8">
              <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 max-w-xl">
                {recruitContent.seamlessFinalInterviewScreening.name}
              </h3>
              <p className="text-lg text-foreground font-medium leading-relaxed max-w-xl">
                {recruitContent.seamlessFinalInterviewScreening.description}
              </p>
            </div>
            <div className="w-full md:w-[896px] h-[300px] md:h-[599px] relative rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/images/schedule-bg.webp"
                alt="Gradient blue sky background"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <div className="relative w-full h-full scale-125">
                  {finalInterviewAnimation && (
                    <Lottie
                      animationData={finalInterviewAnimation}
                      loop
                      autoplay
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
              {recruitContent.featureSection.title}
            </h2>
            <p className="text-lg text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
              {recruitContent.featureSection.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="border border-border p-8 flex flex-col items-start h-[400px] rounded-lg bg-card relative overflow-hidden">
              <Crosshair className="w-6 h-6 text-foreground mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">
                {recruitContent.featureSection.items[0].name}
              </h4>
              <p className="text-sm text-muted-foreground mb-auto">
                {recruitContent.featureSection.items[0].description}
              </p>
              <div className="absolute bottom-4 right-4 w-48 h-40">
                <Image
                  src="/svg/hat-svg.svg"
                  alt="Hat decoration"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
            <div className="border border-border p-8 flex flex-col items-start h-[400px] rounded-lg bg-card relative overflow-hidden">
              <Scale className="w-6 h-6 text-foreground mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">
                {recruitContent.featureSection.items[1].name}
              </h4>
              <p className="text-sm text-muted-foreground mb-auto">
                {recruitContent.featureSection.items[1].description}
              </p>
              <div className="absolute bottom-4 right-4 w-48 h-40">
                <Image
                  src="/svg/boots-svg.svg"
                  alt="Boots decoration"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
            <div className="border border-border p-8 flex flex-col items-start h-[400px] rounded-lg bg-card relative overflow-hidden">
              <ListChecks className="w-6 h-6 text-foreground mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-3">
                {recruitContent.featureSection.items[2].name}
              </h4>
              <p className="text-sm text-muted-foreground mb-auto">
                {recruitContent.featureSection.items[2].description}
              </p>
              <div className="absolute bottom-4 right-4 w-48 h-40">
                <Image
                  src="/svg/sunflower-svg.svg"
                  alt="Sunflower decoration"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-card py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            {recruitContent.howitWorks.name}
          </h2>
          <Tabs defaultValue="phase1" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="inline-flex h-auto items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <TabsTrigger
                  key={index}
                  className="text-sm md:text-base font-medium px-4 py-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                  value={`phase${index + 1}`}
                >
                  {recruitContent.howitWorks.items[index].name}
                </TabsTrigger>
              ))}
              </TabsList>
            </div>

            {[0, 1, 2, 3, 4, 5].map((index) => (
              <TabsContent key={index} value={`phase${index + 1}`}>
                <div className="grid items-start gap-12 lg:grid-cols-2">
                  <div className="col-span-1 flex flex-col gap-2 lg:max-w-lg lg:gap-4 animate-fade-in">
                    <p className="text-muted-foreground font-mono text-sm font-semibold tracking-tight">
                      Step {index + 1}
                    </p>
                    <h2 className="text-foreground text-3xl font-medium tracking-tighter md:text-5xl">
                      {recruitContent.howitWorks.items[index].name}
                    </h2>
                    <p className="text-muted-foreground text-lg font-normal tracking-tighter">
                      {recruitContent.howitWorks.items[index].description}
                    </p>
                  </div>
                  <div className="relative z-20 col-span-1 animate-fade-in [animation-delay:100ms]">
                    <Card className="h-[500px] border-border bg-background w-full rounded-lg border p-2 shadow-none">
                      <CardContent className="relative border-background bg-muted size-full rounded-lg border-2 overflow-hidden">
                        {index === 0 ? (
                          <>
                            <Image
                              src="/images/post-bg.webp"
                              alt="Sunny office interior with desks and sunlight streaming through windows"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                              <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <Image
                                  src="/svg/post-screenshot.svg"
                                  alt={recruitContent.howitWorks.items[index].name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </>
                        ) : index === 1 ? (
                          <>
                            <Image
                              src="/images/smart-candidate-screening-bg2.webp"
                              alt="Stylized landscape: Snowy mountains, green valley, and wooden houses under fluffy clouds"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                              <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <Image
                                  src="/svg/smart-candidate-screening-screenshot.svg"
                                  alt={recruitContent.howitWorks.items[index].name}
                                  fill
                                  className="object-contain rounded-lg"
                                />
                              </div>
                            </div>
                          </>
                        ) : index === 2 ? (
                          <>
                            <Image
                              src="/images/access-bg.webp"
                              alt="Anime-style street scene: a shaded sidewalk lined with trees and buildings"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                              <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <Image
                                  src="/svg/access-screenshot.svg"
                                  alt={recruitContent.howitWorks.items[index].name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </>
                        ) : index === 3 ? (
                          <>
                            <Image
                              src="/images/interview-bg.webp"
                              alt="Bright office space with large windows overlooking a blue sky"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                              <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <Image
                                  src="/svg/interview-screenshot.svg"
                                  alt={recruitContent.howitWorks.items[index].name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </>
                        ) : index === 4 ? (
                          <>
                            <Image
                              src="/images/schedule-bg.webp"
                              alt="Gradient blue sky background"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                              <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <Image
                                  src="/svg/schedule-screenshot.svg"
                                  alt={recruitContent.howitWorks.items[index].name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <Image
                              src="/images/verify-bg.webp"
                              alt="Solid yellow gradient background"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                              <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <Image
                                  src="/svg/verify-screenshot.svg"
                                  alt={recruitContent.howitWorks.items[index].name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <section className="pt-32 pb-64 md:pt-48 md:pb-96 relative z-20 min-h-screen">
        <div className="absolute inset-0 w-full h-full bg-gray-200">
          {/* Mobile/Tablet Background */}
          <Image
            src="/images/promo-bg.webp"
            alt="Studio Ghibli artwork: Boy relaxes on a hillside overlooking mountains and a lake"
            fill
            className="object-cover object-center lg:hidden"
            loading="lazy"
          />
          {/* Desktop Background */}
          <Image
            src="/images/promo-bg-lg.webp"
            alt="Picnic scene: Boy relaxes in a mountain meadow with trees and blue sky"
            fill
            className="object-cover object-center hidden lg:block"
            loading="lazy"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-20 pt-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {recruitContent.howitWorks.box.name}
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            {recruitContent.howitWorks.box.description}
          </p>
          <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow transition hover:bg-primary/90">
            {recruitContent.howitWorks.box.btnName}
          </button>
        </div>
      </section>
    </>
  );
}
