import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

const CallSchedule = () => {
  return (
    <section className="py-20 bg-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project
        </h2>
        <p className="md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Let us discuss how we can help transform your business with innovative
          software solutions.
        </p>
        <div className="flex justify-center">
          <Link href="/schedule">
            <ZtsButton
              text="Schedule a Call Today"
              className="text-primary bg-white hover:text-white border-none hover:shadow-lg hover:shadow-gray-200/50 hover:bg-primary-dark"
              // className="text-primary bg-white hover:text-white border-transparent hover:bg-foreground hover:shadow-gray-300/30 hover:shadow"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallSchedule;
