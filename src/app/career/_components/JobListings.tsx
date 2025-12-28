"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@mui/material";
import {
  LuCircleCheck as CheckCircle,
  LuClock as Clock,
  LuDollarSign as DollarSign,
  LuMapPin as MapPin,
  LuSearch as Search,
} from "react-icons/lu";
import { Badge } from "@/components/ui/badge";

const JobListings = () => {
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
    <div className="space-y-6">
      {filteredJobs.map((job) => (
        <Card
          key={job.id}
          className="border-none shadow-lg hover:shadow-xl transition-shadow"
        >
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge
                    variant="outline"
                    className="border-[#ef3d23] text-[#ef3d23]"
                  >
                    {job.department}
                  </Badge>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.experience}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-[#ef3d23] mr-2  mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col justify-between">
                <div></div>
                <Button className="bg-[#ef3d23] hover:bg-[#d63420] text-white w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default JobListings;
