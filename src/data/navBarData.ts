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
    href: "/services/web-design-services",
    description: "Crafting Intuitive Experiences",
    items: [
      { name: "Web Design Services", href: "/services/web-design-services" },
      { name: "UX Audit", href: "/services/ux-audit" },
      { name: "UX Research", href: "/services/ux-research" },
    ],
  },
  {
    title: "Custom Software Development Services",
    href: "/services/custom-software-development-services",
    description: "Crafting Timeless Visuals",
    items: [
      {
        name: "Brand Identity",
        href: "/services/custom-software-development-services",
      },
      { name: "Corporate Identity", href: "/services/corporate" },
      { name: "Corporate", href: "/services/corporate" },
    ],
  },
  {
    title: "UI/UX Design Services",
    href: "/services/ui-ux-design-services",
    description: "Crafting Timeless Visuals",
    items: [
      { name: "Brand Identity", href: "/services/ui-ux-design-services" },
      { name: "Corporate Identity", href: "/services/ui-ux-design-services" },
      { name: "Corporate Identity", href: "#" },
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
    href: "/services/mobile-app-development-services",
    description: "Crafting Timeless Visuals",
    items: [
      {
        name: "Brand Identity",
        href: "/services/mobile-app-development-services",
      },
      { name: "Corporate Identity", href: "/services/corporate" },
    ],
  },
  {
    title: "Digital Marketing Services",
    href: "/services/digital-marketing-services",
    description: "Crafting Timeles",
    items: [
      { name: "Brand Identity", href: "/services/digital-marketing-services" },
      {
        name: "Corporate Identity",
        href: "/services/digital-marketing-services",
      },
    ],
  },
];

export const allServicesMenuItems: SubmenuType[] = [
  ...servicesMenu,
  ...specificMenuItems,
];
