/**- Services Data Type -**/
export type MenuType = {
  name: string;
  href: string;
  menu: SubmenuType[];
};

/**- Services Menu Items Data Type -**/
export type SubmenuType = {
  title: string;
  href: string;
  description: string;
  items: { name: string; href: string }[];
};

/**- Services Menu Items Data -**/
export const servicesMenu: SubmenuType[] = [
  {
    title: "Web Design Services",
    href: "#",
    description: "Crafting Intuitive Experiences",
    items: [
      {
        name: "Custom Website Design",
        // href: "/services/custom-website-design",
        href: "#",
      },
      { name: "Automotive Web Design", href: "#" },
      { name: "E-commerce Web Design", href: "#" },
      { name: "Healthcare Website", href: "#" },
      { name: "Real Estate Web Design", href: "#" },
      { name: "Corporate Website Design", href: "#" },
      { name: "Saas Web Design", href: "#" },
      { name: "Website Redesign", href: "#" },
      { name: "Fintech Web Design", href: "#" },
      { name: "Manufacturing Website", href: "#" },
      { name: "Web App Design", href: "#" },
      { name: "QA Consulting & Testing", href: "#" },
    ],
  },
  {
    title: "Custom Software Development Services",
    href: "#",
    description: "Crafting Timeless Visuals",
    items: [
      { name: "Automotive Software Development", href: "#" },
      { name: "SaaS Product Development", href: "#" },
      { name: "Enterprise Software Development", href: "#" },
      { name: "Healthcare Software Development", href: "#" },
      { name: "FinTech Software Development", href: "#" },
      { name: "Real Estate & PropTech Software", href: "#" },
      { name: "Logistics & Supply Chain Software", href: "#" },
      { name: "API Design & Development", href: "#" },
    ],
  },
  {
    title: "UI/UX Design Services",
    href: "#",
    description: "Crafting Timeless Visuals",
    items: [
      { name: "Website UI UX Design", href: "#" },
      { name: "SaaS UI Design", href: "#" },
      { name: "UX UI Strategy Consulting", href: "#" },
      { name: "Mobile App UI Design", href: "#" },
      { name: "UX Research", href: "#" },
      { name: "Dashboard & Admin Panel Design", href: "#" },
      { name: "Website UX Redesign", href: "#" },
      { name: "Product UX Design & Optimization", href: "#" },
      { name: "Wireframe & UI Prototyping", href: "#" },
      { name: "Design QA & Review", href: "#" },
    ],
  },
];

/**- Nav Items Data -**/
export const navItems: MenuType[] = [
  { name: "Services", href: "/services", menu: servicesMenu },
  { name: "Industries", href: "/industries", menu: [] },
  { name: "About", href: "/about", menu: [] },
  { name: "Blog", href: "/blog", menu: [] },
  { name: "Career", href: "/career", menu: [] },
];

/**- Specific Menu Items Data -**/
export const specificMenuItems: SubmenuType[] = [
  {
    title: "Mobile App Development Services",
    href: "#",
    description: "Crafting Timeless Visuals",
    items: [
      { name: "Android App Development", href: "#" },
      { name: "iOS App Development", href: "#" },
      { name: "Mobile App UI UX Design", href: "#" },
    ],
  },
  {
    title: "Digital Marketing Services",
    href: "#",
    description: "Crafting Timeles",
    items: [
      { name: "Search Engine Marketing (PPC)", href: "#" },
      { name: "Social Media Marketing", href: "#" },
      { name: "E-Commerce Marketing", href: "#" },
      { name: "Search Engine Optimization (White Level SEO)", href: "#" },
      { name: "Content Marketing", href: "#" },
      { name: "Conversion Rate Optimization", href: "#" },
      { name: "Lead Generation Services", href: "#" },
      { name: "Local SEO & Maps Marketing", href: "#" },
    ],
  },
];

export const allServicesMenuItems: SubmenuType[] = [
  ...servicesMenu,
  ...specificMenuItems,
];
