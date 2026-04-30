const businessInformations = [
  {
    number: "01",
    title: "Car Dealerships",
    description: "Businesses that sell new or used vehicles to customers.",
  },
  {
    number: "02",
    title: "Car Rental Companies",
    description:
      "Services that provide vehicles for short-term or long-term rental.",
  },
  {
    number: "03",
    title: "Auto Repair Shops",
    description: "Workshops that repair and maintain vehicles.",
  },
  {
    number: "04",
    title: "Automotive Service Centers",
    description: "Centers offering full vehicle servicing and maintenance.",
  },
  {
    number: "05",
    title: "Auto Parts Stores",
    description: "Shops selling vehicle parts and components.",
  },
  {
    number: "06",
    title: "Auto Body & Collision Repair Shops",
    description: "Repair centers for accident-damaged vehicles.",
  },
  {
    number: "07",
    title: "Car Accessories Shops",
    description: "Stores offering car accessories and add-ons.",
  },
  {
    number: "08",
    title: "Vehicle Inspection Centers",
    description: "Facilities for checking vehicle safety and compliance.",
  },
  {
    number: "09",
    title: "Car Financing & Leasing Companies",
    description: "Companies providing vehicle financing and leasing options.",
  },
];
const TypesOfAutomotiveBusinesses = () => {
  return (
<<<<<<< HEAD
    <div className="w-full h-screen flex  bg-blue-400 justify-center items-center">
      {/* <AutomotiveSlider /> */}
    </div>
=======
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-4xl mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Types of Automotive Businesses
          </h2>
          <p className="text-lg text-gray-600">
            We deliver Title: What’s included in Custom Website Design Service
            Package digital platforms engineered for scalability, security, and
            measurable business growth.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-0">
          {businessInformations.map((businessInformation, index) => {
            const isThreeItemBorderRight = (index + 1) % 3 === 0;
            const isLastThreeItemsBorderBottom =
              index >= businessInformations.length - 3;
            const isTwoItemBorderRight = (index + 1) % 2 === 0;
            const isLastTwoItemsBorderBottom =
              index >= businessInformations.length - 1;
            return (
              <div
                key={index}
                className={`col-span-12 md:col-span-6 xl:col-span-4 
                  ${isThreeItemBorderRight ? "" : "xl:border-r-2 border-r-primary"}
                   ${isLastThreeItemsBorderBottom ? "" : "xl:border-b-2 border-b-primary"} 
                 ${isTwoItemBorderRight ? "" : "md:border-r-2 border-r-primary xl:border-r-0"}
                   ${isLastTwoItemsBorderBottom ? "" : "border-b-2 border-b-primary xl:border-b-0"} 
                `}
              >
                <div className="bg-white p-6 h-full min-h-70 shadow-md md:shadow-none">
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
>>>>>>> 0ebb9fd33c92611752778b4172ab8bf06636e5f6
  );
};

export default TypesOfAutomotiveBusinesses;
