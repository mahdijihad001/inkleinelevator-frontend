import React, { useState } from 'react';
import { Search, Package, Clock, DollarSign, Percent, MoreHorizontal, X, Star, Eye, Users } from 'lucide-react';

// Types
interface Bid {
  id: number;
  contractor: string;
  contractorEmail: string;
  job: string;
  jobDetails: string;
  requester: string;
  bidAmount: string;
  platformFee: string;
  timeline: string;
  status: 'pending' | 'completed';
  rating?: number;
  experience?: string;
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
  onViewBids: () => void;
  onViewAllBidders: () => void;
}> = ({ isOpen, onClose, onViewBids, onViewAllBidders }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-900">Action</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          <button
            onClick={onViewBids}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Bids</span>
          </button>
          <button
            onClick={onViewAllBidders}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>View All Bidders</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// All Bidders Modal Component
const AllBiddersModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  bids: Bid[];
  jobTitle: string;
}> = ({ isOpen, onClose, bids }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">All Bids</h3>
            <p className="text-xs text-gray-500 mt-1">Monitor and review all contractor bid submissions</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none flex-shrink-0">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          {bids.map((bid) => (
            <div key={bid.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-gray-900">{bid.contractor}</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < (bid.rating || 5) ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">{bid.rating || 5} (7 project)</span>
                  </div>
                  <p className="text-xs text-gray-500">{bid.experience || 'Est. 30-40 days completion experience'}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="text-lg font-bold text-gray-900">{bid.bidAmount}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {bid.timeline === '16 weeks' ? 'Est. 1 week' : bid.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Bid Card Component (Mobile)
const BidCard: React.FC<{ bid: Bid; onActionClick: (bid: Bid) => void }> = ({ bid, onActionClick }) => {
  const getStatusColor = (status: string) => {
    return status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-gray-900 truncate">{bid.contractor}</h4>
            <p className="text-xs text-gray-500 truncate">{bid.contractorEmail}</p>
          </div>
        </div>
        <button 
          onClick={() => onActionClick(bid)}
          className="p-1 hover:bg-gray-100 rounded focus:outline-none flex-shrink-0"
        >
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <div className="text-gray-600 mb-0.5">Job:</div>
          <div className="text-gray-900 font-medium">{bid.job}</div>
          <div className="text-gray-500">{bid.jobDetails}</div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Requester:</span>
          <span className="text-gray-900">{bid.requester}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Bid Amount:</span>
          <span className="text-gray-900 font-medium">{bid.bidAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Platform Fee (10%):</span>
          <span className="text-red-600 font-medium">{bid.platformFee}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Timeline:</span>
          <span className="text-gray-900">{bid.timeline}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Status:</span>
          <span className={`px-2 py-1 rounded-full font-medium ${getStatusColor(bid.status)}`}>
            {bid.status === 'pending' ? 'Pending' : 'Completed'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Bids Table Component
const BidsTable: React.FC<{ bids: Bid[]; onActionClick: (bid: Bid) => void }> = ({ bids, onActionClick }) => {
  const getStatusColor = (status: string) => {
    return status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700';
  };

  return (
    <>
      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-3">
        {bids.map((bid) => (
          <BidCard key={bid.id} bid={bid} onActionClick={onActionClick} />
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Contractor</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Job</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Requester</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Bid Amount</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Platform Fee (10%)</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Timeline</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bids.map((bid) => (
                <tr key={bid.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{bid.contractor}</div>
                        <div className="text-xs text-gray-500">{bid.contractorEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-sm font-medium text-gray-900">{bid.job}</div>
                    <div className="text-xs text-gray-500">{bid.jobDetails}</div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{bid.requester}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{bid.bidAmount}</td>
                  <td className="py-4 px-4 text-sm font-medium text-red-600">{bid.platformFee}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{bid.timeline}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(bid.status)}`}>
                      {bid.status === 'pending' ? 'Pending' : 'Completed'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button 
                      onClick={() => onActionClick(bid)}
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
const BidsManagement: React.FC = () => {
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isAllBiddersModalOpen, setIsAllBiddersModalOpen] = useState(false);
  const [selectedBid, setSelectedBid] = useState<Bid | null>(null);

  const bids: Bid[] = [
    {
      id: 1,
      contractor: 'Elite Elevator Solutions',
      contractorEmail: 'contact@eliteelevators.com',
      job: 'Elevator Modernization - 8 Units',
      jobDetails: 'Manhattan Tower LLC',
      requester: 'Manhattan Tower LLC',
      bidAmount: '$195,000',
      platformFee: '$19,500',
      timeline: '16 weeks',
      status: 'pending',
      rating: 5,
      experience: 'Est. 30-40 days completion experience'
    },
    {
      id: 2,
      contractor: 'Elite Elevator Solutions',
      contractorEmail: 'contact@eliteelevators.com',
      job: 'Elevator Modernization - 8 Units',
      jobDetails: 'Manhattan 2024-01-15',
      requester: 'Manhattan Tower LLC',
      bidAmount: '$195,000',
      platformFee: '$19,500',
      timeline: '16 weeks',
      status: 'completed',
      rating: 5
    },
    ...Array(5).fill(null).map((_, i) => ({
      id: i + 3,
      contractor: 'Elite Elevator Solutions',
      contractorEmail: 'contact@eliteelevators.com',
      job: 'Elevator Modernization - 8 Units',
      jobDetails: 'Manhattan 2024-01-15',
      requester: 'Manhattan Tower LLC',
      bidAmount: '$195,000',
      platformFee: '$19,500',
      timeline: '16 weeks',
      status: 'completed' as const,
      rating: 5
    }))
  ];

  const allBidders: Bid[] = [
    {
      id: 1,
      contractor: 'Elite Elevator Solutions',
      contractorEmail: '',
      job: '',
      jobDetails: '',
      requester: '',
      bidAmount: '$195,000',
      platformFee: '',
      timeline: '16 weeks',
      status: 'pending',
      rating: 5,
      experience: 'Est. 30-40 days completion experience'
    },
    {
      id: 2,
      contractor: 'Elite Elevator Solutions',
      contractorEmail: '',
      job: '',
      jobDetails: '',
      requester: '',
      bidAmount: '$195,000',
      platformFee: '',
      timeline: '16 weeks',
      status: 'pending',
      rating: 5,
      experience: 'Est. 30-40 days completion experience'
    },
    {
      id: 3,
      contractor: 'Elite Elevator Solutions',
      contractorEmail: '',
      job: '',
      jobDetails: '',
      requester: '',
      bidAmount: '$195,000',
      platformFee: '',
      timeline: '16 weeks',
      status: 'pending',
      rating: 5,
      experience: 'Est. 30-40 days completion experience'
    }
  ];

  const handleActionClick = (bid: Bid) => {
    setSelectedBid(bid);
    setIsActionModalOpen(true);
  };

  const handleViewBids = () => {
    setIsActionModalOpen(false);
    // Handle view bids logic
  };

  const handleViewAllBidders = () => {
    setIsActionModalOpen(false);
    setIsAllBiddersModalOpen(true);
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Bids Management</h1>
          <p className="text-xs sm:text-sm text-gray-600">View, compare, and finalize contractor bids across all jobs</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Total Bids"
            value="2,341"
            subtitle="All bids submitted"
            icon={<Package className="w-5 h-5" />}
          />
          <StatsCard
            title="Pending Bids"
            value="87"
            subtitle="Awaiting review"
            icon={<Clock className="w-5 h-5" />}
          />
          <StatsCard
            title="Avg Bid Amount"
            value="$112K"
            subtitle="Per job"
            icon={<DollarSign className="w-5 h-5" />}
          />
          <StatsCard
            title="Platform Fees"
            value="$428K"
            subtitle="Total fees earned"
            icon={<Percent className="w-5 h-5" />}
          />
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by contractor, job, or requester..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-4">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">All Bids</h2>
          <p className="text-xs sm:text-sm text-gray-600">Monitor and review all contractor bid submissions</p>
        </div>

        {/* Bids Table */}
        <BidsTable bids={bids} onActionClick={handleActionClick} />

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          <button className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900">‹ Previous</button>
          <button className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm bg-gray-900 text-white rounded">1</button>
          <button className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
          <button className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">3</button>
          <span className="px-1 sm:px-2 text-xs sm:text-sm text-gray-600">...</span>
          <button className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900">Next ›</button>
        </div>

        {/* Modals */}
        <ActionModal
          isOpen={isActionModalOpen}
          onClose={() => setIsActionModalOpen(false)}
          onViewBids={handleViewBids}
          onViewAllBidders={handleViewAllBidders}
        />

        <AllBiddersModal
          isOpen={isAllBiddersModalOpen}
          onClose={() => setIsAllBiddersModalOpen(false)}
          bids={allBidders}
          jobTitle={selectedBid?.job || ''}
        />
      </div>
    </div>
  );
};

export default BidsManagement;