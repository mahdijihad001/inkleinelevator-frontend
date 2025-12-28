import { DollarSign, TrendingUp, Star, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElevatorDashboardOverview = () => {
    const statsCards = [
        {
            title: 'Active Projects',
            value: '5',
            subtitle: 'Modernization, 3 Maintenance',
            icon: Briefcase,
        },
        {
            title: 'Revenue This Month',
            value: '$427,500',
            subtitle: '+2% last last month',
            icon: DollarSign,
        },
        {
            title: 'Win Rate',
            value: '76%',
            subtitle: 'Based on 5 bids',
            icon: TrendingUp,
        },
        {
            title: 'Company Rating',
            value: '4.9',
            subtitle: '29 Project Reviews',
            icon: Star,
        },
    ];

    const activeJobs = [
        {
            title: 'Elevator Modernization - Tower A',
            type: 'Modernization',
            budget: '$ 275K - $375K',
            location: 'Manhattan, NY',
        },
        {
            title: 'Elevator Modernization - Tower A',
            type: 'Repairs',
            budget: '$ 150K - $180K',
            location: 'Manhattan, NY',
        },
        {
            title: 'Elevator Modernization - Tower A',
            type: 'Modernization',
            budget: '$ 275K - $375K',
            location: 'Manhattan, NY',
        },
    ];

    const recentBids = [
        {
            title: 'Office Tower Modernization',
            bid: '$185,000',
            status: 'Pending',
            statusColor: 'bg-yellow-500',
        },
        {
            title: 'MRL Installation - New Build',
            bid: '$98,500',
            status: 'Accepted',
            statusColor: 'bg-green-500',
        },
        {
            title: 'MRL Installation - New Build',
            bid: '$98,500',
            status: 'Not Accepted',
            statusColor: 'bg-red-500',
        },
    ];

    return (
        <div className="space-y-4 md:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Overview of your elevator jobs, bids, and activity</p>
                </div>
                <button className="bg-[#1e3a5f] text-white px-3 md:px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2d4a6f] transition-colors text-sm md:text-base w-full sm:w-auto">
                    <Briefcase size={18} />
                    Find Elevator Job
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {statsCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                        <div className="flex justify-between items-start mb-3 md:mb-4">
                            <span className="text-xs md:text-sm text-gray-600">{card.title}</span>
                            <card.icon size={18} className="text-gray-400" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{card.value}</div>
                        <div className="text-xs text-gray-500">{card.subtitle}</div>
                    </div>
                ))}
            </div>

            {/* Active Jobs and Recent Bids */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Active Jobs */}
                <div className="bg-white rounded-lg border border-gray-200">
                    <div className="p-4 md:p-6 border-b border-gray-200">
                        <h2 className="text-base md:text-lg font-semibold text-gray-900">Active Jobs</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {activeJobs.map((job, index) => (
                            <div key={index} className="p-4 md:p-6">
                                <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-3">{job.title}</h3>
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 text-xs md:text-sm text-gray-600">
                                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium ${job.type === 'Modernization' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                        }`}>
                                        {job.type}
                                    </span>
                                    <span className="text-xs md:text-sm">{job.budget}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="text-xs md:text-sm">{job.location}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                                    <Link to={`/elevator/jobdetails/10`} className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        View Details
                                    </Link>
                                    <button className="flex-1 px-3 md:px-4 py-2 bg-[#1e3a5f] text-white rounded-lg text-xs md:text-sm font-medium hover:bg-[#2d4a6f] transition-colors">
                                        Quick Bid
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* My Recent Bids */}
                <div className="bg-white rounded-lg border border-gray-200">
                    <div className="p-4 md:p-6 border-b border-gray-200">
                        <h2 className="text-base md:text-lg font-semibold text-gray-900">My Recent Bids</h2>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {recentBids.map((bid, index) => (
                            <div key={index} className="p-4 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <h3 className="font-semibold text-sm md:text-base text-gray-900">{bid.title}</h3>
                                    <span className={`${bid.statusColor} text-white text-xs font-medium px-3 py-1 rounded-full w-fit`}>
                                        {bid.status}
                                    </span>
                                </div>
                                <p className="text-xs md:text-sm text-gray-600">Bid: {bid.bid}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElevatorDashboardOverview;