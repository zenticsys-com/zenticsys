import { getPayload } from "payload";

import type { HomePage } from "@/payload-types";
import config from "@/payload.config";

export type HomePageView = HomePage;

const fallbackHomePage: HomePageView = {
  id: "fallback-home-page",
  hero: {
    heading: "Building Reliable Custom Software Solution",
    highlight: "Custom",
    subheading: "Secure. Scalable. Future-Ready.",
    eyebrow: "Global Custom Software Development Agency",
    description:
      "We are a global software development company delivering custom software development services, SaaS platforms, web application development, and enterprise software solutions for growth-driven businesses.",
    ctaLabel: "Get Started",
    ctaHref: "/schedule",
  },
  inside: {
    heading: "Inside Zenticsys",
    description:
      "Zenticsys is a custom software development company specializing in advanced web applications, SaaS platforms, and enterprise software solutions.",
    highlights: [
      { text: "A Global SaaS & Web Application Engineering Company" },
      {
        text: "Specialists in Enterprise Software & Robust Backend Architecture",
      },
      {
        text: "Experts in Cloud Infrastructure & Modern Frontend Technologies",
      },
    ],
    ctaLabel: "Explore Our Story",
    ctaHref: "/about",
  },
  partnerships: {
    heading: "Our Partnerships",
    description:
      "Collaborating with world-class technology providers to build enterprise-grade digital systems.",
    partners: [
      { name: "Microsoft" },
      { name: "Google" },
      { name: "Amazon" },
      { name: "Meta" },
      { name: "Apple" },
      { name: "Salesforce" },
    ],
  },
  solutions: {
    heading: "Solutions We Engineer",
    description:
      "Strategic design and development services built to power modern businesses.",
    items: [],
  },
  industries: {
    heading: "Industries We Serve",
    description:
      "We deliver custom software development, SaaS solutions, and industry-specific digital platforms engineered for scalability, security, and measurable business growth.",
    items: [],
  },
  caseStudies: {
    heading: "Case Studies",
    description: "Real-world examples of our successful projects",
  },
  blogPreview: {
    heading: "Latest from Our Blog",
    description: "Insights, tips, and industry trends",
  },
  faq: {
    heading: "Frequently Asked Questions",
    description:
      "Get quick insights into how we work and how we can help your business grow.",
    sidebarHeading: "Got Questions? We've Got Answers",
    ctaLabel: "Contact Us",
    ctaHref: "/schedule",
    items: [],
  },
  cta: {
    heading: "Let’s Build Your Next Digital Product",
    description:
      "Have an idea, a system to improve, or a product to scale?\nLet’s discuss how we can turn your vision into a reliable, high-performance custom software solution built for long-term success.",
    buttonLabel: "Schedule a Strategy Call",
    buttonHref: "/schedule",
  },
};

export const getHomePage = async (): Promise<HomePageView> => {
  try {
    const payload = await getPayload({ config });

    return await payload.findGlobal({
      slug: "homePage",
      depth: 1,
    });
  } catch {
    return fallbackHomePage;
  }
};
