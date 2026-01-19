import { FaAws } from "react-icons/fa";
import { TbBrandDjango, TbBrandTypescript } from "react-icons/tb";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const TheTechnologyWeUse = () => {
  /**_ Data _**/
  const technologies = [
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <TbBrandDjango /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            The Technology We Use
          </h2>
          <p className="text-xl text-gray-600">
            Cutting-edge technologies for robust solutions
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-100  hover:shadow-lg shadow-primary/10  duration-300  p-5"
            >
              <div className="text-lg font-semibold text-gray-700 flex justify-center items-center gap-2">
                <span className="text-xl md:text-3xl text-primary">
                  {tech.icon}
                </span>
                <span className="text-sm sm:text-base">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheTechnologyWeUse;
