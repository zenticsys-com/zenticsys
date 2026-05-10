import type { HomePageView } from "@/lib/homePage";
import Link from "next/link";
import HomeFAQ from "../_components/HomeFAQ";
import ZtsButton from "../_components/ZtButton";
import { ArrowRight } from "@mui/icons-material";

type Props = {
  content?: HomePageView["faq"];
};

const FAQSection = ({ content }: Props) => {
  const data = content || {
    heading: "Frequently Asked Questions",
    description:
      "Get quick insights into how we work and how we can help your business grow.",
    sidebarHeading: "Got Questions? We've Got Answers",
    ctaLabel: "Contact Us",
    ctaHref: "/schedule",
    items: null,
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.heading}
          </h2>
          <p className="text-lg text-gray-600">
            {data.description}
          </p>
        </div>
        <section className="grid grid-cols-12 gap-4 py-8">
          <div className="col-span-12 md:col-span-4  mb-5 flex flex-col justify-center w-full items-center md:items-start md:justify-start">
            <h3 className="text-3xl font-semibold md:font-bold text-gray-900 mb-5">
              {data.sidebarHeading}
            </h3>
            <Link href={data.ctaHref || "/schedule"}>
              <ZtsButton
                icon={
                  <>
                    <ArrowRight className="w-4 h-4" />
                  </>
                }
                iconPlacement="after"
                text={data.ctaLabel || "Contact Us"}
                className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50"
              />
            </Link>
          </div>
          <div className="space-y-4 col-span-12  md:col-span-8">
            <HomeFAQ items={data.items} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default FAQSection;
