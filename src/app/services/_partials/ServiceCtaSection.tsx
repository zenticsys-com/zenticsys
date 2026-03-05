import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCtaSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-6">
            Start Your Digital Journey
          </h2>
          <p className="md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 text-justify">
            Build your next digital platform with a trusted custom software
            development company. From enterprise software solutions and SaaS
            application development to modern web and mobile app engineering, we
            design and develop high-performance systems that drive measurable
            business growth. Partner with Zenticsys to architect, build, and
            launch technology that powers long-term success.
          </p>
          <div className="flex justify-center ">
            <Link href="/schedule" className="flex justify-center">
              <ZtsButton
                icon={
                  <>
                    <FaArrowRight className="w-4 h-4" />
                  </>
                }
                iconPlacement="after"
                text="Contact Us"
                className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCtaSection;
