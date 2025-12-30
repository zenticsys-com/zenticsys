"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "grey.900",
        color: "white",
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Zenticsys
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.300", mb: 3, maxWidth: 400 }}
            >
              We are a software development company dedicated to creating
              innovative solutions that transform businesses and drive digital
              success.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                href="https://www.facebook.com/share/17ZMAVMK5J/"
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <Facebook />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/company/zenticsys/posts/?feedView=all"
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/zentic.sys?igsh=MTluam1mM3Z6cW94ZA=="
                target="_blank"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {quickLinks.map((link) => (
                <Button
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    color: "grey.300",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    p: 0.5,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.300", mb: 2 }}>
              Stay updated with our latest insights and news.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                type="email"
                placeholder="Enter your email"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "grey.800",
                    color: "white",
                    borderRadius: 0,
                    "& fieldset": { borderColor: "grey.700" },
                    "&:hover fieldset": { borderColor: "grey.600" },
                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "grey.400",
                    opacity: 1,
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 6, borderColor: "grey.800" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            (c) 2024 Zenticsys. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink
              component={NextLink}
              href="#"
              sx={{
                color: "grey.400",
                textDecoration: "none",
                "&:hover": { color: "white" },
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="#"
              sx={{
                color: "grey.400",
                textDecoration: "none",
                "&:hover": { color: "white" },
              }}
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="#"
              sx={{
                color: "grey.400",
                textDecoration: "none",
                "&:hover": { color: "white" },
              }}
            >
              Contact
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
