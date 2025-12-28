import React from 'react';

const PricingSection: React.FC = () => {
    const features = [
        'No subscription (It\'s free to log on)',
        'In-Klein gets 10% of every deal',
        'Priority bid placement',
        'Advanced search filters',
        'Job alerts & notifications',
        'Analytics dashboard',
        'Priority support 24x7'
    ];

    return (
        <div className="py-16 px-4 bg-[#F8F9FF]">
            <div className="max-w-[1500px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-cyan-400 text-sm mb-3 flex items-center justify-center gap-2">
                        <span>←</span>
                        <span>Simple & Transparent Pricing</span>
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Clear and transparent service fee
                    </h2>
                    <p className="text-gray-600 text-base">
                        lear pricing, shown upfront so you always know what you're paying for.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="bg-white rounded-lg border-2 border-gray-300 p-8 max-w-md mx-auto">
                    {/* Price Header */}
                    <div className="text-center mb-8">
                        <p className="text-gray-900 font-semibold text-lg mb-1">Free</p>
                        <h3 className="text-5xl font-bold text-gray-900 mb-2">$0</h3>
                        <p className="text-gray-500 text-sm">/month</p>
                        <p className="text-gray-600 text-sm mt-3">Perfect for getting started</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                        Get Started Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;