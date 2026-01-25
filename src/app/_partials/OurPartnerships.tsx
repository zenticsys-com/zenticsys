import { IoLogoMedium } from "react-icons/io5";
import {
  SiGoogle,
  SiAmazon,
  SiMeta,
  SiApple,
  SiSalesforce,
} from "react-icons/si";
const OurPartnerships = () => {
  const partnerLogos = [
    { name: "Microsoft", icon: <IoLogoMedium /> },
    { name: "Google", icon: <SiGoogle /> },
    { name: "Amazon", icon: <SiAmazon /> },
    { name: "Meta", icon: <SiMeta /> },
    { name: "Apple", icon: <SiApple /> },
    { name: "Salesforce", icon: <SiSalesforce /> },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partnerships
          </h2>
          <p className="md:text-xl text-gray-600">
            Trusted by leading companies worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {partnerLogos.map((partnerLogo, index) => (
            <div
              key={index}
              className="bg-gray-100  hover:shadow-lg shadow-primary/10  duration-300  p-5"
            >
              <div className="text-lg font-semibold text-gray-700 flex justify-center items-center gap-2">
                <span className="text-xl md:text-3xl text-primary">
                  {partnerLogo.icon}
                </span>
                <span className="text-sm sm:text-base">{partnerLogo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnerships;
