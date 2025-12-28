import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVisionCards: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center py-20">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Our Mission and Vision
          </h1>
          <p className="text-gray-500 text-sm">
            The principles that guide everything we do
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To create the most trusted and efficient marketplace for elevator services, connecting every major stakeholder so that building owners can find the right service provider for their elevator, can make quality decisions that are best for their business—all while maintaining the highest standards of safety, quality, and compliance.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Eye className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the national standard for elevator service procurement, extending to every major stakeholder state-by-state and capturing a majority market share, so that every building owner can easily find qualified elevator contractors, and every licensed elevator professional has access to quality project opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionCards;