"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const AutomotiveSlider = () => {
  const processData = [
    {
      number: "01",
      title: "Business & Requirement Analysis",
      description:
        "Understanding business goals, requirements, and project scope.",
    },
    {
      number: "02",
      title: "Automotive Market & Competitor Research",
      description: "Researching automotive trends and analyzing competitors.",
    },
    {
      number: "03",
      title: "Website Structure & Sitemap Planning",
      description: "Planning website structure and navigation flow.",
    },
    {
      number: "04",
      title: "Wireframing & Layout Architecture",
      description:
        "Creating wireframes and layout architecture for the website.",
    },
    {
      number: "05",
      title: "Automotive UI/UX Interface Design",
      description: "Designing user-friendly and visually appealing interfaces.",
    },
    {
      number: "06",
      title: "Responsive Website Design and Development",
      description: "Building responsive and scalable automotive websites.",
    },
    {
      number: "07",
      title: "Vehicle Inventory & Feature Integration",
      description: "Integrating vehicle listings and dynamic features.",
    },
    {
      number: "08",
      title: "Quality Assurance & Cross-Device Testing",
      description: "Ensuring performance across devices and browsers.",
    },
    {
      number: "09",
      title: "Website Launch & Deployment",
      description: "Deploying the website and making it live.",
    },
  ];
  const sliderRef = useRef<Slider | null>(null);
  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    rtl: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-12 pb-6">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-4xl mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Automotive Web Design Workflow
          </h2>
          <p className="text-lg text-gray-600">
            We deliver Title: What’s included in Custom Website Design Service
            Package digital platforms engineered for scalability, security, and
            measurable business growth.
          </p>
        </div>
        <Slider ref={sliderRef} {...settings} focusOnSelect={true}>
          {processData.map((item, index) => (
            <div key={index} className="p-2">
              <div className="bg-white p-6 shadow-md h-full min-h-80">
                <div className="text-4xl font-bold text-gray-800">
                  {item.number}
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex gap-3 mt-2 justify-center">
          <button
            onClick={() => handlePrevious()}
            className="bg-primary transition duration-300 hover:bg-green-600 font-semibold text-white  cursor-pointer rounded-full"
          >
            <FaCircleArrowLeft className="text-3xl p-1" />
          </button>

          <button
            onClick={() => handleNext()}
            className="bg-primary transition duration-300 hover:bg-green-600 font-semibold text-white  cursor-pointer rounded-full"
          >
            <FaCircleArrowRight className="text-3xl p-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutomotiveSlider;
