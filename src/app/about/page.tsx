import AboutHeroSection from "@/app/about/_partials/AboutHeroSection";
import CompanyStatus from "@/app/about/_partials/CompanyStatus";
import JoinOurTeam from "@/app/about/_partials/JoinOurTeam";
import LeadershipTeam from "@/app/about/_partials/LeadershipTeam";
import MissionAndVision from "@/app/about/_partials/MissionAndVision";
import OurStory from "@/app/about/_partials/OurStory";
import OurValues from "@/app/about/_partials/OurValues";
import WhyChooseZenticsys from "@/app/about/_partials/WhyChooseZenticsys";
const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <CompanyStatus />
      <MissionAndVision />
      <OurStory />
      <LeadershipTeam />
      <OurValues />
      <WhyChooseZenticsys />
      <JoinOurTeam />
    </div>
  );
};
export default AboutPage;
