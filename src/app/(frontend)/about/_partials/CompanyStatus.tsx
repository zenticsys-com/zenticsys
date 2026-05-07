const CompanyStatus = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Expert Developers" },
    { number: "98%", label: "Client Satisfaction" },
  ];
  return (
    <section className="py-8 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                <span> {stat?.number}</span>
              </div>
              <div className="text-gray-600 font-medium">
                <span>{stat?.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatus;
