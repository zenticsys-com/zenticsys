import ContactInformation from "./_components/ContactInformation";
import OurProcess from "./_components/OurProcess";
import QuickCallOption from "./_components/QuickCallOption";
import ContactForm from "./_partials/ContactForm";
import FAQSection from "./_partials/FAQSection";

import ScheduleHeroSection from "./_partials/ScheduleHeroSection";

export function SchedulePage() {
  return (
    <div>
      <ScheduleHeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInformation />
            <OurProcess />
            <QuickCallOption />
          </div>
        </div>
      </div>

      <FAQSection />
    </div>
  );
}
export default SchedulePage;
