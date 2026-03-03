import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServicesHeroSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl  font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Custom software development company Zenticsys delivers SaaS, web
            design, mobile app development, and UI/UX design services to build
            secure, high-performance enterprise software solutions. We engineer
            structured digital systems that support real business operations,
            not just features, but long-term functionality.
          </p>

          <Link href="/schedule" className="flex justify-center">
            <ZtsButton
              icon={
                <>
                  <FaArrowRight className="w-4 h-4" />
                </>
              }
              iconPlacement="after"
              text="Request a Consultation"
              className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
