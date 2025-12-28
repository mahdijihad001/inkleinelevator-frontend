import React, { useState } from 'react';
import { Search, Star, MoreHorizontal, X } from 'lucide-react';

// Types
interface Contractor {
  id: number;
  company: string;
  email: string;
  license: string;
  status: string;
  completedJobs: number;
  totalEarned: string;
  rating: number;
}

interface Requester {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  totalRequests: number;
  totalSpent: string;
  rating: number;
}

// Modal Component for Contractors
const ActionModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  contractor: Contractor | null;
  onAction: (action: string) => void;
}> = ({ isOpen, onClose, contractor, onAction }) => {
  if (!isOpen || !contractor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Choose Action</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Company:</p>
            <p className="text-sm sm:text-base font-medium text-gray-900">{contractor.company}</p>
          </div>
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Email:</p>
            <p className="text-xs sm:text-sm text-gray-900">{contractor.email}</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <button
              onClick={() => onAction('Review')}
              className="w-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none flex items-center justify-center gap-2"
            >
              <span>📋</span>
              <span>Review</span>
            </button>
            <button
              onClick={() => onAction('Approve')}
              className="w-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none flex items-center justify-center gap-2"
            >
              <span>✓</span>
              <span>Approve</span>
            </button>
            <button
              onClick={() => onAction('Reject')}
              className="w-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors focus:outline-none flex items-center justify-center gap-2"
            >
              <span>✕</span>
              <span>Reject</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Requesters
const RequesterActionModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  requester: Requester | null;
  onAction: (action: string) => void;
}> = ({ isOpen, onClose, requester, onAction }) => {
  if (!isOpen || !requester) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Choose Action</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors focus:outline-none"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Name:</p>
            <p className="text-sm sm:text-base font-medium text-gray-900">{requester.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Email:</p>
            <p className="text-xs sm:text-sm text-gray-900">{requester.email}</p>
          </div>
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Phone:</p>
            <p className="text-xs sm:text-sm text-gray-900">{requester.phone}</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <button
              onClick={() => onAction('View Details')}
              className="w-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none flex items-center justify-center gap-2"
            >
              <span>👁</span>
              <span>View Details</span>
            </button>
            <button
              onClick={() => onAction('Suspend')}
              className="w-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors focus:outline-none flex items-center justify-center gap-2"
            >
              <span>⏸</span>
              <span>Suspend</span>
            </button>
            <button
              onClick={() => onAction('Delete')}
              className="w-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors focus:outline-none flex items-center justify-center gap-2"
            >
              <span>🗑</span>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// SearchBar Component
const SearchBar: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder={activeTab === 'contractors' ? 'Search elevator jobs...' : 'Search requesters...'}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <select className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white w-full sm:w-auto sm:min-w-[140px]">
        <option>{activeTab === 'contractors' ? 'Jobs Type' : 'Request Type'}</option>
      </select>
    </div>
  );
};

// Tabs Component
const Tabs: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto">
      <button
        onClick={() => setActiveTab('contractors')}
        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
          activeTab === 'contractors'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        Contractors (4)
      </button>
      <button
        onClick={() => setActiveTab('requesters')}
        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
          activeTab === 'requesters'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        Requesters (4)
      </button>
    </div>
  );
};

