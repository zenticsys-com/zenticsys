import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import SpecificMenuItems from "./SpecificMenuItems";
import { SubmenuType } from "@/data/nav-items-data";

type PropsType = {
  submenus: SubmenuType[];
};

const SubmenuDropdown: React.FC<PropsType> = ({ submenus }) => {
  return (
    <Box className="bg-white xl:w-6/7 mx-auto">
      <section className=" grid grid-cols-12">
        {submenus?.map((submenu) => (
          <div
            key={submenu?.title}
            className="md:col-span-6 lg:col-span-3 gap-2 p-5"
          >
            <h2 className="text-gray-900 text-xl font-semibold transition duration-300 border-b inline-block border-b-white hover:border-b hover:border-b-primary">
              <Link href={submenu?.href}>
                <p className="flex justify-between">
                  {submenu?.title}
                  <BsArrow90DegLeft className="w-8 -scale-x-100 rotate-90 mt-2 ml-6" />
                </p>
              </Link>
            </h2>
            <p className="text-gray-600 mt-0.5">{submenu?.description}</p>

            <div className="mt-3">
              {submenu?.items?.map((item) => (
                <p className="py-1 font-medium text-base text-gray-600">
                  <Link key={item?.href} href={item?.href}>
                    <span className=" inline-block transition duration-300 border-b border-b-white hover:border-b hover:border-b-primary ">
                      {item.name}
                    </span>
                  </Link>
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="col-span-1 md:col-span-6 lg:col-span-3">
          <SpecificMenuItems submenus={submenus} />
        </div>
      </section>
    </Box>
  );
};

export default SubmenuDropdown;
