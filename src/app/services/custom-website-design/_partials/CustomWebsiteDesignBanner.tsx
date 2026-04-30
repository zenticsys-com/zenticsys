import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";

const CustomWebsiteDesignBanner = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/images/img_22.jpg')",
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <section className="py-24 bg-primary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let’s Build Your Next Custom Website
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto">
            Need an affordable website for a small business or a professional
            custom website, we build high-performing websites that attract
            customers, build trust, and support long-term growth. s? Let’s build
            modern digital experiences built to attract customers and grow
            revenue.
          </p>
          <div className="flex justify-center">
            <Link href="/schedule">
              <ZtsButton
                text="Schedule a Strategy Call"
                className="text-primary bg-white border-none hover:text-white hover:shadow-lg hover:shadow-primary-dark/50 hover:bg-primary-dark"
              />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CustomWebsiteDesignBanner;
