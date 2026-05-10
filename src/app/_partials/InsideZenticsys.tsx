import type { HomePageView } from "@/lib/homePage";
import { CheckCircle } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import ZtsButton from "../_components/ZtButton";

type Props = {
  content: HomePageView["inside"];
};

const InsideZenticsys = ({ content }: Props) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-start md:text-4xl font-bold text-gray-900 mb-4">
              {content.heading}
            </h2>
            <p className="text-lg text-gray-600 mb-6 md:mb-8 sm:text-start">
              {content.description}
            </p>
            <div className="space-y-4">
              {content.highlights?.map((item) => (
                <div className="flex items-center" key={item.text}>
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <Link href={content.ctaHref || "/about"}>
              <ZtsButton
                text={content.ctaLabel || "Explore Our Story"}
                className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50 mt-8"
              />
            </Link>
          </div>

          <Image
            src={"/assets/images/group-photo.png"}
            alt="image"
            width={570}
            height={380}
            className="w-full h-auto max-w-[570px]"
          />
        </div>
      </div>
    </section>
  );
};

export default InsideZenticsys;
