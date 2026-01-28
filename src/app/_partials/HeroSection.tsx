import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const HeroSection = () => {
  return (
    <section className="from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-start md:text-5xl font-bold text-gray-900 mb-6">
              Building the
              <span className="text-primary"> Future </span>
              of Software
            </h1>
            <h3 className="text-lg md:text-xl mb-2 font-semibold ">
              Best Software Development Company
            </h3>
            <p className="text- text-gray-600 mb-8 ">
              We create innovative software solutions that transform businesses
              and drive digital success. Partner with us to bring your vision to
              life.
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
                  className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
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
