import React from 'react';

interface ElevatorLandingPageProps {
  statNumber?: string;
  statLabel?: string;
  aboutLabel?: string;
  mainHeading?: string;
  description?: string;
  buttonText?: string;
  image1Url?: string;
  image2Url?: string;
}

const ElevatorLandingPage: React.FC<ElevatorLandingPageProps> = ({

  aboutLabel = "About Us",
  mainHeading = "Elevating the Elevator Industry",
  description = "At In-Klein Elevator, our vision is to transform the way elevator companies grow their business by using the elevator industry's first bidding platform built exclusively for them. We're here to make job bidding faster, easier, and more accessible whether you're a large or a small company looking to expand and get for jobs. Our software opens the door to real-time opportunities by allowing contractors to post jobs and companies to bid within a 72-hour window, giving everyone a fair shot at winning new jobs. We believe elevator companies deserve a smarter way to scale and In-Klein is the tool to make that happen.",
  buttonText = "Get Started as a Requester"
}) => {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 min-h-screen items-center py-16 sm:py-12 lg:py-0">
          {/* Left Section - Images */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1 mt-16 md:mt-0">
            {/* Stat Text - Rotated Vertically - Hidden on mobile, visible on md+ */}
            <img src="/aboutContent.png" alt="" />
          </div>

          {/* Right Section - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            {/* About Label with Arrow */}
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4 sm:mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="tracking-wide">{aboutLabel}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-gray-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              {mainHeading}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 sm:mb-8 max-w-[600px]">
              {description}
            </p>

            {/* CTA Button */}
            {/* CTA Button */}
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1a2332] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-md text-sm sm:text-base font-semibold hover:bg-[#2a3544] transition-all duration-500 ease-out w-full sm:w-fit shadow-sm hover:shadow-xl hover:scale-[1.02] transform"
            >
              <span>{buttonText}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 ease-out group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorLandingPage;