"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { Close, Menu } from "@mui/icons-material";
import Image from "next/image";
import ServicesDropdownMenu from "../app/services/_partials/ServicesDropdownMenu";
import SubmenuDropdown from "@/app/_components/SubmenuDropdown";

type MenuType = {
  name: string;
  href: string;
  menu: SubmenuType[];
};

export type SubmenuType = {
  title: string;
  href: string;
  description: string;
  items: { name: string; href: string }[];
};

const servicesMenu: SubmenuType[] = [
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

const navItems: MenuType[] = [
  { name: "Services", href: "/services", menu: servicesMenu },
  { name: "Industries", href: "/industries", menu: [] },
  { name: "About", href: "/about", menu: [] },
  { name: "Blog", href: "/blog", menu: [] },
  { name: "Career", href: "/career", menu: [] },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/blog") return pathname.startsWith("/blog");
    return pathname.startsWith(href);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "text.primary",
          boxShadow: 1,
          borderBottom: "1px solid",
          borderColor: "grey.200",
        }}
      >
        <Container maxWidth="xl" className="relative">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Typography
              component={Link}
              href="/"
              sx={{ textDecoration: "none" }}
            >
              <Image
                src="/assets/images/zenticsys-con-2-black.png"
                alt="logo"
                width={120}
                height={60}
              />
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4,
              }}
            >
              {navItems?.map((item) =>
                item?.menu?.length ? (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive(item.href)
                        ? "primary.main"
                        : "text.secondary",
                      textTransform: "none",
                      fontWeight: 500,
                    }}
                    className="group static!"
                  >
                    <span>{item.name}</span>
                    <div
                      className="absolute top-[80%] left-0 w-full
                   opacity-0 invisible scale-0
                   group-hover:opacity-100
                   group-hover:visible
                   group-hover:scale-100
                   transition duration-300 ease-in-out"
                    >
                      <SubmenuDropdown submenus={item?.menu} />
                    </div>
                  </Button>
                ) : (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive(item.href)
                        ? "primary.main"
                        : "text.secondary",
                      textTransform: "none",
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </Button>
                ),
              )}
              <Button
                variant="contained"
                component={Link}
                href="/schedule"
                sx={{ borderRadius: 0 }}
              >
                Schedule a Call
              </Button>
            </Box>

            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              sx={{
                display: { xs: "block", md: "none" },
                color: "text.secondary",
              }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <ServicesDropdownMenu
          open={servicesOpen}
          onClose={() => setServicesOpen(false)}
        />
      </Box>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 220, pt: 2 }}>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", px: 3, pb: 2 }}
          >
            <IconButton onClick={() => setIsMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  sx={{
                    color: isActive(item.href) ? "white" : "text.primary",
                    backgroundColor: isActive(item.href)
                      ? "#ef3d23"
                      : "transparent",

                    "&:hover": {
                      backgroundColor: "grey.200",
                      color: "#ef3d23",
                    },

                    "&:active": {
                      backgroundColor: "#ef3d23",
                      color: "white",
                    },
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem sx={{ px: 2, pt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                component={Link}
                href="/schedule"
                onClick={() => setIsMenuOpen(false)}
                sx={{ borderRadius: 0 }}
              >
                Schedule a Call
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
