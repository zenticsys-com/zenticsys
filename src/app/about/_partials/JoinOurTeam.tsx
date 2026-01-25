import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
const JoinOurTeam = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Whether you're looking to transform your business with innovative
          software or join our team of experts, we'd love to hear from you.
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
              text="Start Your Project"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>

          <Link href="/career">
            <ZtsButton
              text="Join Our Team"
              className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
