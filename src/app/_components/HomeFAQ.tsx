"use client";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
const HomeFAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a typical consultation take?",
      answer:
        "Initial consultations usually last 30-60 minutes, depending on project complexity.",
    },
    {
      question: "Is the consultation free?",
      answer:
        "Yes, we offer free initial consultations to understand your needs and explore how we can help.",
    },
    {
      question: "What happens after the consultation?",
      answer:
        "We'll provide a detailed proposal with timeline, costs, and next steps within 48 hours.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations.",
    },
    {
      question: "What information should I prepare for the consultation?",
      answer:
        "Come prepared with your project goals, timeline, budget range, and any existing documentation or requirements.",
    },
    {
      question: "Can we schedule follow-up meetings?",
      answer:
        "Yes, we're happy to schedule additional meetings as needed throughout the project planning and development process.",
    },
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-200"
          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <div
                className={`transform transition-transform duration-200 ${
                  expandedFaq === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`mt-4 transition-all duration-200 ease-in-out ${
                expandedFaq === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default HomeFAQ;
