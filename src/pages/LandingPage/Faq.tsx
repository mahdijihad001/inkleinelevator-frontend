import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  [key: string]: FAQItem[];
}

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = [
    { id: 'general', label: 'General Questions' },
    { id: 'requesters', label: 'For Job Requesters' },
    { id: 'contractors', label: 'For Elevator Contractors' }
  ];

  const faqData: FAQCategory = {
    general: [
      {
        question: 'Any elevator related job so residential or commercial?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        question: 'How long does the verification process take?',
        answer: 'The verification process typically takes 24-48 hours. Our team reviews all submitted documents to ensure compliance with industry standards.'
      },
      {
        question: 'What types of elevator projects can I post?',
        answer: 'You can post various types of elevator projects including installation, modernization, maintenance, and repair jobs for both residential and commercial properties.'
      },
      {
        question: 'How do I compare and select a winner?',
        answer: 'You can review all bids submitted, compare contractor profiles, ratings, and pricing. Then select the contractor that best fits your project requirements.'
      },
      {
        question: 'How does the platform ensure quality and safety?',
        answer: 'We verify all contractors\' licenses, certifications, and insurance. We also maintain a rating system based on completed projects and client feedback.'
      },
      {
        question: 'What types of elevator projects can I post?',
        answer: 'You can post installation, modernization, maintenance contracts, emergency repairs, and inspection-related projects on our platform.'
      }
    ],
    requesters: [
      {
        question: 'How do I post a job on the platform?',
        answer: 'Simply click on "Post a Job" button, fill in the job details, requirements, and budget. Your job will be visible to verified contractors within minutes.'
      },
      {
        question: 'What information do I need to provide when posting a job?',
        answer: 'You need to provide project type, location, timeline, budget range, and detailed description of work required. Photos and building specifications are helpful but optional.'
      },
      {
        question: 'How many bids will I receive?',
        answer: 'Typically, you will receive 3-10 bids within 72 hours depending on your project scope and location. You can review and compare all submitted bids.'
      },
      {
        question: 'Can I communicate with contractors before hiring?',
        answer: 'Yes, you can message contractors directly through our platform, ask questions, and request additional information before making your selection.'
      },
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept all major credit cards, bank transfers, and ACH payments. Payment is secured through our escrow system to protect both parties.'
      }
    ],
    contractors: [
      {
        question: 'How do I become a verified contractor?',
        answer: 'Submit your business license, insurance certificates, certifications, and references. Our team will verify all documents within 24-48 hours.'
      },
      {
        question: 'What is the service fee for contractors?',
        answer: 'In-Klein charges a 10% service fee on completed jobs. There is no subscription fee or cost to create an account and browse jobs.'
      },
      {
        question: 'How do I submit a bid?',
        answer: 'Browse available jobs, click on ones that match your expertise, review the requirements, and submit your bid with pricing and timeline details.'
      },
      {
        question: 'Can I specialize in specific types of elevator work?',
        answer: 'Yes, you can set your preferences to receive notifications only for installation, modernization, maintenance, or emergency repair jobs.'
      },
      {
        question: 'How quickly will I get paid after completing a job?',
        answer: 'Payment is released from escrow within 24-48 hours after the job requester confirms completion and satisfaction with the work.'
      }
    ]
  };

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setExpandedIndex(0); // Reset to first item when changing category
  };

  const currentFAQs = faqData[activeCategory] || faqData.general;

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm mb-3 flex items-center justify-center gap-2">
            <span>←</span>
            <span>Frequently Asked Questions</span>
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-gray-600 text-base">
            Everything you need to know about using In-Klein Elevators
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`w-full text-left px-6 py-4 border-b border-[#DFE3E8] transition-colors ${
                    activeCategory === category.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-3">
            <div className="">
              {currentFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b-[#E7E8EB] border-gray-200 last:border-b-0 ${
                    expandedIndex === index ? 'bg-gray-50' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors border-b border-[#DFE3E8]"
                  >
                    <span className="text-gray-900 font-medium pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        expandedIndex === index ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  
                  {expandedIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;