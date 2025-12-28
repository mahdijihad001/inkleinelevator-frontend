import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Our Story
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-base md:text-lg">
            In-Klein Elevators was founded in 2022 by Rachel Klein, a 15-year veteran of the elevator industry. After years of witnessing the inefficiencies, 
            lack of transparency, and frustration on both sides of the elevator services marketplace, Rachel knew there had to be a better way.
          </p>
          
          <p className="text-base md:text-lg">
            Property managers struggled to find qualified contractors, often relying on word-of-mouth referrals or outdated directories. Meanwhile, licensed 
            elevator companies found it difficult to discover new project opportunities and compete fairly for work. The industry needed a modern, 
            transparent platform that could connect these two sides efficiently.
          </p>
          
          <p className="text-base md:text-lg">
            In-Klein Elevators was built from the ground up with deep industry knowledge and modern technology. We understand the unique requirements 
            of elevator work—the critical importance of licensing and certifications, ASME A17.1 compliance, NYC DOB regulations, and the 24/7 nature of 
            building operations.
          </p>
          
          <p className="text-base md:text-lg">
            Today, we're proud to be the leading marketplace for elevator services in the New York metropolitan area, connecting hundreds of building 
            owners with licensed contractors for expert service from emergency repairs to multi-million dollar modernizations. Our platform has facilitated 
            over $120 million in elevator projects, and we're just getting started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;