"use client";

import Button from "@/app/_components/Button";
import NextLink from "next/link";
import { useState } from "react";
import {
  LuArrowRight as ArrowRight,
  LuCircleCheck as CheckCircle,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuMessageSquare as MessageSquare,
  LuPhone as Phone,
  LuTarget as Target,
  LuUsers as Users,
  LuZap as Zap,
} from "react-icons/lu";
// import { Card, CardContent } from "./ui/card";
// import { Checkbox } from "./ui/checkbox";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// FAQ Section Component
function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a typical consultation take?",
      answer:
        "Initial consultations usually last 30-60 minutes, depending on project complexity.",
    },
    {
      question: "Is the consultation free?",
      answer:
        "Yes, we offer free initial consultations to understand your needs and explore how we can help.",
    },
    {
      question: "What happens after the consultation?",
      answer:
        "We'll provide a detailed proposal with timeline, costs, and next steps within 48 hours.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations.",
    },
    {
      question: "What information should I prepare for the consultation?",
      answer:
        "Come prepared with your project goals, timeline, budget range, and any existing documentation or requirements.",
    },
    {
      question: "Can we schedule follow-up meetings?",
      answer:
        "Yes, we're happy to schedule additional meetings as needed throughout the project planning and development process.",
    },
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-200"
          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <div
                className={`transform transition-transform duration-200 ${
                  expandedFaq === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`mt-4 transition-all duration-200 ease-in-out ${
                expandedFaq === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export function SchedulePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    agreeToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  const processSteps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#ef3d23]" />,
      title: "Initial Consultation",
      description:
        "We discuss your project requirements, goals, and challenges to understand your needs.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#ef3d23]" />,
      title: "Solution Design",
      description:
        "Our experts create a tailored solution proposal with timeline and cost estimates.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#ef3d23]" />,
      title: "Team Assembly",
      description:
        "We assign the right team members with the expertise needed for your project.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#ef3d23]" />,
      title: "Development & Delivery",
      description:
        "Agile development process with regular updates and transparent communication.",
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#ef3d23]" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9:00 AM - 6:00 PM PST",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#ef3d23]" />,
      title: "Email",
      details: "hello@zenticsys.com",
      description: "We respond within one business day.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#ef3d23]" />,
      title: "Office",
      details: "123 Tech Street, San Francisco, CA 94105",
      description: "Available for in-person meetings",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient from-gray-50 to-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your request and will get back to you within 24
            hours. One of our experts will reach out to schedule your
            consultation.
          </p>
          <div className="space-y-4">
            <Button
              // size="lg"
              className="bg-[#ef3d23] hover:bg-[#d63420] text-white"
              // asChild
            >
              <NextLink href="/">Return to Homepage</NextLink>
            </Button>
            <div className="text-gray-500">
              <p>Need immediate assistance? Call us at +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's <span className="text-[#ef3d23]">Talk</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with innovative software
              solutions? Schedule a free consultation with our experts to
              discuss your project and explore possibilities.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Schedule Your Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Your Position</Label>
                      <Input
                        id="position"
                        value={formData.position}
                        onChange={(e) =>
                          handleInputChange("position", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="mobile-app">Mobile App</SelectItem>
                          <SelectItem value="custom-software">
                            Custom Software
                          </SelectItem>
                          <SelectItem value="cloud-migration">
                            Cloud Migration
                          </SelectItem>
                          <SelectItem value="data-analytics">
                            Data Analytics
                          </SelectItem>
                          <SelectItem value="digital-transformation">
                            Digital Transformation
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-250k">
                            $100k - $250k
                          </SelectItem>
                          <SelectItem value="250k-500k">
                            $250k - $500k
                          </SelectItem>
                          <SelectItem value="over-500k">Over $500k</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleInputChange("timeline", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">
                            6-12 months
                          </SelectItem>
                          <SelectItem value="over-1-year">
                            Over 1 year
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToTerms", checked as boolean)
                      }
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms of Service and Privacy Policy *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    // size="lg"
                    disabled={!formData.agreeToTerms}
                    className="w-full bg-[#ef3d23] hover:bg-[#d63420] text-white"
                  >
                    Schedule Consultation{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Process */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {info.title}
                        </h4>
                        <p className="text-gray-900">{info.details}</p>
                        <p className="text-sm text-gray-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Our Process */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Our Process
                </h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="">{step.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Call Option */}
            <Card className="border-none shadow-lg bg-[#ef3d23] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Need to Talk Right Now?
                </h3>
                <p className="text-red-100 mb-4">
                  Have an urgent project or need immediate consultation? Give us
                  a call!
                </p>
                <Button
                  variant="outline"
                  className="w-full border-white text-[#ef3d23] md:text-white  md:hover:bg-white hover:text-[#ef3d23]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +88016 2940 3203
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQSection />
          </div>
        </div>
      </section>
    </div>
  );
}
export default SchedulePage;
