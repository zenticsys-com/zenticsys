import { Chip } from "@mui/material";
import Image from "next/image";
import ZtsButton from "../_components/ZtButton";

const CaseStudies = () => {
  /**_Data_**/
  const caseStudies = [
    {
      title: "Healthcare Management System",
      company: "MedTech Solutions",
      description:
        "Developed a comprehensive healthcare management platform that allows hospitals and clinics to manage patient records, appointments, and medical history in one centralized system. The platform improves workflow efficiency by automating routine administrative tasks and providing doctors with instant access to critical patient data. It also enhances communication between patients and healthcare providers through secure portals and real-time notifications.",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4OTM0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Healthcare", "Web App", "Mobile"],
    },
    {
      title: "E-commerce Platform Redesign",
      company: "RetailMax",
      description:
        "Redesigned the entire e-commerce platform with a modern and user-friendly interface to improve customer engagement and shopping experience. The new system includes optimized product listing pages, faster checkout processes, and improved mobile responsiveness. Performance optimizations were implemented to reduce loading times, resulting in better user retention and higher conversion rates across desktop and mobile devices.",
      image:
        "https://images.unsplash.com/photo-1758876202983-c36dd5019142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODk5OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["E-commerce", "UI/UX", "Performance"],
    },
    {
      title: "Financial Analytics Dashboard",
      company: "InvestPro",
      description:
        "Built a powerful financial analytics dashboard that provides real-time insights into market trends and investment performance. The platform includes interactive charts, advanced filtering options, and custom reporting tools that help users make data-driven decisions. It also supports real-time data processing and secure access controls, ensuring high performance and reliability for professional financial analysts.",
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
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <div>
                  <p className="text-gray-900 text-lg md:text-2xl">
                    <span className="font-semibold">Company:</span>
                    <span> {study.company}</span>
                  </p>
                </div>
                <p className="text-gray-600 text-justify py-3">
                  {study.description}
                </p>
                <section className="md:flex gap-4">
                  <p className="sm:text-xl font-semibold mb-2">
                    Service We Provide:
                  </p>
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
                </section>

                <ZtsButton
                  text="Read Full Case Study"
                  className="border-none text-white bg-primary hover:border-transparent hover:bg-primary-dark hover:text-white"
                />
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
