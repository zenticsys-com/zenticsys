"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";

import { MdKeyboardArrowDown } from "react-icons/md";

import { allServicesMenuItems, SubmenuType } from "@/data/nav-items-data";

type MobileServicesMenuProps = {
  submenus?: SubmenuType[];
  closeMenu: () => void;
};

const MobileServicesMenu = ({
  closeMenu,
  submenus = allServicesMenuItems,
}: MobileServicesMenuProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | false>(false);

  const handleDropdownMenu = (name: string) => {
    setOpenDropdown(openDropdown === name ? false : name);
  };

  const isActive = (href: string) => {
    if (!pathname) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      {submenus.map((submenu) => (
        <Accordion
          key={submenu.title}
          expanded={openDropdown === submenu.title}
          elevation={0}
          sx={{
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            sx={{
              padding: 0,
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
          >
            <ListItemButton>
              <Link href={submenu.href} onClick={closeMenu}>
                <ListItemText
                  primary={submenu.title}
                  sx={{
                    color: isActive(submenu.href) ? "#d62c14" : "text.primary",
                    fontWeight: isActive(submenu.href) ? 600 : 400,
                  }}
                />
              </Link>
            </ListItemButton>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleDropdownMenu(submenu.title);
                closeMenu();
              }}
            >
              <MdKeyboardArrowDown
                className={`text-3xl transition duration-300 ${
                  openDropdown === submenu.title
                    ? "rotate-180 text-primary"
                    : ""
                }`}
              />
            </IconButton>
          </AccordionSummary>

          <AccordionDetails>
            {/* <p className="text-gray-600 mb-2 text-xs">{submenu.description}</p> */}

            {submenu.items.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                onClick={closeMenu}
                href={item.href}
                sx={{
                  color: isActive(item.href) ? "white" : "text.primary",
                  fontSize: "14px",
                  backgroundColor: isActive(item.href)
                    ? "#d62c14"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "grey.200",
                    color: "#ef3d23",
                  },
                }}
              >
                {item.name}
              </ListItemButton>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default MobileServicesMenu;
