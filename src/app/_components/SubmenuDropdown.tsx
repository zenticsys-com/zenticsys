import { SubmenuType } from "@/components/Navbar";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

type PropsType = {
  submenus: SubmenuType[];
};

const SubmenuDropdown: React.FC<PropsType> = ({ submenus }) => {
  return (
    <Box className="bg-white xl:w-6/7 mx-auto">
      <section className=" grid grid-cols-12">
        {submenus?.map((submenu) => (
          <div key={submenu?.title} className="col-span-3 gap-2 p-5">
            <Link href={submenu?.href}>
              <h2 className="text-gray-900 text-xl font-semibold transition duration-300 border-b inline-block border-b-white hover:border-b hover:border-b-green-600">
                {submenu?.title} →
              </h2>
            </Link>
            <p className="text-gray-600">{submenu?.description}</p>

            <div className="mt-3">
              {submenu?.items?.map((item) => (
                <Link key={item?.href} href={item?.href}>
                  <p className="py-1 font-medium text-primary">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Box>
  );
};

export default SubmenuDropdown;
