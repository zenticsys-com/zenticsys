import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Image from "next/image";
import { LuCircleCheck as CheckCircle } from "react-icons/lu";

const MissionAndVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission & Vision
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mission
              </h3>
              <p className="text-lg text-gray-600">
                To empower businesses with innovative software solutions that
                drive digital transformation, enhance operational efficiency,
                and create lasting competitive advantages in an ever-evolving
                technological landscape.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vision
              </h3>
              <p className="text-lg text-gray-600">
                To be the global leader in software innovation, recognized for
                our ability to transform complex business challenges into
                elegant, scalable solutions that shape the future of technology.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>Client-centric approach to software development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>Commitment to innovation and continuous improvement</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span>Focus on long-term partnerships and mutual success</span>
              </div>
            </div>
          </div>

          <div className="w-full md:min-h-96 h-auto ">
            <Image
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTAwMDE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern office workspace"
              width={570}
              height={384}
              className="w-full h-auto md:min-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
