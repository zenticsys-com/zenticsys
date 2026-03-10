import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const HeroSection = () => {
  return (
    <section className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-start md:text-[44px] font-bold text-gray-900 mb-6">
              Building Reliable
              <span className="text-primary"> Custom </span>
              Software Solution
            </h1>
            <h4 className="text-[22px] md:text-start md:text-3xl -mt-5 text-primary font-semibold mb-6">
              Secure. Scalable. Future-Ready.
            </h4>
            <h3 className="text-lg md:text-xl mb-2 font-semibold ">
              Global Custom Software Development Agency
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We are a global software development company delivering custom
              software development services, SaaS platforms, web application
              development, and enterprise software solutions for growth-driven
              businesses.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/schedule">
                <ZtsButton
                  icon={
                    <>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  }
                  iconPlacement="after"
                  text="Get Started"
                  className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50"
                />
              </Link>
            </div>
          </div>
          <div className="w-full h-auto">
            <Image
              src={"/assets/images/photo_1.png"}
              alt="image"
              width={570}
              height={380}
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
