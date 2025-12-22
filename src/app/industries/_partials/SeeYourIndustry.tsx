import ZtsButton from "@/app/_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const SeeYourIndustry = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Don not See Your Industry?
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          We work with businesses across all industries. Our adaptable approach
          allows us to understand your unique challenges and deliver customized
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/schedule"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Discuss Your Industry Needs
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={NextLink}
            href="/services"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            View All Services
          </Button> */}

          <Link href="/schedule">
            <ZtsButton
              icon={
                <>
                  <ArrowRight className="w-4 h-4" />
                </>
              }
              iconPlacement="after"
              text="Get Started"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>

          <Link href="/about">
            <ZtsButton
              text="Learn More"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeeYourIndustry;
