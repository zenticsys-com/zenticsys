const CallToAction = () => {
  return (
    <section className="py-20 bg-[#ef3d23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Don't See the Right Position?
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Send
          us your resume and let us know how you'd like to contribute to our
          mission.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button
              size="lg"
              className="bg-white text-[#ef3d23] hover:bg-gray-100"
            >
              Send Your Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ef3d23]"
              asChild
            >
              <NextLink href="/about">Learn More About Us</NextLink>
            </Button> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
