import Image from "next/image";
import {
  LuGlobe as Globe,
  LuTrendingUp as TrendingUp,
  LuZap as Zap,
} from "react-icons/lu";

const WhyChooseZenticsys = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zenticsys?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical excellence with business acumen to deliver
              solutions that not only meet your current needs but also position
              you for future success.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="">
                  <TrendingUp className="w-6 h-6 text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    Over 200 successful projects across diverse industries with
                    consistently high client satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="">
                  <Globe className="w-6 h-6 text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Global Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our team brings international experience and best practices
                    to every project.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Agile Approach
                  </h3>
                  <p className="text-gray-600">
                    Fast, flexible delivery with continuous feedback and
                    iteration throughout the development process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:min-h-96 h-auto ">
            <Image
              src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1ODkyMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern office workspace"
              width={570}
              height={384}
              className="w-full h-auto md:min-h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZenticsys;
