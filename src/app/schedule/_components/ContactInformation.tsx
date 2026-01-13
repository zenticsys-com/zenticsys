"use client";

import {
  LuMail as Mail,
  LuMapPin as MapPin,
  LuPhone as Phone,
} from "react-icons/lu";
import { Card, CardContent } from "@/components/ui/card";

const ContactInformation = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: "+880 1629403203",
      description: "Sun-Thu 9:00 AM - 6:00 PM PST",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: "zenticsys@gmail.com",
      description: "We respond within one business day.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office",
      details: "Rupnagar R/A , Mirpur, Dhaka-1216 ",
      description: "Available for in-person meetings",
    },
  ];
  return (
    <div>
      <Card className="border-none hover:shadow-lg shadow-primary/10 shadow-xs">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="">{info.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-900">{info.title}</h4>
                  <p className="text-gray-900">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInformation;
