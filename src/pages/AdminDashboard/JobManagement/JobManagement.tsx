import React, { useState } from 'react';
import { Search, Briefcase, FolderOpen, Users, DollarSign, MoreHorizontal, X, FileText, Camera } from 'lucide-react';

// Types
interface Job {
    id: number;
    title: string;
    requester: string;
    requesterEmail: string;
    status: 'posted' | 'completed' | 'in-progress';
    budget: string;
    location: string;
    bids: number;
    posted: string;
    description?: string;
    requirements?: string[];
    technicalRequirements?: string[];
}

interface Bid {
    id: number;
    company: string;
    amount: string;
    timeframe: string;
    status: 'active' | 'accepted' | 'rejected';
}

// Stats Card Component
const StatsCard: React.FC<{ title: string; value: string | number; subtitle: string; icon: React.ReactNode }> = ({ title, value, subtitle, icon }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm text-gray-600">{title}</span>
                <div className="text-gray-400">{icon}</div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{value}</div>
            <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
    );
};

// Action Modal Component
const ActionModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onViewDetails: () => void;
    onViewBids: () => void;
}> = ({ isOpen, onClose, onViewDetails, onViewBids }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="text-base font-semibold text-gray-900">Choose Action</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
                <div className="p-4 space-y-2">
                    <button
                        onClick={onViewDetails}
                        className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none flex items-center justify-center gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        <span>View Details</span>
                    </button>
                    <button
                        onClick={onViewBids}
                        className="w-full px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none flex items-center justify-center gap-2"
                    >
                        <Users className="w-4 h-4" />
                        <span>View Bids</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Job Details Modal Component
const JobDetailsModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    job: Job | null;
}> = ({ isOpen, onClose, job }) => {
    if (!isOpen || !job) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Post New Job</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                    {/* Job Details Section */}
                    <div>
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold text-gray-900">{job.title}</h4>
                                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 mt-2">
                                    Active
                                </span>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-500 mb-1">Job Budget</div>
                                <div className="text-xl font-bold text-gray-900">{job.budget}</div>
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-2">Project Description</h5>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Complete Modernization of 7 storey old building to a LUXURY office building. This project includes:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5">•</span>
                                    <span>3 storey to basement storey to storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5">•</span>
                                    <span>All floors OLED units TECHNOLOGY brand.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5">•</span>
                                    <span>Replace all shafts shaft heads for new elevator</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5">•</span>
                                    <span>2 separate middle wall drives on typical elevator</span>
                                </li>
                            </ul>
                        </div>

                        {/* Technical Requirements */}
                        <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Technical Requirements</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                    Hydraulic system
                                </span>
                                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                    OLED Location
                                </span>
                            </div>
                        </div>

                        {/* Elevator Specifications */}
                        <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Elevator Specifications</h5>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <div className="text-gray-500 mb-1">Number of Levels</div>
                                    <div className="text-gray-900 font-medium">7 Levels</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 mb-1">Capacity</div>
                                    <div className="text-gray-900 font-medium">10 person</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 mb-1">Speed</div>
                                    <div className="text-gray-900 font-medium">2.5 m/s</div>
                                </div>
                            </div>
                        </div>

                        {/* Uploaded Photos */}
                        <div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Uploaded Photos</h5>
                            <div className="flex gap-3">
                                <div className="w-20 h-20 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <Camera className="w-8 h-8 text-white" />
                                </div>
                                <div className="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <Camera className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Uploaded Documents */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold text-gray-900 mb-3">Uploaded Documents</h5>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded text-xs font-medium flex items-center gap-1">
                                    <FileText className="w-3 h-3" />
                                    Building Permits Agreement
                                </span>
                                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded text-xs font-medium flex items-center gap-1">
                                    <FileText className="w-3 h-3" />
                                    Building Owner Agreement
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Bids Modal Component
const BidsModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    bids: Bid[];
    jobTitle: string;
}> = ({ isOpen, onClose, bids, jobTitle }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Bids</h3>
                        <p className="text-xs text-gray-500 mt-1">{jobTitle}</p>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="p-4 space-y-3">
                    {bids.map((bid) => (
                        <div key={bid.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{bid.company}</h4>
                                    {bid.status === 'active' && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 mt-1">
                                            Active
                                        </span>
                                    )}
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-500 mb-1">Bid Amount</div>
                                    <div className="text-base font-bold text-gray-900">{bid.amount}</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">
                                {bid.timeframe}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Job Row Component (Mobile Card)
const JobCard: React.FC<{ job: Job; onActionClick: (job: Job) => void }> = ({ job, onActionClick }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'posted': return 'bg-blue-100 text-blue-700';
            case 'completed': return 'bg-green-100 text-green-700';
            case 'in-progress': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{job.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{job.requester}</p>
                    <p className="text-xs text-gray-400 truncate">{job.requesterEmail}</p>
                </div>
                <button
                    onClick={() => onActionClick(job)}
                    className="p-1 hover:bg-gray-100 rounded focus:outline-none flex-shrink-0"
                >
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full font-medium ${getStatusColor(job.status)}`}>
                        {job.status}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Budget:</span>
                    <span className="text-gray-900 font-medium">{job.budget}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Location:</span>
                    <span className="text-gray-900">{job.location}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bids:</span>
                    <span className="text-gray-900 font-medium">{job.bids}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Posted:</span>
                    <span className="text-gray-900">{job.posted}</span>
                </div>
            </div>
        </div>
    );
};

// Job Table Component
const JobsTable: React.FC<{ jobs: Job[]; onActionClick: (job: Job) => void }> = ({ jobs, onActionClick }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'posted': return 'bg-blue-100 text-blue-700';
            case 'completed': return 'bg-green-100 text-green-700';
            case 'in-progress': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <>
            {/* Mobile Card View */}
            <div className="block lg:hidden space-y-3">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} onActionClick={onActionClick} />
                ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Job Title</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Requester</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Status</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Budget</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Location</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Bids</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Posted</th>
                                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {jobs.map((job) => (
                                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="text-sm font-medium text-gray-900">{job.title}</div>
                                        <div className="text-xs text-gray-500">{job.requesterEmail}</div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="text-sm text-gray-900">{job.requester}</div>
                                        <div className="text-xs text-gray-500">{job.requesterEmail}</div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-900">{job.budget}</td>
                                    <td className="py-4 px-4 text-sm text-gray-900">{job.location}</td>
                                    <td className="py-4 px-4 text-sm text-gray-900">{job.bids}</td>
                                    <td className="py-4 px-4 text-sm text-gray-900">{job.posted}</td>
                                    <td className="py-4 px-4">
                                        <button
                                            onClick={() => onActionClick(job)}
                                            className="p-1 hover:bg-gray-100 rounded focus:outline-none"
                                        >
                                            <MoreHorizontal className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

// Main Component
const JobsManagement: React.FC = () => {
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isBidsModalOpen, setIsBidsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const jobs: Job[] = Array(7).fill(null).map((_, i) => ({
        id: i + 1,
        title: 'Elite Elevator Solutions',
        requester: 'Elite Elevator Solutions',
        requesterEmail: 'contact@eliteelevators.com',
        status: i === 1 ? 'completed' : 'posted',
        budget: '$100K - $220K',
        location: 'Manhattan, NY',
        bids: 87,
        posted: '2024-12-15',
    }));

    const bids: Bid[] = [
        { id: 1, company: 'Elite Elevator Solutions', amount: '$190,000', timeframe: 'Est. 30-40 days completion timeframe', status: 'active' },
        { id: 2, company: 'AA Elevator Solutions', amount: '$195,000', timeframe: 'Est. 30-40 days completion timeframe', status: 'active' },
        { id: 3, company: 'Roba Elevator Solutions', amount: '$195,000', timeframe: 'Est. 30-40 days completion timeframe', status: 'active' },
    ];

    const handleActionClick = (job: Job) => {
        setSelectedJob(job);
        setIsActionModalOpen(true);
    };

    const handleViewDetails = () => {
        setIsActionModalOpen(false);
        setIsDetailsModalOpen(true);
    };

    const handleViewBids = () => {
        setIsActionModalOpen(false);
        setIsBidsModalOpen(true);
    };

    return (
        <div className="bg-gray-50 p-4">
            <div className="mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Jobs Management</h1>
                    <p className="text-xs sm:text-sm text-gray-600">Monitor all elevator jobs posted across the platform</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatsCard
                        title="Total Jobs"
                        value="5"
                        subtitle="Across all statuses"
                        icon={<Briefcase className="w-5 h-5" />}
                    />
                    <StatsCard
                        title="Open Jobs"
                        value="02"
                        subtitle="Accepting bids"
                        icon={<FolderOpen className="w-5 h-5" />}
                    />
                    <StatsCard
                        title="Total Bids"
                        value="50"
                        subtitle="Avg. 3 bids per job"
                        icon={<Users className="w-5 h-5" />}
                    />
                    <StatsCard
                        title="Total Value"
                        value="$1.2M"
                        subtitle="Combined job budgets"
                        icon={<DollarSign className="w-5 h-5" />}
                    />
                </div>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search by job title or requester..."
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <select className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none bg-white w-full sm:w-auto sm:min-w-[140px]">
                        <option>Status</option>
                    </select>
                </div>

                {/* Section Title */}
                <div className="mb-4">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">All Jobs</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Track job status and manage visibility</p>
                </div>

                {/* Jobs Table */}
                <JobsTable jobs={jobs} onActionClick={handleActionClick} />

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">‹ Previous</button>
                    <button className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded">1</button>
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">3</button>
                    <span className="px-2 text-sm text-gray-600">...</span>
                    <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">Next ›</button>
                </div>

                {/* Modals */}
                <ActionModal
                    isOpen={isActionModalOpen}
                    onClose={() => setIsActionModalOpen(false)}
                    onViewDetails={handleViewDetails}
                    onViewBids={handleViewBids}
                />

                <JobDetailsModal
                    isOpen={isDetailsModalOpen}
                    onClose={() => setIsDetailsModalOpen(false)}
                    job={selectedJob}
                />

                <BidsModal
                    isOpen={isBidsModalOpen}
                    onClose={() => setIsBidsModalOpen(false)}
                    bids={bids}
                    jobTitle={selectedJob?.title || ''}
                />
            </div>
        </div>
    );
};

export default JobsManagement;