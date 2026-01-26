import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";
import ZtsButton from "@/app/_components/ZtButton";
import ScheduleFAQ from "../_components/ScheduleFAQ";

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <section className="grid grid-cols-12 gap-4 py-8">
          <div className="col-span-12 md:col-span-4  mb-5 bg-cover bg-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              <span>
                Got Questions<span className="text-primary">?</span> <br />
                We've Got Answers
              </span>
            </h3>
            <Link href="#contact-us">
              <ZtsButton
                icon={
                  <>
                    <ArrowRight className="w-4 h-4" />
                  </>
                }
                iconPlacement="after"
                text="Contact Us"
                className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
              />
            </Link>
          </div>
          <div className="space-y-4 col-span-12  md:col-span-8">
            <ScheduleFAQ />
          </div>
        </section>
      </div>
    </section>
  );
};

export default FAQSection;
