import { useState } from 'react';
import { MapPin, DollarSign, Clock, Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Browse Jobs Component
const BrowseJobsContent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const jobs = [
        {
            id: 1,
            title: 'Monthly Maintenance Contract - 12 Elevators',
            location: '123 Main Street, New York, 10001',
            budget: '$180,000 - $220,000',
            postedTime: '2 days ago',
            type: 'Modernization',
            description: 'Complete modernization of 8 passenger elevators in a 25-story office building. Replace controllers, upgrade to destination dispatch, LED lighting, and touchscreen panels. ASME A17.1 compliance required.',
        },
        {
            id: 2,
            title: 'Monthly Maintenance Contract - 12 Elevators',
            location: '123 Main Street, New York, 10001',
            budget: '$180,000 - $220,000',
            postedTime: '2 days ago',
            type: 'Modernization',
            description: 'Complete modernization of 8 passenger elevators in a 25-story office building. Replace controllers, upgrade to destination dispatch, LED lighting, and touchscreen panels. ASME A17.1 compliance required.',
        },
        {
            id: 3,
            title: 'Monthly Maintenance Contract - 12 Elevators',
            location: '123 Main Street, New York, 10001',
            budget: '$180,000 - $220,000',
            postedTime: '2 days ago',
            type: 'Modernization',
            description: 'Complete modernization of 8 passenger elevators in a 25-story office building. Replace controllers, upgrade to destination dispatch, LED lighting, and touchscreen panels. ASME A17.1 compliance required.',
        },
    ];

    return (
        <>
            {/* Job Listings */}
            <div className="space-y-3 md:space-y-4">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 md:gap-4 mb-3 md:mb-4">
                            <h2 className="text-base md:text-lg font-semibold text-gray-900 pr-2">{job.title}</h2>
                            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                                {job.type}
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4 text-xs md:text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="break-words">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="whitespace-nowrap">Budget: {job.budget}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="whitespace-nowrap">Posted {job.postedTime}</span>
                            </div>
                        </div>

                        <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4 leading-relaxed">
                            {job.description}
                        </p>

                        <button className="w-full sm:w-auto bg-[#1e3a5f] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium hover:bg-[#2d4a6f] transition-colors">
                            View Details & Bid
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 md:gap-2 overflow-x-auto pb-2">
                <button className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
                    <ChevronLeft size={16} />
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Prev</span>
                </button>

                <button
                    onClick={() => setCurrentPage(1)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${currentPage === 1
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    1
                </button>
                <button
                    onClick={() => setCurrentPage(2)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${currentPage === 2
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    2
                </button>
                <button
                    onClick={() => setCurrentPage(3)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${currentPage === 3
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    3
                </button>
                <span className="px-1 md:px-2 text-gray-500 text-sm">...</span>

                <button className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={16} />
                </button>
            </div>
        </>
    );
};

// My Jobs Component
const MyJobsContent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const myJobs = [
        {
            id: 1,
            title: 'Monthly Maintenance Contract - 12 Elevators',
            location: '123 Main Street, New York, 10001',
            budget: '$180,000 - $220,000',
            postedTime: '2 days ago',
            type: 'Modernization',
            status: 'Active',
            statusColor: 'bg-orange-500',
            description: 'Complete modernization of 8 passenger elevators in a 25-story office building. Replace controllers, upgrade to destination dispatch, LED lighting, and touchscreen panels. ASME A17.1 compliance required.',
        },
        {
            id: 2,
            title: 'Monthly Maintenance Contract - 12 Elevators',
            location: '123 Main Street, New York, 10001',
            budget: '$180,000 - $220,000',
            postedTime: '2 days ago',
            type: 'Modernization',
            status: 'Completed',
            statusColor: 'bg-green-500',
            description: 'Complete modernization of 8 passenger elevators in a 25-story office building. Replace controllers, upgrade to destination dispatch, LED lighting, and touchscreen panels. ASME A17.1 compliance required.',
        },
        {
            id: 3,
            title: 'Monthly Maintenance Contract - 12 Elevators',
            location: '123 Main Street, New York, 10001',
            budget: '$180,000 - $220,000',
            postedTime: '2 days ago',
            type: 'Modernization',
            status: 'In Progress',
            statusColor: 'bg-blue-500',
            description: 'Complete modernization of 8 passenger elevators in a 25-story office building. Replace controllers, upgrade to destination dispatch, LED lighting, and touchscreen panels. ASME A17.1 compliance required.',
        },
    ];

    return (
        <>
            {/* Job Listings */}
            <div className="space-y-3 md:space-y-4">
                {myJobs.map((job) => (
                    <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 md:gap-4 mb-3 md:mb-4">
                            <h2 className="text-base md:text-lg font-semibold text-gray-900 pr-2">{job.title}</h2>
                            <div className="flex gap-2">
                                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                                    {job.type}
                                </span>
                                <span className={`${job.statusColor} text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap`}>
                                    {job.status}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4 text-xs md:text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="break-words">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="whitespace-nowrap">Budget: {job.budget}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="whitespace-nowrap">Posted {job.postedTime}</span>
                            </div>
                        </div>

                        <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4 leading-relaxed">
                            {job.description}
                        </p>

                        <button className="w-full sm:w-auto bg-[#1e3a5f] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium hover:bg-[#2d4a6f] transition-colors">
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 md:gap-2 overflow-x-auto pb-2">
                <button className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
                    <ChevronLeft size={16} />
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Prev</span>
                </button>

                <button
                    onClick={() => setCurrentPage(1)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${currentPage === 1
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    1
                </button>
                <button
                    onClick={() => setCurrentPage(2)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${currentPage === 2
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    2
                </button>
                <button
                    onClick={() => setCurrentPage(3)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${currentPage === 3
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    3
                </button>
                <span className="px-1 md:px-2 text-gray-500 text-sm">...</span>

                <button className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={16} />
                </button>
            </div>
        </>
    );
};

const BrowsJobsOverview = () => {
    const [activeTab, setActiveTab] = useState('browse');

    return (
        <div className="space-y-4 md:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Browse Elevator Jobs</h1>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Overview of your elevator jobs and Bids.</p>
                </div>
                <div className="relative w-full sm:w-auto">
                    <select className="w-full sm:w-48 px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Newest First</option>
                        <option>Oldest First</option>
                        <option>Budget: High to Low</option>
                        <option>Budget: Low to High</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <div className="relative sm:col-span-2 md:col-span-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search elevator jobs..."
                        className="w-full pl-10 pr-3 md:pr-4 py-2 md:py-2.5 border border-gray-300 rounded-lg text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Location"
                    className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                    <select className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg text-xs md:text-sm appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Job Type</option>
                        <option>Modernization</option>
                        <option>Maintenance</option>
                        <option>Repairs</option>
                        <option>Installation</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto">
                <button
                    onClick={() => setActiveTab('browse')}
                    className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'browse'
                            ? 'bg-[#1e3a5f] text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    Browse Jobs
                </button>
                <button
                    onClick={() => setActiveTab('my-jobs')}
                    className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'my-jobs'
                            ? 'bg-[#1e3a5f] text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    My Jobs
                </button>
            </div>

            {/* Render Content Based on Active Tab */}
            {activeTab === 'browse' ? <BrowseJobsContent /> : <MyJobsContent />}
        </div>
    );
};

export default BrowsJobsOverview;