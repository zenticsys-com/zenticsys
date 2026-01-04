import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const LeadershipTeam = () => {
  /**- Data -**/
  const team = [
    {
      name: "NK Rafi",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in software development and business strategy.",
      image: "/assets/images/NK_Rafi (1).jpg",
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

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the experts driving our vision forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-auto">
                <Image
                  src={member.image}
                  alt="Modern office workspace"
                  width={570}
                  height={384}
                  className="w-full  aspect-5/6 shadow-md"
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
  );
};

export default LeadershipTeam;
