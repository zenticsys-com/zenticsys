"use client";

import IndustriesWeServe from "@/app/industries/_partials/IndustriesWeServe";
import { Button, Card, CardContent, Chip, Rating } from "@mui/material";
import NextLink from "next/link";
import { LuCar as Car, LuCircleCheck as CheckCircle } from "react-icons/lu";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import AutomotiveIndustrySolutions from "@/app/industries/_partials/AutomotiveIndustrySolutions";

export function IndustriesPage() {
  // const automotiveDetails = {
  //   title: "Automotive Industry Solutions",
  //   subtitle: "Driving Innovation in Connected Mobility",
  //   description:
  //     "The automotive industry is undergoing a digital transformation with connected vehicles, autonomous driving, and smart mobility solutions. We help automotive companies leverage technology to create safer, more efficient, and more connected transportation experiences.",
  //   image:
  //     "https://images.unsplash.com/photo-1603090067590-a9a0f0fa6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg4ODc4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   solutions: [
  //     {
  //       title: "Connected Vehicle Platforms",
  //       description:
  //         "End-to-end platforms for vehicle connectivity, remote monitoring, and over-the-air updates.",
  //       benefits: [
  //         "Real-time vehicle diagnostics",
  //         "Remote software updates",
  //         "Predictive maintenance",
  //         "Enhanced safety features",
  //       ],
  //     },
  //     {
  //       title: "Fleet Management Systems",
  //       description:
  //         "Comprehensive fleet management solutions for commercial and enterprise vehicle operations.",
  //       benefits: [
  //         "Route optimization",
  //         "Driver behavior monitoring",
  //         "Fuel efficiency tracking",
  //         "Maintenance scheduling",
  //       ],
  //     },
  //     {
  //       title: "Autonomous Driving Support",
  //       description:
  //         "Advanced driver assistance systems and autonomous vehicle technology integration.",
  //       benefits: [
  //         "Sensor data processing",
  //         "Machine learning algorithms",
  //         "Safety validation",
  //         "Regulatory compliance",
  //       ],
  //     },
  //   ],
  // };

  const testimonials = [
    {
      name: "Michael Roberts",
      position: "CTO, AutoTech Solutions",
      company: "Automotive",
      content:
        "Zenticsys helped us build a connected car platform that has revolutionized how we interact with our customers. The platform now serves over 100,000 vehicles.",
      rating: 5,
    },
    {
      name: "Dr. Sarah Chen",
      position: "Director of Innovation, HealthFirst",
      company: "Healthcare",
      content:
        "The healthcare management system they developed has significantly improved our operational efficiency and patient satisfaction scores.",
      rating: 5,
    },
    {
      name: "James Wilson",
      position: "VP Technology, RetailMax",
      company: "E-commerce",
      content:
        "Our new e-commerce platform has increased conversion rates by 75% and mobile sales by 60%. Exceptional work from the Zenticsys team.",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      position: "Head of Digital, EduTech Institute",
      company: "Education",
      content:
        "The learning management system has transformed our educational delivery, enabling us to serve 50,000+ students effectively.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <IndustriesWeServe />

      {/* Featured Industry - Automotive */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-primary mr-3" />
                <Chip
                  label="Featured Industry"
                  variant="outlined"
                  className="border-primary text-primary"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {automotiveDetails.title}
              </h2>
              <h3 className="text-xl text-primary font-semibold mb-6">
                {automotiveDetails.subtitle}
              </h3>
              <p className="text-lg text-gray-600">
                {automotiveDetails.description}
              </p>
            </div>
            <div>
              <ImageWithFallback
                src={automotiveDetails.image}
                alt="Automotive technology"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automotiveDetails.solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2 " />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <AutomotiveIndustrySolutions />

      {/* Client Success Stories by Industry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from clients across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      className="text-yellow-400"
                    />
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}
                      </div>
                    </div>
                    <Chip
                      label={testimonial.company}
                      variant="outlined"
                      className="border-primary text-primary"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don not See Your Industry?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We work with businesses across all industries. Our adaptable
            approach allows us to understand your unique challenges and deliver
            customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              component={NextLink}
              href="/schedule"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Discuss Your Industry Needs
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={NextLink}
              href="/services"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
