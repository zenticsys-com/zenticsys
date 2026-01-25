const CompanyStatus = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Expert Developers" },
    { number: "98%", label: "Client Satisfaction" },
  ];
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatus;
