import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import React from "react";

const AutomotiveWebDesignBanner = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/images/img_22.jpg')",
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <section className="py-24 bg-primary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let’s Build Your Next Digital Product
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto">
            Have an idea, a system to improve, or a product to scale? Let’s
            discuss how we can turn your vision into a reliable,
            high-performance custom software solution built for long-term
            success.
          </p>
          <div className="flex justify-center">
            <Link href="/schedule">
              <ZtsButton
                text="Schedule a Strategy Call"
                className="text-primary bg-white border-none hover:text-white hover:shadow-lg hover:shadow-primary-dark/50 hover:bg-primary-dark"
              />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AutomotiveWebDesignBanner;
