"use client";

import { Button } from "../ui/button";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { ContactUsDialog } from "./contact-us-dialog";
import { recruitContent } from "@/lib/recruit-content";

const PlansFeatures = () => {
  const { plansFeatures } = recruitContent;

  const features = plansFeatures.plans[0].features.map((feature) => ({
    name: feature.name,
    info: feature.info,
  }));

  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8">
      <div className="max-w-7xl px-4 mx-auto flex justify-between items-center flex-col gap-6 md:gap-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {plansFeatures.name}
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="p-4 md:p-6 text-left align-bottom">
                  <span className="text-base md:text-lg font-bold">Features</span>
                </th>
                {plansFeatures.plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`p-4 md:p-6 min-w-[200px] md:min-w-[240px] align-bottom relative ${
                      plan.name === "Founder's Plan" ? "bg-muted/30" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      {plan.name === "Founder's Plan" && (
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          POPULAR
                        </div>
                      )}
                      <h6 className="font-bold text-base md:text-lg text-center">
                        {plan.name}
                      </h6>
                      {plan.name === "Enterprise Plan" ? (
                        <ContactUsDialog
                          trigger={
                            <Button size="default" className="w-full">
                              <span className="flex items-center gap-2">
                                {plansFeatures.btnNameContactUs}
                                <ArrowUpRight className="h-4 w-4" />
                              </span>
                            </Button>
                          }
                        />
                      ) : (
                        <Button
                          size="default"
                          className={`w-full ${
                            plan.name === "Founder's Plan"
                              ? "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                              : ""
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {plansFeatures.btnNameChoosePlan}
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </Button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIdx) => (
                <tr key={feature.name} className="border-b border-border">
                  <td className="p-4 md:p-5 font-semibold text-sm md:text-base">
                    {feature.name}
                  </td>
                  {plansFeatures.plans.map((plan) => {
                    const planFeature = plan.features[featureIdx];
                    return (
                      <td
                        key={`${plan.name}-${feature.name}`}
                        className={`p-4 md:p-5 ${
                          plan.name === "Founder's Plan" ? "bg-muted/30" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          {planFeature.info && (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm md:text-base text-center">
                                {planFeature.info}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PlansFeatures;
