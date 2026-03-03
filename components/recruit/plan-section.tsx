"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ContactUsDialog } from "./contact-us-dialog";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useEffect, useRef, useState } from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { recruitContent } from "@/lib/recruit-content";

type Feature = {
  name: string;
  info: string;
};

const PlanSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [isVisible]);

  const plans = [
    {
      name: "Standard",
      price: "60",
      planType: "monthly",
      isBestSeller: false,
      features: recruitContent.plansSection.items.standard.features,
    },
    {
      name: "Founder's Plan",
      price: "99",
      planType: "monthly",
      limitedTimeOnly: recruitContent.plansSection.items.founders.limitedTimeOnly,
      startingAt: recruitContent.plansSection.items.founders.startingAt,
      isBestSeller: true,
      features: recruitContent.plansSection.items.founders.features,
    },
    {
      name: "Enterprise Plan",
      price: "500",
      planType: "monthly",
      startingAt: recruitContent.plansSection.items.enterprise.startingAt,
      isBestSeller: false,
      features: recruitContent.plansSection.items.enterprise.features,
    },
  ];

  return (
    <section className="pt-20 pb-20 relative z-10" id="pricing-section">
      {/* Fade from CTA section */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      ></div>
      <div className="max-w-7xl px-4 mx-auto flex justify-between items-center flex-col gap-20 relative z-20">
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="md:text-6xl text-4xl text-center font-bold">
            {recruitContent.plansSection.name}
          </h2>
          <div className="inline-flex items-center justify-center rounded-full border border-primary/50 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 px-6 py-2 backdrop-blur-sm shadow-sm">
            <AnimatedShinyText className="text-sm font-medium whitespace-nowrap">
              {recruitContent.plansSection.badge}
            </AnimatedShinyText>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto px-4 sm:px-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`w-full bg-background rounded-lg p-6 relative border-border ${
                plan.isBestSeller
                  ? "border-2 border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20"
                  : "border"
              }`}
            >
              <div className="py-6 flex flex-col gap-4">
                <div className="h-20 flex flex-col">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="h-8 flex flex-col justify-start">
                    {plan.startingAt && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {plan.startingAt}
                      </p>
                    )}
                    {plan.limitedTimeOnly && (
                      <p className="text-xs text-primary font-semibold mt-1">
                        {plan.limitedTimeOnly}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col h-20 justify-center">
                  <p className="text-5xl md:text-6xl font-bold leading-none tracking-tighter">
                    ${plan.price}
                    <span className="text-lg md:text-xl text-muted-foreground font-normal ml-1">
                      /mo
                    </span>
                  </p>
                </div>
                <div>
                  {plan.name === "Enterprise Plan" ? (
                    <ContactUsDialog
                      trigger={
                        <Button size="sm" className="w-full" variant="default">
                          Contact Us Now
                        </Button>
                      }
                    />
                  ) : (
                    <Button size="sm" className="w-full" variant="default">
                      Choose Plan
                    </Button>
                  )}
                </div>
              </div>
              <ul className="space-y-3 text-base pb-10">
                {plan.features.map((feature, index) => (
                  <li
                    key={feature.name}
                    className="flex items-center justify-between text-muted-foreground text-sm"
                  >
                    <span
                      ref={
                        plan.isBestSeller && index === 1 ? textRef : undefined
                      }
                      className={`text-sm whitespace-nowrap inline-flex ${
                        plan.isBestSeller && index === 1
                          ? "font-bold text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.isBestSeller && index === 1 ? (
                        feature.name.split("").map((char, charIndex) => {
                          const delay = charIndex * 0.1;
                          return (
                            <span
                              key={charIndex}
                              className={
                                isVisible
                                  ? "inline-block animate-wave-letter-once"
                                  : "inline-block"
                              }
                              style={{
                                animationDelay: `${delay}s`,
                                transformOrigin: "center",
                                display: "inline-block",
                              }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </span>
                          );
                        })
                      ) : (
                        feature.name
                      )}
                    </span>
                    {feature.info && (
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-4 h-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.info}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </li>
                ))}
              </ul>
              {plan.isBestSeller && (
                <div className="absolute bg-gradient-to-r from-primary/90 to-primary text-primary-foreground text-nowrap -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold rounded-lg shadow-lg">
                  BEST SELLING
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
