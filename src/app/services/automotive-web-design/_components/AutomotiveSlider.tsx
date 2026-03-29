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
      description:
        "Track marketing results and optimize campaigns continuously.",
    },

    {
      number: "07",
      title: "Performance Tracking",
      description:
        "Track marketing results and optimize campaigns continuously.",
    },
    {
      number: "08",
      title: "Performance Tracking",
      description:
        "Track marketing results and optimize campaigns continuously.",
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
