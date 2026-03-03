import { CheckCircle } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const InsideZenticsys = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-start md:text-4xl font-bold text-gray-900 mb-4">
              Inside Zenticsys
            </h2>
            <p className="md:text-xl text-gray-600 mb-6 md:mb-8 sm:text-start">
              Zenticsys is a custom software development company specializing in
              advanced web applications, SaaS platforms, and enterprise software
              solutions. We focus on clean architecture, secure backend systems,
              modern frontend development, and cloud infrastructure to build
              reliable digital products that support long-term business growth.
              Our approach combines technical expertise, product strategy, and
              performance-driven development to deliver high-quality,
              enterprise-ready software systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>A Global SaaS & Web Application Engineering Company</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>
                  Specialists in Enterprise Software & Robust Backend
                  Architecture
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>
                  Experts in Cloud Infrastructure & Modern Frontend Technologies
                </span>
              </div>
            </div>

            <Link href="/about">
              <ZtsButton
                text="Explore Our Story"
                className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50 mt-8"
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

export default InsideZenticsys;
