"use client";

import Link from "next/link";
import { Box, Button, Menu as MuiMenu, Typography } from "@mui/material";

type Props = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

const servicesMenu = [
  {
    title: "UI/UX Design",
    description: "Crafting Intuitive Experiences",
    href: "/services/ui-ux",
    items: [
      { name: "UX UI Consulting", href: "/services/ux-consulting" },
      { name: "UX Audit", href: "/services/ux-audit" },
      { name: "UX Research", href: "/services/ux-research" },
    ],
  },
  {
    title: "Brand Design",
    description: "Crafting Timeless Visuals",
    href: "/services/brand",
    items: [
      { name: "Brand Identity", href: "/services/brand-identity" },
      { name: "Corporate Identity", href: "/services/corporate" },
    ],
  },
];

const ServicesDropdownMenu = ({ anchorEl, open, onClose }: Props) => {
  return (
    <MuiMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{ onMouseLeave: onClose }}
      PaperProps={{ sx: { width: 1100, p: 4 } }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 4,
        }}
      >
        {servicesMenu.map((category) => (
          <Box key={category.title}>
            <Link href={category.href}>
              <Typography fontWeight={600}>{category.title} →</Typography>
            </Link>

            <Typography variant="body2" color="text.secondary" mb={2}>
              {category.description}
            </Typography>

            {category.items.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  display: "block",
                  textAlign: "left",
                  textTransform: "none",
                  backgroundColor: "#f5f5f5",
                  mb: 1,
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        ))}
      </Box>
    </MuiMenu>
  );
};

export default ServicesDropdownMenu;
