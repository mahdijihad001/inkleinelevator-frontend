import React, { useState } from 'react';
import { Building2, Users, Briefcase, MessageSquare, FileText, DollarSign, CheckCircle, ClipboardList, Search, Star } from 'lucide-react';

const ChooseJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'need' | 'provide'>('need');

  const needServicesSteps = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Create Your Account',
      description: 'Sign up and complete a basic registration process to create your profile and tell us your elevator needs.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Post Your Elevator Job',
      description: 'Describe your project with details about scope, timeline, and budget, and specify technical requirements.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Receive Qualified Bids',
      description: 'Licensed elevator contractors review your job and submit competitive bids detailing costs at all levels.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Review & Communicate',
      description: 'Ask questions, request clarifications, and negotiate terms through our secure real-time messaging system.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Compare Bids',
      description: 'Check contractor ratings, proposal details, and pricing to choose. Use proprietary Compare price, experience, and estimated timeline instantly.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Select Your Contractor',
      description: 'Work with your selected contractor to complete the project. Track progress and manage payments through the platform.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Project Completion',
      description: 'Monitor progress, approve milestones, and finalize payment once the work is completed to your satisfaction.'
    }
  ];

  const provideServicesSteps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: 'Register as Contractor',
      description: 'Create your contractor profile, upload licenses, certifications, and showcase your expertise and past projects.'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Browse Available Jobs',
      description: 'Search and filter elevator service jobs that match your skills, location, and business capabilities.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Submit Your Proposals',
      description: 'Create detailed proposals with pricing, timeline, and approach. Highlight your experience and qualifications.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communicate with Clients',
      description: 'Answer client questions, provide clarifications, and negotiate project terms through our secure messaging system.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Win Projects',
      description: 'Get selected based on your competitive bids, reputation, and experience. Receive project details and agreements.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Complete & Get Paid',
      description: 'Execute the project professionally, update progress, and receive secure payments upon completion and approval.'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Build Your Reputation',
      description: 'Earn reviews and ratings from satisfied clients to grow your business and attract more high-quality projects.'
    }
  ];

  const currentSteps = activeTab === 'need' ? needServicesSteps : provideServicesSteps;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Choose Your Journey
          </h1>
          <p className="text-gray-600 text-sm">
            Whether you're looking for elevator services or providing them, our platform meets the process seamless.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveTab('need')}
            className={`px-6 py-2.5 rounded font-medium text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'need'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Building2 className="w-4 h-4" />
            I Need Services
          </button>
          <button
            onClick={() => setActiveTab('provide')}
            className={`px-6 py-2.5 rounded font-medium text-sm flex items-center gap-2 transition-colors ${
              activeTab === 'provide'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Users className="w-4 h-4" />
            I Provide Services
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] py-[70px]">
          {currentSteps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-lg mb-4">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseJourney;