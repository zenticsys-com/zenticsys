import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCtaSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl  font-bold text-gray-900 mb-6">
            Start Your Digital Journey
          </h2>
          <p className="md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 text-justify">
            Start your digital journey with innovative solutions designed to
            grow your online presence and accelerate business success. From
            modern website design to powerful digital strategies, we help you
            transform ideas into impactful digital experiences. Partner with us
            to build, scale, and succeed in today’s competitive digital world.
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

export default ServiceCtaSection;
