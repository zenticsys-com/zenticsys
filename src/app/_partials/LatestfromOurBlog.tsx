// import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import { default as Link } from "next/link";
import ZtsButton from "../_components/ZtButton";
import { Card, CardContent } from "@/components/ui/card";

const LatestfromOurBlog = () => {
  /**- Data -**/
  const blogPosts = [
    {
      title: "The Future of Software Development",
      excerpt:
        "Exploring emerging trends and technologies shaping the software industry.",
      date: "Dec 15, 2024",
      image: "/assets/images/group-photo.png",
    },
    {
      title: "Building Scalable Cloud Architecture",
      excerpt:
        "Best practices for designing and implementing scalable cloud solutions.",
      date: "Dec 10, 2024",
      image: "/assets/images/photo_1.png",
    },
    {
      title: "AI and Machine Learning in Business",
      excerpt:
        "How artificial intelligence is revolutionizing business operations.",
      date: "Dec 5, 2024",
      image: "/assets/images/group-photo.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600">
            Insights, tips, and industry trends
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <Card key={index} className="h-full overflow-hidden">
              <div className="w-full h-auto ">
                <Image
                  src={post.image}
                  alt="image"
                  width={570}
                  height={380}
                  className="w-full h-auto"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex justify-self-start">
                  <Link href="/blog">
                    <ZtsButton
                      text="Read More"
                      className="border-none text-primary"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12  flex justify-center">
          <Link href="/schedule">
            <ZtsButton
              text="Schedule a Call Today"
              className="border-primary text-primary hover:bg-primary hover:border-transparent hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestfromOurBlog;
