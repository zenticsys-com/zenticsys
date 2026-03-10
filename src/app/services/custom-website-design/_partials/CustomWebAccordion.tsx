import Image from "next/image";
import CustomWebAccordionItems from "@/app/services/custom-website-design/_components/CustomWebAccordionItems";

const CustomWebAccordion = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center">
          <h2 className="text-2xl  md:text-4xl font-bold text-gray-900 mb-6">
            Custom Software Solution
          </h2>

          <p className="text-gray-600 mb-8 max-w-5xl mx-auto text-lg">
            We are a global software development company delivering custom
            software development services, SaaS platforms, web application
            development, and enterprise software solutions for growth-driven
            businesses.
          </p>
        </section>
        <section className="grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-7">
            <CustomWebAccordionItems />
          </div>
          <section className="col-span-12 md:col-span-5">
            <div className="w-full h-auto">
              <Image
                src={"/assets/images/img_11.jpg"}
                alt="image"
                width={570}
                height={380}
                className="w-full h-auto shadow-lg"
              />
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default CustomWebAccordion;
