import React from 'react';

const WhoItsFor: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-[1500px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-cyan-400 text-sm mb-3 flex items-center justify-center gap-2">
                        <span>←</span>
                        <span>Built for Everyone in the Elevator Industry</span>
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Who It's For
                    </h2>
                    <p className="text-gray-600 text-base">
                        In-Klein Elevators serves both sides of the elevator services marketplace
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Job Requesters Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                        {/* Card Header */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-gray-900 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">For Job Requesters</h3>
                                <p className="text-sm text-gray-500">Property managers, building owners & general contractors</p>
                            </div>
                        </div>

                        {/* Perfect For Section */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Perfect for:</h4>
                            <div className="space-y-2">
                                {[
                                    "Contractors create an account and post elevator jobs",
                                    "Elevator companies submit bids for the posted jobs",
                                    "Contractors review, communicate, and compare the bids",
                                    "Contractors select the most suitable bid and finalize the contract",
                                    "The project is completed successfully"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What You Get Section */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">What you get:</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Fast bid responses</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Verified contractors</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Multiple options</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Quality assurance</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                            Post a Job
                        </button>
                    </div>

                    {/* Contractors Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                        {/* Card Header */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-cyan-400 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">For Contractors</h3>
                                <p className="text-sm text-gray-500">Licensed elevator companies & certified technicians</p>
                            </div>
                        </div>

                        {/* Perfect For Section */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Perfect for:</h4>
                            <div className="space-y-2">
                                {[
                                    'Licensed elevator installation companies',
                                    'Elevator modernization specialists',
                                    'QEI certified inspectors',
                                    'QEI certified inspectors',
                                    'Emergency repair technicians'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What You Get Section */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">What you get:</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Quality leads</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Secure payments</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Fast notification</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Grow your business</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-cyan-400 text-white py-3 rounded-md font-medium hover:bg-cyan-500 transition-colors">
                            Find Elevator Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoItsFor;