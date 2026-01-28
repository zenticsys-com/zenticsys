import ZtsButton from "@/app/_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const CareerHeroSection = () => {
  return (
    <section className="bg-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl text-center md:text-start font-bold text-gray-900 mb-6">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="md:text-xl text-center md:text-start text-gray-600 mb-8">
              Build the future of software with a passionate team of innovators.
              At Zenticsys, we're not just developing software – we're shaping
              the digital transformation of businesses worldwide.
            </p>
            <div className="flex flex-col items-center md:items-end sm:flex-row gap-4">
              <div>
                <Link href="/">
                  <ZtsButton
                    icon={
                      <>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    }
                    iconPlacement="after"
                    text="View Open Positions"
                    className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
                  />
                </Link>
              </div>

              <div>
                <Link href="/about">
                  <ZtsButton
                    text="Learn About Our Culture"
                    className="border-primary text-primary hover:bg-primary hover:border-transparent hover:text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-auto ">
            <Image
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default CareerHeroSection;
