import AboutBanner from "./About/AboutBanner"
import ChooseJourney from "./HowItWorks/Journey"
import ReadyGetStarted from "./HowItWorks/ReadyGetStarted"
import WhyChooseElevators from "./HowItWorks/WhyChooseElevators"

const HoeItWorks = () => {
    return (
        <>
            <AboutBanner title={"How In-Klein Elevators Works"} description="Connecting elevator service requesters with licensed contractors has never been easier. Our streamlined platform makes it simple to post jobs, receive bids, and complete projects." />
            <ChooseJourney />
            <WhyChooseElevators />
            <ReadyGetStarted />
        </>
    )
}

export default HoeItWorks