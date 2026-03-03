import dynamic from "next/dynamic";
import RecruitHeader from "@/components/recruit/recruit-header";
import Hero from "@/components/recruit/hero";

// Lazy load below-the-fold components
const FeatureSection = dynamic(() => import("@/components/recruit/feature-section"), {
  loading: () => <div className="min-h-screen" />,
});

const PlanSection = dynamic(() => import("@/components/recruit/plan-section"), {
  loading: () => <div className="min-h-screen" />,
});

const PlansFeatures = dynamic(() => import("@/components/recruit/plans-features"), {
  loading: () => <div className="min-h-screen" />,
});

const FAQSection = dynamic(() => import("@/components/recruit/faq-section"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import("@/components/recruit/footer"), {
  loading: () => <div className="min-h-[800px]" />,
});

const SignupPopup = dynamic(() => import("@/components/recruit/signup-popup"));

export default function Home() {
  return (
    <>
      <RecruitHeader />
      <main className="bg-background">
        <section className="bg-background">
          <Hero />
          <FeatureSection />
          <PlanSection />
          <PlansFeatures />
          <FAQSection />
        </section>
      </main>
      <Footer />
      <SignupPopup />
    </>
  );
}