// ContractorCard Component
const ContractorCard: React.FC<{ contractor: Contractor; onActionClick: (contractor: Contractor) => void }> = ({ contractor, onActionClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">{contractor.company}</div>
            <div className="text-xs text-gray-500 truncate">{contractor.email}</div>
          </div>
        </div>
        <button 
          onClick={() => onActionClick(contractor)}
          className="p-1 hover:bg-gray-100 rounded transition-colors focus:outline-none flex-shrink-0"
        >
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">License:</span>
          <span className="text-xs text-gray-900 font-medium">{contractor.license}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Status:</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-700">
            {contractor.status}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Completed Jobs:</span>
          <span className="text-xs text-gray-900 font-medium">{contractor.completedJobs}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Total Earned:</span>
          <span className="text-xs text-gray-900 font-medium">{contractor.totalEarned}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Rating:</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-900 font-medium">{contractor.rating}</span>
            <Star className="w-3.5 h-3.5 fill-current text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

// RequesterCard Component
const RequesterCard: React.FC<{ requester: Requester; onActionClick: (requester: Requester) => void }> = ({ requester, onActionClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500"></div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">{requester.name}</div>
            <div className="text-xs text-gray-500 truncate">{requester.email}</div>
          </div>
        </div>
        <button 
          onClick={() => onActionClick(requester)}
          className="p-1 hover:bg-gray-100 rounded transition-colors focus:outline-none flex-shrink-0"
        >
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Phone:</span>
          <span className="text-xs text-gray-900 font-medium">{requester.phone}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Status:</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-700">
            {requester.status}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Total Requests:</span>
          <span className="text-xs text-gray-900 font-medium">{requester.totalRequests}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Total Spent:</span>
          <span className="text-xs text-gray-900 font-medium">{requester.totalSpent}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Rating:</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-900 font-medium">{requester.rating}</span>
            <Star className="w-3.5 h-3.5 fill-current text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ContractorTable Component
const ContractorTable: React.FC<{ contractors: Contractor[] }> = ({ contractors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContractor, setSelectedContractor] = useState<Contractor | null>(null);

  const handleActionClick = (action: string) => {
    console.log(`${action} clicked for contractor ${selectedContractor?.id}`);
    setIsModalOpen(false);
    setSelectedContractor(null);
  };

  const openModal = (contractor: Contractor) => {
    setSelectedContractor(contractor);
    setIsModalOpen(true);
  };

  return (
    <>
      <ActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contractor={selectedContractor}
        onAction={handleActionClick}
      />
      
      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-3">
        {contractors.map((contractor) => (
          <ContractorCard 
            key={contractor.id} 
            contractor={contractor} 
            onActionClick={openModal}
          />
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Company</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">License</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Completed Jobs</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Total Earned</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Rating</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contractors.map((contractor) => (
                <tr key={contractor.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{contractor.company}</div>
                        <div className="text-xs text-gray-500">{contractor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{contractor.license}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
                      {contractor.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{contractor.completedJobs}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{contractor.totalEarned}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-900">{contractor.rating}</span>
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button 
                      onClick={() => openModal(contractor)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors focus:outline-none"
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

// RequesterTable Component
const RequesterTable: React.FC<{ requesters: Requester[] }> = ({ requesters }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequester, setSelectedRequester] = useState<Requester | null>(null);

  const handleActionClick = (action: string) => {
    console.log(`${action} clicked for requester ${selectedRequester?.id}`);
    setIsModalOpen(false);
    setSelectedRequester(null);
  };

  const openModal = (requester: Requester) => {
    setSelectedRequester(requester);
    setIsModalOpen(true);
  };

  return (
    <>
      <RequesterActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        requester={selectedRequester}
        onAction={handleActionClick}
      />
      
      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-3">
        {requesters.map((requester) => (
          <RequesterCard 
            key={requester.id} 
            requester={requester} 
            onActionClick={openModal}
          />
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Total Requests</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Total Spent</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Rating</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requesters.map((requester) => (
                <tr key={requester.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{requester.name}</div>
                        <div className="text-xs text-gray-500">{requester.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{requester.phone}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
                      {requester.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{requester.totalRequests}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{requester.totalSpent}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-900">{requester.rating}</span>
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button 
                      onClick={() => openModal(requester)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors focus:outline-none"
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

// Pagination Component
const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-4 sm:mt-6 flex-wrap">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        ‹ Previous
      </button>
      <button
        onClick={() => setCurrentPage(1)}
        className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded transition-colors ${
          currentPage === 1
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        1
      </button>
      <button
        onClick={() => setCurrentPage(2)}
        className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded transition-colors ${
          currentPage === 2
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        2
      </button>
      <button
        onClick={() => setCurrentPage(3)}
        className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm rounded transition-colors ${
          currentPage === 3
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        3
      </button>
      <span className="px-1 sm:px-2 text-xs sm:text-sm text-gray-600">...</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        Next ›
      </button>
    </div>
  );
};

// Main Component
const UserManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contractors');

  const contractors: Contractor[] = Array(7).fill(null).map((_, i) => ({
    id: i + 1,
    company: 'Elite Elevator Solutions',
    email: 'contact@eliteelevators.com',
    license: 'EL-12345-NY',
    status: 'Verified',
    completedJobs: 87,
    totalEarned: '$195,000',
    rating: 4.9,
  }));

  const requesters: Requester[] = Array(7).fill(null).map((_, i) => ({
    id: i + 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    totalRequests: 24,
    totalSpent: '$48,500',
    rating: 4.8,
  }));

  return (
    <div className="bg-gray-50 p-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">User Management</h1>
          <p className="text-xs sm:text-sm text-gray-600">View, filter, and manage all Requesters and Contractors</p>
        </div>

        {/* Search Bar */}
        <SearchBar activeTab={activeTab} />

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Section Title */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
            {activeTab === 'contractors' ? 'Contractor Accounts' : 'Requester Accounts'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {activeTab === 'contractors' 
              ? 'Approve, verify, and manage contractor accounts'
              : 'View, manage, and monitor requester accounts'}
          </p>
        </div>

        {/* Conditional Table Rendering */}
        {activeTab === 'contractors' ? (
          <ContractorTable contractors={contractors} />
        ) : (
          <RequesterTable requesters={requesters} />
        )}

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default UserManagement;