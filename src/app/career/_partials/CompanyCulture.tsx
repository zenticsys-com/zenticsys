import Image from "next/image";
import {
  LuAward as Award,
  LuHeart as Heart,
  LuUsers as Users,
  LuZap as Zap,
} from "react-icons/lu";

const CompanyCulture = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Culture
            </h2>
            <p className="md:text-lg text-gray-600 mb-6">
              We foster a collaborative, inclusive environment where innovation
              thrives. Our team is our greatest asset, and we're committed to
              creating a workplace where everyone can grow, learn, and make a
              meaningful impact.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-3" />
                <span>Collaborative and supportive team environment</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-primary mr-3" />
                <span>
                  Fast-paced, innovative work on cutting-edge projects
                </span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-primary mr-3" />
                <span>Recognition and rewards for outstanding performance</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-primary mr-3" />
                <span>
                  Commitment to work-life balance and employee wellbeing
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-auto ">
            <Image
              src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1ODkyMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="image"
              width={570}
              height={380}
              className="w-full h-auto shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
