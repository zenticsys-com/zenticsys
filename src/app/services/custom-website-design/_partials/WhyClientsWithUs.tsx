import { Card, CardContent } from "@/components/ui/card";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  FaBuildingColumns,
  FaBusinessTime,
  FaCar,
  FaHeartPulse,
} from "react-icons/fa6";
import { IoLayersSharp, IoSettingsSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { PiHandHeartFill } from "react-icons/pi";

const WhyClientsWithUs = () => {
  /**- Data -**/
  const features = [
    {
      title: "We Listen First",
      description:
        "We don’t guess what you need. First thing, we sit down for a call to really get your business, who you’re talking to, and where you want to go.",
    },
    {
      title: "You Always Know What's Up",
      description:
        "Weekly calls, live design previews, and no disappearing acts. It’s straightforward, you see everything as it happens.",
    },
    {
      title: "Designs That Have Purpose",
      description:
        "Every button, headline, and layout pulls its weight. Nothing’s there just to look pretty; it all works toward your goals.",
    },
    {
      title: "Battle-Tested Experience",
      description:
        "17+ years working with startups through enterprises across every industry. We’ve solved just about every web challenge you can imagine.",
    },
    {
      title: "No Ghosting After Launch",
      description:
        "Your site’s live? Great, we’re still here. Updates, fixes, improvements, speed tweaks, whatever comes up.",
    },
    {
      title: "Results You Can Measure",
      description:
        "We don’t just deliver pretty websites. Clients typically see 30–50% lifts in engagement, better conversions, and sites that actually support business growth.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-230 mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="md:text-xl text-gray-600">
            We deliver custom software development, SaaS solutions, and
            industry-specific digital platforms engineered for scalability,
            security, and measurable business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features?.map((feature, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature?.title}
                </h3>
                <p className="text-gray-600">{feature?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsWithUs;
