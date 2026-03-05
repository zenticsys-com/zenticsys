import Image from "next/image";

const CustomWebAccordion = () => {
  return (
    <section className="from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center">
          <h1 className="text-2xl  md:text-4xl font-bold text-gray-900 mb-6">
            Building Reliable
            <span className="text-primary"> Custom </span>
            Software Solution
          </h1>

          <p className="text-gray-600 mb-8 max-w-5xl mx-auto">
            We are a global software development company delivering custom
            software development services, SaaS platforms, web application
            development, and enterprise software solutions for growth-driven
            businesses.
          </p>
        </section>
        <section className="grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-7">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto autem alias facilis perferendis aperiam dignissimos
              nostrum, eveniet odit at deserunt quae, iure quisquam. Officiis ex
              porro, magni consectetur laudantium fugit ipsam et similique nam
              excepturi ipsa velit deleniti, quo eius, ab quidem eligendi sed.
              Non natus repudiandae fuga veniam totam, deleniti asperiores nisi
              distinctio nulla!
            </p>
          </div>
          <section className="col-span-12 md:col-span-5">
            <div className="w-full h-auto">
              <Image
                src={"/assets/images/photo_1.png"}
                alt="image"
                width={570}
                height={380}
                className="w-full h-auto shadow-lg"
              />
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default CustomWebAccordion;
