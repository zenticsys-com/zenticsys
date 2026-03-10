import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";

const CustomWebServices = () => {
  return (
    <section className="py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Custom Web Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Specialized software solutions across diverse industries. We
            understand the unique challenges and requirements of different
            sectors, delivering tailored solutions that drive results.
          </p>
          <section className="flex flex-wrap gap-3 justify-center text-xs lg:text-sm">
            <Link href="#" className="flex justify-center">
              <ZtsButton
                text="Automotive Web Design"
                className="text-primary bg-transparent border-primary hover:border-transparent rounded-full hover:bg-primary hover:text-white shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
            <Link href="#" className="flex justify-center">
              <ZtsButton
                text="Social Media Marketing"
                className="text-primary bg-transparent border-primary hover:border-transparent rounded-full hover:bg-primary hover:text-white shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
            <Link href="#" className="flex justify-center">
              <ZtsButton
                text="Website UI UX Design"
                className="text-primary bg-transparent border-primary hover:border-transparent rounded-full hover:bg-primary hover:text-white shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
            <Link href="#" className="flex justify-center">
              <ZtsButton
                text="Content Writing"
                className="text-primary bg-transparent border-primary hover:border-transparent rounded-full hover:bg-primary hover:text-white shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
            <Link href="#" className="flex justify-center">
              <ZtsButton
                text="Search Engine Optimization"
                className="text-primary bg-transparent border-primary hover:border-transparent rounded-full hover:bg-primary hover:text-white shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
            <Link href="#" className="flex justify-center">
              <ZtsButton
                text="Website Redesign"
                className="text-primary bg-transparent border-primary hover:border-transparent rounded-full hover:bg-primary hover:text-white shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CustomWebServices;
