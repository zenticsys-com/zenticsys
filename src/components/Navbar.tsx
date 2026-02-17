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
import ServicesDropdownMenu from "./ServicesDropdownaMenu";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
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
        <Container maxWidth="xl">
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
              {navItems.map((item) =>
                item.name === "Services" ? (
                  <Box
                    key={item.href}
                    onMouseEnter={() => setServicesOpen(true)}
                  >
                    <Button
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
                  </Box>
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
