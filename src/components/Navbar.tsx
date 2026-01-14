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

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
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
              variant="h5"
              component={Link}
              href="/"
              sx={{
                fontWeight: "bold",
                color: "text.primary",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              <Image
                src={"/assets/images/zenticsys-con-2-black.png"}
                alt="image"
                width={70}
                height={50}
                className="w-full h-auto"
              />
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: isActive(item.href)
                      ? "primary.main"
                      : "text.secondary",
                    "&:hover": { color: "primary.main" },
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                component={Link}
                href="/schedule"
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
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
                    color: isActive(item.href) ? "white" : "text.white",
                    backgroundColor: isActive(item.href)
                      ? "#ef3d23"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: isActive(item.href)
                        ? "primary.light"
                        : "grey.100",
                      color: "primary.main",
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
                sx={{
                  backgroundColor: "primary.main",
                  "&:hover": { backgroundColor: "primary.dark" },
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
}
