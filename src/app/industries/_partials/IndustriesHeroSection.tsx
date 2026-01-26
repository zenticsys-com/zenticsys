import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

const IndustriesHeroSection = () => {
  return (
    <section className=" to-white bg-gray-50 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl  font-bold text-gray-900 mb-6">
            Industries <span className="text-primary">We Serve</span>
          </h1>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Specialized software solutions across diverse industries. We
            understand the unique challenges and requirements of different
            sectors, delivering tailored solutions that drive results.
          </p>

          <Link href="/schedule" className="flex justify-center">
            <ZtsButton
              icon={
                <>
                  <FaArrowRight className="w-4 h-4" />
                </>
              }
              iconPlacement="after"
              text="Contact Us"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHeroSection;
