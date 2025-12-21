import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const HeroSection = () => {
  return (
    <section className="from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the
              <span className="text-primary"> Future </span>
              of Software
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We create innovative software solutions that transform businesses
              and drive digital success. Partner with us to bring your vision to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                variant="contained"
                size="large"
                component={NextLink}
                href="/schedule"
                endIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Get Started
              </Button> */}
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
              {/* <Button
                variant="outlined"
                size="large"
                component={NextLink}
                href="/about"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More
              </Button> */}
              <Link href="/about">
                <ZtsButton
                  text="Learn More"
                  className="border-primary text-primary hover:bg-primary hover:border-transparent hover:text-white"
                />
              </Link>
            </div>
          </div>
          <div className="w-full h-auto ">
            <Image
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              width={570}
              height={380}
              sizes="(max-width: 768px) 100vw, 570px"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
