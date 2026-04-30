import ZtsButton from "@/app/_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const CustomWebsiteDesignHeroSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-start md:text-[44px] font-bold text-gray-900 mb-3">
              Custom Website
              <span className="text-primary"> Design Services </span>
              for Growing Businesses
            </h1>

            <h3 className="md:text-xl mb-2 font-semibold ">
              Custom Web Design Built for Modern Brands to Stand Out
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              We create custom website design solutions based on your business
              goals, brand identity, and customer journey. Zenticsys builds
              fast, modern, and conversion-focused websites that help businesses
              attract customers, build trust, and grow online.
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

export default CustomWebsiteDesignHeroSection;
