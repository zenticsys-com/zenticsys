"use client";

import Button from "@/app/_components/Button";
import { useState } from "react";
import {
  LuArrowRight as ArrowRight,
  LuCircleCheck as CheckCircle,
} from "react-icons/lu";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
const ContactForm = () => {
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
            <Link href={"/"}>
              <ZtsButton
                text="Return To Homepage"
                className="bg-primary hover:bg-primary-dark text-white"
              />
            </Link>
            <div className="text-gray-500">
              <p>Need immediate assistance? Call us at +88 01629-403203</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-2">
      <Card className="border-none hover:shadow-lg shadow-primary/10 shadow-xs">
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
                  className="mt-1.5 focus-visible:ring-transparent"
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
                  className="mt-1.5 focus-visible:ring-transparent"
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
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1.5 focus-visible:ring-transparent"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1.5 focus-visible:ring-transparent"
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
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="mt-1.5 focus-visible:ring-transparent"
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
                  className="mt-1.5 focus-visible:ring-transparent"
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
                  <SelectTrigger className="mt-1.5 focus-visible:ring-transparent">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
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
                  onValueChange={(value) => handleInputChange("budget", value)}
                >
                  <SelectTrigger className="mt-1.5 focus-visible:ring-transparent">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="under-50k">Under $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                    <SelectItem value="250k-500k">$250k - $500k</SelectItem>
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
                  <SelectTrigger className="mt-1.5 focus-visible:ring-transparent">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6-12-months">6-12 months</SelectItem>
                    <SelectItem value="over-1-year">Over 1 year</SelectItem>
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
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="mt-1.5 focus-visible:ring-transparent"
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
              className="w-full bg-prtext-primary hover:bg-[#d63420] text-white"
            >
              Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
