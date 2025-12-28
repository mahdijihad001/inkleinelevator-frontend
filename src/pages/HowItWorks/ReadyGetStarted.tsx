import React from 'react';

const ReadyGetStarted: React.FC = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center py-[150px]">
      <div className="max-w-[1500px] w-full bg-[#0a1628] rounded-2xl px-12 py-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-3">
          Ready to Get Started?
        </h2>
        
        {/* Description */}
        <p className="text-gray-300 text-sm mb-8">
          Join thousands of building owners and elevator professionals using In-Klein Elevators.
        </p>
        
        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button className="px-6 py-2.5 bg-white text-gray-900 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
            Create Free Account
          </button>
          <button className="px-6 py-2.5 bg-transparent text-white border border-white rounded font-medium text-sm hover:bg-white hover:text-gray-900 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyGetStarted;