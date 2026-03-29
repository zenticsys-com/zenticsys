const businessInformations = [
  {
    number: "01",
    title: "Industry Research",
    description:
      "We conduct research on your business, target market and competitors to ensure your website stands out.",
  },
  {
    number: "02",
    title: "Marketing Strategy Review",
    description:
      "We review your marketing channels and sales process to improve lead generation.",
  },
  {
    number: "03",
    title: "SEO Research & Planning",
    description:
      "We perform SEO audit and keyword research to optimize your content.",
  },
  {
    number: "04",
    title: "Conversion Strategy",
    description:
      "Convert visitors into paying customers using strong call-to-actions.",
  },
  {
    number: "05",
    title: "Content Optimization",
    description:
      "Improve your website content structure and keyword targeting.",
  },
  {
    number: "06",
    title: "Performance Tracking",
    description: "Track marketing results and optimize campaigns continuously.",
  },
  {
    number: "07",
    title: "Performance Tracking",
    description: "Track marketing results and optimize campaigns continuously.",
  },
  {
    number: "08",
    title: "Performance Tracking",
    description: "Track marketing results and optimize campaigns continuously.",
  },
  {
    number: "09",
    title: "Performance Tracking",
    description: "Track marketing results and optimize campaigns continuously.",
  },
];
const TypesOfAutomotiveBusinesses = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-230 mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Types of Automotive Businesses
          </h2>
          <p className="text-lg text-gray-600">
            We deliver Title: What’s included in Custom Website Design Service
            Package digital platforms engineered for scalability, security, and
            measurable business growth.
          </p>
        </div>
        <div className="grid grid-cols-12">
          {businessInformations.map((businessInformation, index) => {
            const isThirdItem = (index + 1) % 3 === 0;
            const isLastThree = index >= businessInformations.length - 3;
            return (
              <div
                key={index}
                className={`col-span-12 md:col-span-6 xl:col-span-4 ${
                  isThirdItem ? "" : "border-r-2 border-r-primary"
                } ${isLastThree ? "" : "border-b-2 border-b-primary"}`}
              >
                <div className="bg-white p-6 h-full min-h-70">
                  <div className="text-4xl font-bold text-gray-800">
                    {businessInformation.number}
                  </div>
                  <h3 className="text-lg font-semibold mt-2">
                    {businessInformation.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {businessInformation.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TypesOfAutomotiveBusinesses;
