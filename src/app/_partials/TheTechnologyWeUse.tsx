const TheTechnologyWeUse = () => {
  const technologies = [
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Technology We Use
          </h2>
          <p className="text-xl text-gray-600">
            Cutting-edge technologies for robust solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-gray-200 hover:shadow-lg shadow-primary/10  duration-300  p-6 text-center"
            >
              <span className="text-lg font-semibold text-gray-700">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheTechnologyWeUse;
