"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
/**- Menu Items import -**/
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

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

import MobileServicesMenu from "@/app/_components/MobileServicesMenu";
import SubmenuDropdown from "@/app/_components/SubmenuDropdown";
import ZtsButton from "@/app/_components/ZtButton";
import { navItems } from "@/data/nav-items-data";
import { Close, Menu } from "@mui/icons-material";
import Image from "next/image";
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
                gap: { xs: 4, md: 2, lg: 4 },
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
                    <span>{item.name} </span>
                    <MdKeyboardArrowDown className="text-2xl" />
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
                      paddingX: { md: "12px", lg: "20px" },
                    }}
                  >
                    {item.name}
                  </Button>
                ),
              )}
              {/* <Button
                variant="contained"
                component={Link}
                href="/schedule"
                sx={{
                  borderRadius: 0,
                  transition: "0.3s ease",
                  "&:hover": {
                    boxShadow: (theme) =>
                      `0px 7px 20px ${theme.palette.primary.main}99`,
                  },
                }}
              >
                Schedule a Call
              </Button> */}
              <Link href={"/schedule"}>
                <ZtsButton
                  icon={<></>}
                  onClick={() => setIsMenuOpen(false)}
                  iconPlacement="after"
                  text="Schedule a Call"
                  className="py-2 text-white bg-primary-dark border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50"
                />
              </Link>
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
                            margin: 0,
                            padding: 0,
                            boxShadow: "none",
                            "&:before": {
                              display: "none",
                            },
                            "&.MuiButtonBase-root": {
                              margin: 0,
                              padding: 0,
                            },
                          }}
                        >
                          <AccordionSummary
                            expandIcon={null}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            sx={{
                              padding: 0,
                              margin: 0,
                              "& .MuiAccordionSummary-content": {
                                marginY: 0,
                              },
                            }}
                          >
                            <ListItemButton
                              component={Link}
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              sx={{
                                marginY: 0,
                                color: isActive(item.href)
                                  ? "white"
                                  : "text.primary",
                                backgroundColor: isActive(item.href)
                                  ? "#d62c14"
                                  : "transparent",

                                "&:hover": {
                                  backgroundColor: "grey.200",
                                  color: "#ef3d23",
                                },

                                "&:active": {
                                  backgroundColor: "#d62c14",
                                  color: "white",
                                },
                              }}
                            >
                              <ListItemText primary={item.name} />
                            </ListItemButton>
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDropdownMenu(item?.name);
                              }}
                            >
                              <span>
                                {openDropdown ? (
                                  <MdKeyboardArrowDown className="text-3xl transition duration-300 rotate-180 text-primary" />
                                ) : (
                                  <MdKeyboardArrowDown className="text-3xl transition duration-300" />
                                )}
                              </span>
                            </IconButton>
                          </AccordionSummary>
                          <AccordionDetails>
                            {/* Mobile Dropdown Menu for services */}
                            <MobileServicesMenu />
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
                            ? "#d62c14"
                            : "transparent",
                          "&:hover": {
                            backgroundColor: "grey.200",
                            color: "#ef3d23",
                          },
                          "&:active": {
                            backgroundColor: "#d62c14",
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
                sx={{
                  borderRadius: 0,
                  padding: 1.5,
                  backgroundColor: "#d62c14",
                }}
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
