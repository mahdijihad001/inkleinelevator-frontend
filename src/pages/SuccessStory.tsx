import AboutBanner from "./About/AboutBanner"
import SuccessStoryCard from "./SuccessStorys/SuccessStoryCards"
import WhyChooseStats from "./SuccessStorys/WhyChooseStats"

const Success = () => {
    return (
        <>
            <AboutBanner title="Success Stories" description="See how property managers, building owners, and contractors are achieving exceptional results through In-Klein Elevators. Real projects, real people, real success." />
            <WhyChooseStats />
            <SuccessStoryCard />
        </>
    )
}

export default Success