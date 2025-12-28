import React from 'react';
import { CheckCircle, Building2, Users, ThumbsUp } from 'lucide-react';

const WhyChooseStats: React.FC = () => {
  const stats = [
    {
      icon: <CheckCircle className="w-7 h-7" />,
      value: '2,500+',
      label: 'Projects Completed'
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      value: '$125M+',
      label: 'Total Project Value'
    },
    {
      icon: <Users className="w-7 h-7" />,
      value: '4.9/5',
      label: 'Average Rating'
    },
    {
      icon: <ThumbsUp className="w-7 h-7" />,
      value: '98%',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center px-8 py-[100px]">
      <div className="max-w-[1500px] w-full bg-[#0a1628] rounded-3xl px-10 py-[80px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Why Choose In-Klein Elevators?
          </h2>
          <p className="text-gray-300 text-sm">
            The most trusted platform for elevator projects in the New York metropolitan area
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0a1628] text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              
              {/* Value */}
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseStats;