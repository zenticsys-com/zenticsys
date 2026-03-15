/**- Cese Studies type -**/
export type CaseStudiesPropsType = {
  title: string;
  company: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
};

/**- Case Studies Data -**/
export const caseStudies: CaseStudiesPropsType[] = [
  {
    title: "Healthcare Management System",
    company: "MedTech Solutions",
    description:
      "Developed a comprehensive healthcare management platform that allows hospitals and clinics to manage patient records, appointments, and medical history in one centralized system. The platform improves workflow efficiency by automating routine administrative tasks and providing doctors with instant access to critical patient data. It also enhances communication between patients and healthcare providers through secure portals and real-time notifications.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356",
    category: "Healthcare",
    tags: ["Healthcare", "Web App", "Mobile"],
  },
  {
    title: "E-commerce Platform Redesign",
    company: "RetailMax",
    description:
      "Redesigned the entire e-commerce platform with a modern and user-friendly interface to improve customer engagement and shopping experience. The new system includes optimized product listing pages, faster checkout processes, and improved mobile responsiveness. Performance optimizations were implemented to reduce loading times, resulting in better user retention and higher conversion rates across desktop and mobile devices.",
    image: "https://images.unsplash.com/photo-1758876202983-c36dd5019142",
    category: "E-commerce",
    tags: ["E-commerce", "UI/UX", "Performance"],
  },
  {
    title: "Financial Analytics Dashboard",
    company: "InvestPro",
    description:
      "Built a powerful financial analytics dashboard that provides real-time insights into market trends and investment performance. The platform includes interactive charts, advanced filtering options, and custom reporting tools that help users make data-driven decisions. It also supports real-time data processing and secure access controls, ensuring high performance and reliability for professional financial analysts.",
    image: "https://images.unsplash.com/photo-1758523670550-223a01cd7764",
    category: "Fintech",
    tags: ["Fintech", "Analytics", "Dashboard"],
  },
];
