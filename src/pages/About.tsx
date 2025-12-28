import AboutBanner from "./About/AboutBanner";
import OurStory from "./About/AboutStory";
import AboutStoryCard from "./About/AboutStoryCard";
import ContactSection from "./About/ContactSection";
import PrinciplesSection from "./About/CoreValues";
import MissionVisionCards from "./About/MissionVisionCards";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutBanner title={"About In-Klein Elevators"} description={"We're modernizing how building owners and elevator contractors connect, making it easier to complete critical elevator projects safely, efficiently, and transparently."} />
      <OurStory />
      <AboutStoryCard />
      <MissionVisionCards />
      <PrinciplesSection />
      <ContactSection />
    </div>
  );
};

export default About;
