import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServicesHeroSection = () => {
  return (
    <section className="from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl  font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive software solutions designed to transform your business
            and drive innovation. From custom development to digital
            transformation, we have the expertise to deliver results.
          </p>

          <Link href="/schedule" className="flex justify-center">
            <ZtsButton
              icon={
                <>
                  <FaArrowRight className="w-4 h-4" />
                </>
              }
              iconPlacement="after"
              text="Get Started"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
