import ZtsButton from "@/app/_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const CareerHerroSection = () => {
  return (
    <section className="bg-gradient-to from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-[#ef3d23]">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build the future of software with a passionate team of innovators.
              At Zenticsys, we're not just developing software – we're shaping
              the digital transformation of businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

              <Link href="/about">
                <ZtsButton
                  text="Learn About Our Culture"
                  className="border-primary text-primary hover:bg-primary hover:border-transparent hover:text-white"
                />
              </Link>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-4">

                <Button size="lg">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Our Culture
                </Button>
              </div> */}
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

export default CareerHerroSection;
