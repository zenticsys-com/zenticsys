"use client";

import AutomotiveIndustrySolutions from "@/app/industries/_partials/AutomotiveIndustrySolutions";
import ClientSuccessStories from "@/app/industries/_partials/ClientSuccessStories";
import IndustriesWeServe from "@/app/industries/_partials/IndustriesWeServe";
import SeeYourIndustry from "@/app/industries/_partials/SeeYourIndustry";
import { Button } from "@mui/material";
import NextLink from "next/link";

export function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <IndustriesWeServe />
      <AutomotiveIndustrySolutions />
      <ClientSuccessStories />
      <SeeYourIndustry />
    </div>
  );
}
