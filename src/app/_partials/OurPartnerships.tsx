import type { HomePageView } from "@/lib/homePage";
import { IoLogoMedium } from "react-icons/io5";
import {
  SiGoogle,
  SiAmazon,
  SiMeta,
  SiApple,
  SiSalesforce,
} from "react-icons/si";
type Props = {
  content?: HomePageView["partnerships"];
};

const OurPartnerships = ({ content }: Props) => {
  const partnerLogos = [
    { name: "Microsoft", icon: <IoLogoMedium /> },
    { name: "Google", icon: <SiGoogle /> },
    { name: "Amazon", icon: <SiAmazon /> },
    { name: "Meta", icon: <SiMeta /> },
    { name: "Apple", icon: <SiApple /> },
    { name: "Salesforce", icon: <SiSalesforce /> },
  ];
  const data = content || {
    heading: "Our Partnerships",
    description:
      "Collaborating with world-class technology providers to build enterprise-grade digital systems.",
    partners: partnerLogos.map(({ name }) => ({ name })),
  };
  const partners = (data.partners?.length ? data.partners : partnerLogos)
    .slice(0, partnerLogos.length)
    .map((partner, index) => ({
      ...partner,
      icon: partnerLogos[index]?.icon || <IoLogoMedium />,
    }));

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {partners?.map((partnerLogo, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:shadow-lg shadow-primary/10 duration-300 p-5"
            >
              <div className="text-lg font-semibold text-gray-700 flex justify-center items-center gap-2">
                <span className="text-xl md:text-3xl text-primary">
                  {partnerLogo?.icon}
                </span>
                <span className="text-sm sm:text-base">
                  {partnerLogo?.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnerships;
