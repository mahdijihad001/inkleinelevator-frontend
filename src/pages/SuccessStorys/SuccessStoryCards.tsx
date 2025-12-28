import React from 'react';
import { MapPin, DollarSign, Star, CheckCircle } from 'lucide-react';

const SuccessStoryCard: React.FC = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      tags: ["Commercial", "Modernization", "Large Project"],
      title: "Manhattan Office Tower Modernization",
      location: "123 Main Street - New York - 10001",
      budget: "$842,500",
      description: '"We needed to modernize 8 elevators in our 23-story office building without disrupting tenant operations. In-Klein Elevators connected us with five licensed contractors, who presented a detailed project proposal. The project came in under budget and ahead of schedule. The new equipment monitors real-time faults saving us 30% (approx) on ongoing maintenance!!"',
      keyResults: [
        'Avg bid submission was 1 hour 45 min',
        'Completed 2 weeks ahead of schedule',
        '34% Faster tenant turnaround',
        'Energy consumption reduced by 23%',
        'All property issues built on a 24hr timeframe',
        'Completion enhanced tenancy by 34%'
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      tags: ["Residential", "Repair", "Emergency"],
      title: "Luxury Apartment Complex Repair",
      location: "456 Park Avenue - New York - 10022",
      budget: "$245,000",
      description: '"Our residential building had a critical elevator failure that needed immediate attention. In-Klein Elevators quickly connected us with certified professionals who responded within hours. The repair was completed efficiently with minimal disruption to our residents. Their transparent pricing and quality work exceeded our expectations."',
      keyResults: [
        'Emergency response within 3 hours',
        'Repair completed in 48 hours',
        '15% Cost savings vs initial quote',
        'Zero tenant complaints during work',
        'Extended warranty included',
        'Preventive maintenance plan established'
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      tags: ["Healthcare", "Installation", "New Construction"],
      title: "Medical Center New Installation",
      location: "789 Health Blvd - Brooklyn - 11201",
      budget: "$1,250,000",
      description: '"Installing elevators in our new medical facility required precision and compliance with healthcare regulations. In-Klein Elevators matched us with specialized contractors experienced in medical environments. The installation met all safety standards and was completed on time, allowing us to open our facility as scheduled."',
      keyResults: [
        'All healthcare compliance met',
        'Installation ahead of schedule by 1 week',
        'Zero safety incidents during construction',
        'Staff training included in package',
        '99.9% uptime guarantee secured',
        'Maintenance contract negotiated at 12% savings'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8">
      <div className="max-w-[1500px] mx-auto space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white text-gray-900 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side - Content */}
              <div>
                {/* Header with Stars */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                    SUCCESS STORY
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>

                {/* Location and Budget */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Project Value: {project.budget}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Results */}
                <div className='shadow p-4 rounded-2xl'>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                    <h3 className="text-base font-semibold text-gray-900">Key Results</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyResults.map((result, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoryCard;