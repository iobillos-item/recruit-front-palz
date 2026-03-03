"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is RecruitPalz?",
    answer:
      "RecruitPalz is an AI-powered automated recruiting platform that streamlines your entire hiring process from job posting to final interviews. Our platform handles job creation, candidate screening, automated exams, background checks, and interview scheduling.",
  },
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You can start your 14-day free trial on any plan with no credit card required. During the trial, you'll have full access to all features of your chosen plan. You can cancel anytime before the trial ends with no charges.",
  },
  {
    question: "What is included in the automated candidate screening?",
    answer:
      "Our automated screening filters candidates based on skills, experience, and job-fit criteria using AI algorithms. It analyzes resumes, evaluates qualifications, and ranks candidates so you can focus only on the best talent.",
  },
  {
    question: "How does the cheat detection work for automated exams?",
    answer:
      "Our AI-powered cheat detection monitors candidate behavior during skill assessments, including detecting multiple tabs, copy-paste activities, and unusual patterns. This ensures fair and reliable candidate evaluations.",
  },
  {
    question: "Can I customize the automated interviews?",
    answer:
      "Yes, you can customize interview questions, set time limits, and define evaluation criteria. The system conducts video interviews where candidates record responses to your standardized questions.",
  },
  {
    question: "What platforms does RecruitPalz post jobs to?",
    answer:
      "RecruitPalz automatically posts your job listings across multiple top job platforms with one click, ensuring maximum exposure for your openings. The exact platforms depend on your plan and location.",
  },
  {
    question: "How do background checks work?",
    answer:
      "Our automated background check system instantly verifies candidate credentials and provides comprehensive reports covering employment history, education verification, and more, helping you make informed hiring decisions.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Standard plan users receive email support, while Enterprise plan users get both email and live support. Our team is here to help you get the most out of RecruitPalz.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section className="bg-card py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              open={openItem === `item-${index}`}
            >
              <AccordionTrigger
                onClick={() => handleToggle(`item-${index}`)}
                open={openItem === `item-${index}`}
                className="text-foreground text-lg"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                open={openItem === `item-${index}`}
                className="text-muted-foreground"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
