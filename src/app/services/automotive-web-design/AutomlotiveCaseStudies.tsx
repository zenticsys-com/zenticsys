import ZtsButton from "@/app/_components/ZtButton";
import { caseStudies } from "@/data/caseStudies";
import { Chip } from "@mui/material";
import Image from "next/image";

const AutomlotiveCaseStudies = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600">
            Real-world examples of our successful projects
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies?.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-xl md:text-2xl md:font-bold font-semibold text-gray-900 mb-4">
                  {study?.title}
                </h3>
                <div>
                  <p className="text-gray-900 text-lg md:text-2xl">
                    <span className="font-semibold">Company:</span>
                    <span> {study?.company}</span>
                  </p>
                </div>
                <p className="text-gray-600 md:text-justify py-3">
                  {study?.description}
                </p>
                <section className="md:flex gap-4">
                  <p className="sm:text-xl font-semibold mb-2">
                    Service We Provide:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study?.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        variant="outlined"
                        className="border-primary text-primary"
                      />
                    ))}
                  </div>
                </section>

                <ZtsButton
                  text="Read Full Case Study"
                  className="text-white bg-primary border-none hover:bg-white hover:text-primary shadow-lg hover:shadow-primary-dark/50"
                />
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="w-full h-auto ">
                  <Image
                    src={study?.image}
                    alt="image"
                    width={570}
                    height={380}
                    className="w-full h-auto  shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomlotiveCaseStudies;
