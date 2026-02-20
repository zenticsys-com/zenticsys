import { SubmenuType } from "@/components/Navbar";
import Link from "next/link";
import { BsArrow90DegLeft } from "react-icons/bs";

type PropsType = {
  submenus: SubmenuType[];
};

const specificMenuItems = [
  {
    title: "Brand Design",
    href: "#",
    description: "Crafting Timeless Visuals",
    items: [
      { name: "Brand Identity", href: "/services/brand-identity" },
      { name: "Corporate Identity", href: "/services/corporate" },
    ],
  },
  {
    title: "Brand Design",
    href: "#",
    description: "Crafting Timeless Visuals",
    items: [
      { name: "Brand Identity", href: "/services/brand-identity" },
      { name: "Corporate Identity", href: "/services/corporate" },
    ],
  },
];
const SpecificMenuItems: React.FC<PropsType> = () => {
  return (
    <section className=" grid grid-cols-12 py-3">
      {specificMenuItems?.map((submenu) => (
        <div key={submenu?.title} className="md:col-span-12 gap-2 px-5 py-2">
          <h2 className="text-gray-900 text-xl font-semibold transition duration-300 border-b inline-block border-b-white hover:border-b hover:border-b-green-600">
            <Link href={submenu?.href}>
              <p className="flex justify-between">
                {submenu?.title}
                <BsArrow90DegLeft className="-scale-x-100 rotate-90 mt-2 ml-6" />
              </p>
            </Link>
          </h2>
          <p className="text-gray-600 mt-0.5">{submenu?.description}</p>

          <div className="mt-3">
            {submenu?.items?.map((item) => (
              <p className="py-1 font-medium text-primary text-lg">
                <Link key={item?.href} href={item?.href}>
                  <span className=" inline-block transition duration-300 border-b border-b-white hover:border-b hover:border-b-green-600 ">
                    {item.name}
                  </span>
                </Link>
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SpecificMenuItems;
