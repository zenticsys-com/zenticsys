import { Card, CardContent, Chip, Rating } from "@mui/material";

const ClientSuccessStories = () => {
  const testimonials = [
    {
      name: "Michael Roberts",
      position: "CTO, AutoTech Solutions",
      company: "Automotive",
      content:
        "Zenticsys helped us build a connected car platform that has revolutionized how we interact with our customers. The platform now serves over 100,000 vehicles.",
      rating: 4,
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
      rating: 4,
    },
  ];

  return (
    <section className="py-12 bg-white">
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
  );
};

export default ClientSuccessStories;
