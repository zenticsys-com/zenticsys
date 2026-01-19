const OurPartnerships = () => {
  const partnerLogos = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "Apple",
    "Salesforce",
  ];

  return (
    <div>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partnerships
            </h2>
            <p className="md:text-xl text-gray-600">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-6 md:h-10"
              >
                <span className="sm:text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartnerships;
