import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@mui/material";
import Image from "next/image";
const FeaturedWorks = () => {
  const projects = [
    {
      title: "AutoConnect Pro",
      description: "Connected car platform for automotive industry",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "Node.js", "IoT"],
    },
    {
      title: "HealthTech Suite",
      description: "Comprehensive healthcare management system",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Mobile", "Cloud", "AI"],
    },
    {
      title: "FinanceFlow",
      description: "Next-generation financial platform",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Blockchain", "Security", "Analytics"],
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Works
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our latest projects and innovations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="w-full h-auto ">
                <Image
                  src={project.image}
                  alt="image"
                  width={570}
                  height={380}
                  className="w-full h-auto shadow-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      className="bg-gray-200"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
