import Banner from "./LandingPage/Banner";
import ContactSection from "./LandingPage/ContactUs";
import HowItWorks from "./LandingPage/EleventorWorks";
import FAQSection from "./LandingPage/Faq";
import ElevatorLandingPage from "./LandingPage/LandingAbout";
import PricingSection from "./LandingPage/PricingSection";
import WhoItsFor from "./LandingPage/WhoItsFor";


const Home = () => {


  return (
    <div className="">
      <Banner />
      <ElevatorLandingPage />
      <HowItWorks />
      <WhoItsFor />
      <PricingSection />
      <ContactSection />
      <FAQSection />
    </div>

  );
};

export default Home;
