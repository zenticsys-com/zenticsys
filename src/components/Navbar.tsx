"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
/**- Menu Items import -**/
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

import SubmenuDropdown from "@/app/_components/SubmenuDropdown";
import {
  allServicesMenuItems,
  navItems,
  servicesMenu,
} from "@/data/navBarData";
import { Close, Menu } from "@mui/icons-material";
import Image from "next/image";
import { BsArrow90DegLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | false>(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/blog") return pathname.startsWith("/blog");
    return pathname.startsWith(href);
  };

  /**- Dropdown Menu Click Handler -**/
  const handleDropdownMenu = (e: string) => {
    setOpenDropdown(openDropdown === e ? false : e);
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
              {/*_ Dropdown Menu_*/}
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

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: "100%", pt: 2 }}>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", px: 3, pb: 0 }}
          >
            <IconButton onClick={() => setIsMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          <List>
            <div>
              {navItems.map((item) => (
                <div key={item?.name}>
                  {item?.menu?.length ? (
                    <>
                      <ListItem key={item?.href} disablePadding>
                        <Accordion
                          expanded={openDropdown === item.name}
                          elevation={0}
                          sx={{
                            boxShadow: "none",
                            "&:before": {
                              display: "none",
                            },
                          }}
                        >
                          <AccordionSummary
                            expandIcon={null}
                            aria-controls="panel2-content"
                            id="panel2-header"
                          >
                            {/* Start */}
                            <ListItemButton
                              component={Link}
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              sx={{
                                color: isActive(item.href)
                                  ? "white"
                                  : "text.primary",
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
                            {/* end */}
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDropdownMenu(item?.name);
                              }}
                            >
                              <span className="px-2">
                                {openDropdown ? (
                                  <MdKeyboardArrowDown className="text-3xl transition duration-300 rotate-180 text-primary" />
                                ) : (
                                  <MdKeyboardArrowDown className="text-3xl transition duration-300" />
                                )}
                              </span>
                            </IconButton>
                          </AccordionSummary>
                          <AccordionDetails>
                            <section className="">
                              {allServicesMenuItems?.map((submenu) => (
                                <div
                                  key={submenu?.title}
                                  className="gap-2 px-5 py-2"
                                >
                                  <h2 className="text-gray-900 text-xl font-semibold transition duration-300 border-b inline-block border-b-white hover:border-b hover:border-b-green-600">
                                    <Link href={submenu?.href}>
                                      <p className="flex justify-between">
                                        {submenu?.title}
                                        <BsArrow90DegLeft className="-scale-x-100 rotate-90 mt-2 ml-6" />
                                      </p>
                                    </Link>
                                  </h2>
                                  <p className="text-gray-600 mt-0.5">
                                    {submenu?.description}
                                  </p>

                                  <div className="mt-3">
                                    {submenu?.items?.map((item) => (
                                      <p className="py-1 font-medium text-primary text-lg">
                                        <Link
                                          key={item?.href}
                                          href={item?.href}
                                        >
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
                          </AccordionDetails>
                        </Accordion>
                      </ListItem>
                    </>
                  ) : (
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
                  )}
                </div>
              ))}
            </div>

            <ListItem sx={{ px: 2, pt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                component={Link}
                href="/schedule"
                onClick={() => setIsMenuOpen(false)}
                sx={{ borderRadius: 0, padding: 1.5 }}
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
