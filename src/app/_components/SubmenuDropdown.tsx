import { SubmenuType } from "@/components/Navbar";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type PropsType = {
  submenus: SubmenuType[];
};

const SubmenuDropdown: React.FC<PropsType> = ({ submenus }) => {
  return (
    <div className="bg-white xl:w-6/7 mx-auto">
      {/* New section */}
      <section className=" grid grid-cols-12">
        {submenus?.map((submenu) => (
          <div key={submenu?.title} className="col-span-3 gap-2 p-5">
            <Link href={submenu?.href}>
              <h2 className="text-gray-900 text-xl font-semibold">
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

      {/* <Box
        sx={{
          backgroundColor: "white",
          display: "grid",
          paddingTop: "40px",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {submenus?.map((submenu) => (
          <Box key={submenu?.title}>
            <Typography fontWeight={600}>{submenu?.title} →</Typography>

            <Typography variant="body2" color="text.secondary" mb={2}>
              {submenu?.description}
            </Typography>

            {submenu?.items?.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  display: "block",
                  textAlign: "left",
                  textTransform: "none",
                  borderRadius: 0,
                  mb: 1,
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        ))}
      </Box> */}
    </div>
  );
};

export default SubmenuDropdown;
