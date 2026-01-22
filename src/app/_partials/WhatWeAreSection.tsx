import { CheckCircle } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const WhatWeAreSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-start md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="md:text-xl text-gray-600 mb-6 md:mb-8 sm:text-start">
              Zenticsys is a forward-thinking software development company with
              a passion for innovation and excellence. We combine technical
              expertise with strategic thinking to deliver solutions that drive
              real business value.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>7+ years of industry experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>100+ successful projects delivered</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>Expert team of developers and consultants</span>
              </div>
            </div>

            <Link href="/about">
              <ZtsButton
                text="Learn More About"
                className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white mt-8"
              />
            </Link>
          </div>

          <Image
            src={"/assets/images/group-photo.png"}
            alt="image"
            width={570}
            height={380}
            className="w-full h-auto max-w-[570px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreSection;
