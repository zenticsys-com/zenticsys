import { CheckCircle } from "@mui/icons-material";
import Image from "next/image";

const WhatWeAreSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 mb-8">
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
          </div>

          <Image
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            width={570}
            height={380}
            sizes="(max-width: 768px) 100vw, 570px"
            className="w-full h-auto max-w-[570px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreSection;
