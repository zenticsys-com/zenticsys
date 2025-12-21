import { Card, CardContent, Rating } from "@mui/material";
const ClientReviews = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      content:
        "Zenticsys delivered an exceptional solution that transformed our operations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CEO, InnovateLab",
      content:
        "Outstanding team with deep technical expertise and excellent communication.",
      rating: 4,
    },
    {
      name: "Emily Rodriguez",
      position: "VP Engineering, DataFlow",
      content:
        "Professional, reliable, and delivered results beyond our expectations.",
      rating: 5,
    },
    {
      name: "Ahad Saim",
      position: "VP Engineering, DataFlow",
      content:
        "Professional, reliable, and delivered results beyond our expectations.",
      rating: 4,
    },
    {
      name: "Rayhan khan",
      position: "VP Engineering, DataFlow",
      content:
        "Professional, reliable, and delivered results beyond our expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-600">
            What our clients say about working with us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
