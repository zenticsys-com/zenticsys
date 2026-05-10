import type { HomePageView } from "@/lib/homePage";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

type Props = {
  content?: HomePageView["cta"];
};

const CallSchedule = ({ content }: Props) => {
  const data = content || {
    heading: "Let’s Build Your Next Digital Product",
    description:
      "Have an idea, a system to improve, or a product to scale?\nLet’s discuss how we can turn your vision into a reliable, high-performance custom software solution built for long-term success.",
    buttonLabel: "Schedule a Strategy Call",
    buttonHref: "/schedule",
  };

  return (
    <section className="py-20 bg-primary ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {data.heading}
        </h2>
        <p className="text-lg text-white mb-8 max-w-4xl mx-auto">
          {data.description}
        </p>
        <div className="flex justify-center">
          <Link href={data.buttonHref || "/schedule"}>
            <ZtsButton
              text={data.buttonLabel || "Schedule a Strategy Call"}
              className="text-primary-dark bg-white border-none hover:text-white hover:shadow-lg hover:shadow-gray-200/50 hover:bg-primary-dark"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallSchedule;
