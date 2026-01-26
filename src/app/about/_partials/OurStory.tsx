import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@mui/material";
import { LuCalendar as Calendar } from "react-icons/lu";
const OurStory = () => {
  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "Zenticsys was established with a vision to deliver innovative software solutions.",
    },
    {
      year: "2016",
      title: "First Major Client",
      description:
        "Secured our first enterprise client and delivered a successful healthcare platform.",
    },
    {
      year: "2018",
      title: "Team Expansion",
      description:
        "Grew our team to 25 developers and expanded into mobile app development.",
    },
    {
      year: "2020",
      title: "Cloud Specialization",
      description:
        "Became certified cloud partners with AWS, Azure, and Google Cloud.",
    },
    {
      year: "2022",
      title: "AI & ML Focus",
      description:
        "Launched our AI/ML division and delivered advanced analytics solutions.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as a leading software development company with 200+ successful projects.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="md:text-xl text-gray-600">
            A decade of innovation and growth
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0
                      ? "pr-3 md:pr-8 text-right text-sm md:text-base"
                      : "pl-3 md:pl-8 text-left text-sm md:text-base"
                  }`}
                >
                  <Card className="shadow-sm hover:shadow-lg shadow-primary/10">
                    <CardContent className="p-2 md:peer-first-of-type:-5">
                      <div
                        className={`flex items-center mb-3 ${
                          index % 2 === 0 ? "justify-end" : " justify-start"
                        }`}
                      >
                        <Calendar className="w-5 h-5 text-primary mr-2" />
                        <Chip
                          label={item.year}
                          variant="outlined"
                          className="border-primary text-primary"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
