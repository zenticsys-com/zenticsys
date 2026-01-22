import ZtsButton from "@/app/_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";

const LetUsBuild = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let us Build Your Solution Together
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Ready to transform your business with cutting-edge technology? Our
          expert team is here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex justify-center">
            <Link href="/schedule">
              <ZtsButton
                icon={
                  <>
                    <ArrowRight className="w-4 h-4" />
                  </>
                }
                iconPlacement="after"
                text="Get Started"
                className="text-white bg-primary-dark border-none hover:bg-white hover:text-primary shadow-lg shadow-gray-200/50"
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="/schedule">
              <ZtsButton
                text="Schedule a Call Today"
                className="text-primary  border-none bg-white hover:text-white hover:shadow-lg hover:shadow-gray-200/50 hover:bg-primary-dark"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetUsBuild;
