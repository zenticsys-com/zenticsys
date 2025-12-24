"use client";

import { useState } from "react";
// import NextLink from "next/link";
import CareerHerroSection from "@/app/career/_partials/CareerHerroSection";
import OpenPositions from "./_components/OpenPositions";
import CompanyCulture from "./_partials/CompanyCulture";
import WhyWorkWithOus from "./_partials/WhyWorkWithOus";

const CareerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobOpenings = [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $160k",
      description:
        "We are looking for an experienced full stack developer to join our engineering team and help build scalable web applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Experience with agile development methodologies",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      id: "2",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $140k",
      description:
        "Join our DevOps team to help automate, scale, and secure our infrastructure and deployment processes.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience with containerization and orchestration",
        "Strong knowledge of CI/CD pipelines and automation tools",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Familiarity with monitoring and logging tools",
      ],
      technologies: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Prometheus",
      ],
    },
    {
      id: "3",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90k - $120k",
      description:
        "Create intuitive and engaging user experiences for our software products and client projects.",
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "4+ years of experience in UI/UX design",
        "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
        "Strong portfolio demonstrating user-centered design process",
        "Experience with design systems and component libraries",
      ],
      technologies: [
        "Figma",
        "Sketch",
        "Adobe Creative Suite",
        "Principle",
        "InVision",
      ],
    },
    {
      id: "4",
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110k - $150k",
      description:
        "Help our clients unlock insights from their data using advanced analytics and machine learning techniques.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years of experience in data science and machine learning",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning frameworks and libraries",
        "Strong communication skills for presenting findings to stakeholders",
      ],
      technologies: ["Python", "R", "TensorFlow", "PyTorch", "SQL"],
    },
    {
      id: "5",
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "4+ years",
      salary: "$105k - $135k",
      description:
        "Develop high-quality mobile applications for iOS and Android platforms using modern development frameworks.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of mobile app development experience",
        "Experience with React Native or Flutter",
        "Knowledge of native iOS/Android development",
        "Understanding of mobile app deployment and distribution",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    },
    {
      id: "6",
      title: "Project Manager",
      department: "Project Management",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "5+ years",
      salary: "$95k - $125k",
      description:
        "Lead cross-functional teams to deliver successful software projects on time and within budget.",
      requirements: [
        "Bachelor's degree in Business, Project Management, or related field",
        "5+ years of project management experience in software development",
        "PMP or Agile certification preferred",
        "Strong leadership and communication skills",
        "Experience with project management tools and methodologies",
      ],
      technologies: [
        "Jira",
        "Confluence",
        "Microsoft Project",
        "Slack",
        "Agile/Scrum",
      ],
    },
  ];

  const departments = [
    "All",
    "Engineering",
    "Design",
    "Data & Analytics",
    "Project Management",
  ];
  const locations = [
    "All",
    "Remote",
    "San Francisco",
    "Austin",
    "New York",
    "Boston",
    "Seattle",
    "Chicago",
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "All" || job.location.includes(selectedLocation);

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <CareerHerroSection />
      <WhyWorkWithOus />
      <OpenPositions />
      <CompanyCulture />

      {/* Call to Action */}
      <section className="py-20 bg-[#ef3d23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send
            us your resume and let us know how you'd like to contribute to our
            mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              className="bg-white text-[#ef3d23] hover:bg-gray-100"
            >
              Send Your Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ef3d23]"
              asChild
            >
              <NextLink href="/about">Learn More About Us</NextLink>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CareerPage;
