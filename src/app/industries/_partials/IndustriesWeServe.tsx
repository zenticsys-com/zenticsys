import Industries from "../_components/Industries";

const IndustriesWeServe = () => {
  return (
    <div>
      <section className="bg-gradient-to from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industries <span className="text-primary">We Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized software solutions across diverse industries. We
              understand the unique challenges and requirements of different
              sectors, delivering tailored solutions that drive results.
            </p>
          </div>
        </div>
      </section>
      <Industries />
    </div>
  );
};

export default IndustriesWeServe;
