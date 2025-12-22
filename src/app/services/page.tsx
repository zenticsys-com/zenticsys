"use client";

import { Button } from "@mui/material";

import CaseStudies from "./_partials/CaseStudies";
import OurServices from "./_partials/OurServices";
import LetUsBuild from "./_partials/LetUsBuild";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <OurServices />

      {/* Case Studies */}
      <CaseStudies />

      {/* CTA Section */}
      <LetUsBuild />
    </div>
  );
};
export default ServicesPage;
