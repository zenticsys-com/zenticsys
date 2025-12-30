import ZtsButton from "@/app/_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#ef3d23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Don't See the Right Position?
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Send
          us your resume and let us know how you'd like to contribute to our
          mission.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/schedule">
            <ZtsButton
              icon={
                <>
                  <ArrowRight className="w-4 h-4" />
                </>
              }
              iconPlacement="after"
              text="Send Your Resume"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>

          <Link href="/about">
            <ZtsButton
              text="Learn More About Us"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
