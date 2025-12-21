import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const CallSchedule = () => {
  return (
    <section className="py-20 bg-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Project
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Let us discuss how we can help transform your business with innovative
          software solutions.
        </p>
        <div className="flex justify-center">
          <Link href="/schedule">
            <ZtsButton
              text="Schedule a Call Today"
              className="text-white border-none hover:bg-primary-dark"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallSchedule;
