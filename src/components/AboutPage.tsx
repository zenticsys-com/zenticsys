"use client";

import { Button, Card, CardContent, Chip } from "@mui/material";
import NextLink from "next/link";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  LuUsers as Users,
  LuTarget as Target,
  LuAward as Award,
  LuHeart as Heart,
  LuShield as Shield,
  LuZap as Zap,
  LuGlobe as Globe,
  LuCircleCheck as CheckCircle,
  LuArrowRight as ArrowRight,
  LuCalendar as Calendar,
  LuTrendingUp as TrendingUp,
} from "react-icons/lu";
import AboutHerroSection from "@/app/about/_partials/AboutHerroSection";
import CompanyStatus from "@/app/about/_partials/CompanyStatus";
import MissionAndVision from "@/app/about/_partials/MissionAndVision";

export function AboutPage() {
  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "Zenticsys was established with a vision to deliver innovative software solutions.",
    },
    {
      year: "2016",
      title: "First Major Client",
      description:
        "Secured our first enterprise client and delivered a successful healthcare platform.",
    },
    {
      year: "2018",
      title: "Team Expansion",
      description:
        "Grew our team to 25 developers and expanded into mobile app development.",
    },
    {
      year: "2020",
      title: "Cloud Specialization",
      description:
        "Became certified cloud partners with AWS, Azure, and Google Cloud.",
    },
    {
      year: "2022",
      title: "AI & ML Focus",
      description:
        "Launched our AI/ML division and delivered advanced analytics solutions.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as a leading software development company with 200+ successful projects.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in software development and business strategy.",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "Technology expert specializing in cloud architecture and enterprise solutions.",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Development",
      bio: "Full-stack development expert with expertise in modern web and mobile technologies.",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Emily Watson",
      position: "Head of Design",
      bio: "UX/UI design specialist creating intuitive and engaging user experiences.",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation First",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client Partnership",
      description:
        "We believe in building long-term partnerships with our clients, understanding their business deeply to deliver maximum value.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description:
        "Every project we deliver meets the highest standards of quality, performance, and reliability through rigorous testing and review processes.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description:
        "Our success is built on the foundation of teamwork, open communication, and shared commitment to achieving exceptional results.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security & Trust",
      description:
        "We prioritize security and data protection in every solution we build, ensuring our clients can trust us with their most sensitive information.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Agile Delivery",
      description:
        "We use agile methodologies to deliver solutions quickly and efficiently while maintaining flexibility to adapt to changing requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      <AboutHerroSection />
      <CompanyStatus />
      <MissionAndVision />

      {/* Mission & Vision */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Mission & Vision
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Mission
                </h3>
                <p className="text-lg text-gray-600">
                  To empower businesses with innovative software solutions that
                  drive digital transformation, enhance operational efficiency,
                  and create lasting competitive advantages in an ever-evolving
                  technological landscape.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Vision
                </h3>
                <p className="text-lg text-gray-600">
                  To be the global leader in software innovation, recognized for
                  our ability to transform complex business challenges into
                  elegant, scalable solutions that shape the future of
                  technology.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Client-centric approach to software development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>
                    Commitment to innovation and continuous improvement
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>
                    Focus on long-term partnerships and mutual success
                  </span>
                </div>
              </div>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTAwMDE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office workspace"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">
              A decade of innovation and growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-primary mr-2" />
                          <Chip
                            label={item.year}
                            variant="outlined"
                            className="border-primary text-primary"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our vision forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zenticsys?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical excellence with business acumen to deliver
                solutions that not only meet your current needs but also
                position you for future success.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-600">
                      Over 200 successful projects across diverse industries
                      with consistently high client satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Global Expertise
                    </h3>
                    <p className="text-gray-600">
                      Our team brings international experience and best
                      practices to every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Agile Approach
                    </h3>
                    <p className="text-gray-600">
                      Fast, flexible delivery with continuous feedback and
                      iteration throughout the development process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1ODkyMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team collaboration"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your business with innovative
            software or join our team of experts, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              component={NextLink}
              href="/schedule"
              endIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Start Your Project
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={NextLink}
              href="/career"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
