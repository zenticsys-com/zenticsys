import { CheckCircle } from "@mui/icons-material";
import { Chip } from "@mui/material";
import Image from "next/image";

const CaseStudies = () => {
  /**_Data_**/
  const caseStudies = [
    {
      title: "Healthcare Management System",
      client: "MedTech Solutions",
      challenge:
        "Streamline patient management and reduce administrative overhead",
      solution:
        "Developed a comprehensive healthcare management platform with patient portals, appointment scheduling, and electronic health records.",
      results: [
        "50% reduction in admin time",
        "30% improvement in patient satisfaction",
        "99.9% system uptime",
      ],
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4OTM0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Healthcare", "Web App", "Mobile"],
    },
    {
      title: "E-commerce Platform Redesign",
      client: "RetailMax",
      challenge:
        "Modernize outdated e-commerce platform to improve user experience and increase sales",
      solution:
        "Complete platform redesign with modern UI/UX, improved performance, and advanced analytics capabilities.",
      results: [
        "75% increase in conversion rate",
        "40% faster page load times",
        "60% growth in mobile sales",
      ],
      image:
        "https://images.unsplash.com/photo-1758876202983-c36dd5019142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODk5OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["E-commerce", "UI/UX", "Performance"],
    },
    {
      title: "Financial Analytics Dashboard",
      client: "InvestPro",
      challenge:
        "Create real-time financial analytics platform for investment professionals",
      solution:
        "Built a sophisticated analytics dashboard with real-time data processing, advanced charting, and custom reporting.",
      results: [
        "Real-time data processing",
        "90% faster report generation",
        "Advanced predictive analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU4OTEzNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Fintech", "Analytics", "Dashboard"],
    },
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="md:text-xl text-gray-600">
            Real-world examples of our successful projects
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      variant="outlined"
                      className="border-primary text-primary"
                    />
                  ))}
                </div>
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <div className="mb-3">
                  <span className="text-sm font-semibold text-primary">
                    CLIENT:{" "}
                  </span>
                  <span className="text-gray-600">{study.client}</span>
                </div>

                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Challenge:
                  </h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solution:
                  </h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 " />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="w-full h-auto ">
                  <Image
                    src={study.image}
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

export default CaseStudies;
