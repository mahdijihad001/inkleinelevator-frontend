import React from 'react';
import { CheckCircle, Zap, ShieldCheck, TrendingDown } from 'lucide-react';

const WhyChooseElevators: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Verified Professionals',
      description: 'All contractors are licensed, insured, and background-checked.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Response',
      description: 'Receive qualified bids within 24-48 hours of posting.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'Make B2B / contractor tech from insurance and recordable.'
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Competitive Pricing',
      description: 'Multiple bids ensure you get the best value for your project.'
    }
  ];

  return (
    <div className="bg-[#0a1628] flex items-center justify-center px-[40px] py-[120px]">
      <div className="max-w-[1300px] w-full bg-white rounded-3xl px-8 py-[80px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Why Choose In-Klein Elevators?
          </h1>
          <p className="text-gray-600 text-sm">
            The most trusted platform for elevator projects in the New York metropolitan area
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center shadow p-4 rounded-2xl">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0a1628] text-white rounded-xl mb-4">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseElevators;