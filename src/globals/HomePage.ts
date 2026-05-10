import type { Field, GlobalConfig } from "payload";

const services = [
  {
    title: "Website Design & Development",
    description:
      "As a website design and development company, we deliver responsive web design, custom web development, e-commerce website development, and web application development services tailored for performance, scalability, and business growth.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX design services focus on user interface design, UX strategy, and digital product design for web applications and SaaS platforms.",
  },
  {
    title: "Custom Software Development",
    description:
      "We deliver scalable SaaS software development, enterprise software solutions, and MVP development for complex business requirements and long-term growth.",
  },
  {
    title: "Mobile App Development",
    description:
      "We build reliable mobile applications for iOS and Android with strong architecture, performance optimization, and security.",
  },
  {
    title: "SaaS Design & Development",
    description:
      "We develop scalable SaaS platforms that turn business ideas into reliable Software as a Service products.",
  },
  {
    title: "360 Digital Marketing Solution",
    description:
      "We deliver digital marketing strategies combining SEO, paid advertising, content marketing, analytics, and performance optimization.",
  },
];

const industries = [
  {
    title: "Automotive Technology",
    description:
      "Vehicle management systems, dealer platforms, automotive SaaS, and connected car marketplace applications.",
  },
  {
    title: "Fintech & Banking",
    description:
      "Secure fintech software, payment systems, digital wallets, banking integrations, and compliant transaction management.",
  },
  {
    title: "Ecommerce & Retail",
    description:
      "E-commerce platforms with secure payments, inventory management, scalable architecture, and conversion-focused stores.",
  },
  {
    title: "HealthTech & MedTech",
    description:
      "Healthcare software covering diagnostics, patient management, telemedicine, medical SaaS, and secure clinical data infrastructure.",
  },
  {
    title: "Real Estate & Construction Tech",
    description:
      "Property management platforms, construction management systems, and growth-ready digital marketplace applications.",
  },
  {
    title: "Corporate / Business",
    description:
      "Enterprise software, business automation systems, CRM platforms, and modern corporate technology infrastructure.",
  },
];

const faqs = [
  {
    question: "How can I get a project quote?",
    answer:
      "Schedule a consultation call. After understanding your requirements, we prepare a detailed proposal with scope, timeline, and cost estimation.",
  },
  {
    question: "What services does Zenticsys provide?",
    answer:
      "We provide custom software development, SaaS product development, website design and development, mobile app development, UI/UX design, and enterprise software solutions.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer post-launch support, performance optimization, security updates, and feature enhancements.",
  },
];

const sectionFields: Field[] = [
  {
    name: "heading",
    type: "text",
    required: true,
  },
  {
    name: "description",
    type: "textarea",
  },
];

export const HomePage: GlobalConfig = {
  slug: "homePage",
  label: "Home Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    {
      name: "hero",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          defaultValue: "Building Reliable Custom Software Solution",
        },
        {
          name: "highlight",
          type: "text",
          defaultValue: "Custom",
        },
        {
          name: "subheading",
          type: "text",
          defaultValue: "Secure. Scalable. Future-Ready.",
        },
        {
          name: "eyebrow",
          type: "text",
          defaultValue: "Global Custom Software Development Agency",
        },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "We are a global software development company delivering custom software development services, SaaS platforms, web application development, and enterprise software solutions for growth-driven businesses.",
        },
        {
          name: "ctaLabel",
          type: "text",
          defaultValue: "Get Started",
        },
        {
          name: "ctaHref",
          type: "text",
          defaultValue: "/schedule",
        },
      ],
    },
    {
      name: "inside",
      type: "group",
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          defaultValue: "Inside Zenticsys",
        },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "Zenticsys is a custom software development company specializing in advanced web applications, SaaS platforms, and enterprise software solutions.",
        },
        {
          name: "highlights",
          type: "array",
          fields: [{ name: "text", type: "text", required: true }],
          defaultValue: [
            { text: "A Global SaaS & Web Application Engineering Company" },
            {
              text: "Specialists in Enterprise Software & Robust Backend Architecture",
            },
            {
              text: "Experts in Cloud Infrastructure & Modern Frontend Technologies",
            },
          ],
        },
        {
          name: "ctaLabel",
          type: "text",
          defaultValue: "Explore Our Story",
        },
        {
          name: "ctaHref",
          type: "text",
          defaultValue: "/about",
        },
      ],
    },
    {
      name: "partnerships",
      type: "group",
      fields: [
        ...sectionFields,
        {
          name: "partners",
          type: "array",
          fields: [{ name: "name", type: "text", required: true }],
          defaultValue: [
            { name: "Microsoft" },
            { name: "Google" },
            { name: "Amazon" },
            { name: "Meta" },
            { name: "Apple" },
            { name: "Salesforce" },
          ],
        },
      ],
      defaultValue: {
        heading: "Our Partnerships",
        description:
          "Collaborating with world-class technology providers to build enterprise-grade digital systems.",
      },
    },
    {
      name: "solutions",
      type: "group",
      fields: [
        ...sectionFields,
        {
          name: "items",
          type: "array",
          fields: [
            { name: "title", type: "text", required: true },
            { name: "description", type: "textarea", required: true },
          ],
          defaultValue: services,
        },
      ],
      defaultValue: {
        heading: "Solutions We Engineer",
        description:
          "Strategic design and development services built to power modern businesses.",
      },
    },
    {
      name: "industries",
      type: "group",
      fields: [
        ...sectionFields,
        {
          name: "items",
          type: "array",
          fields: [
            { name: "title", type: "text", required: true },
            { name: "description", type: "textarea", required: true },
          ],
          defaultValue: industries,
        },
      ],
      defaultValue: {
        heading: "Industries We Serve",
        description:
          "We deliver custom software development, SaaS solutions, and industry-specific digital platforms engineered for scalability, security, and measurable business growth.",
      },
    },
    {
      name: "caseStudies",
      type: "group",
      fields: sectionFields,
      defaultValue: {
        heading: "Case Studies",
        description: "Real-world examples of our successful projects",
      },
    },
    {
      name: "blogPreview",
      type: "group",
      fields: sectionFields,
      defaultValue: {
        heading: "Latest from Our Blog",
        description: "Insights, tips, and industry trends",
      },
    },
    {
      name: "faq",
      type: "group",
      fields: [
        ...sectionFields,
        { name: "sidebarHeading", type: "text", defaultValue: "Got Questions? We've Got Answers" },
        {
          name: "ctaLabel",
          type: "text",
          defaultValue: "Contact Us",
        },
        {
          name: "ctaHref",
          type: "text",
          defaultValue: "/schedule",
        },
        {
          name: "items",
          type: "array",
          fields: [
            { name: "question", type: "text", required: true },
            { name: "answer", type: "textarea", required: true },
          ],
          defaultValue: faqs,
        },
      ],
      defaultValue: {
        heading: "Frequently Asked Questions",
        description:
          "Get quick insights into how we work and how we can help your business grow.",
      },
    },
    {
      name: "cta",
      type: "group",
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "buttonLabel", type: "text", defaultValue: "Schedule a Strategy Call" },
        { name: "buttonHref", type: "text", defaultValue: "/schedule" },
      ],
      defaultValue: {
        heading: "Let’s Build Your Next Digital Product",
        description:
          "Have an idea, a system to improve, or a product to scale?\nLet’s discuss how we can turn your vision into a reliable, high-performance custom software solution built for long-term success.",
      },
    },
  ],
};
