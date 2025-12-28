import React, { useState } from 'react';
import { Search, DollarSign, Clock, CheckCircle, TrendingUp, MoreHorizontal, X, AlertTriangle } from 'lucide-react';

// Types
interface Payment {
  id: number;
  jobTitle: string;
  jobDetails: string;
  requester: string;
  requesterDetails: string;
  contractor: string;
  contractorDetails: string;
  contractAmount: string;
  platformFee: string;
  contractorReceives: string;
  milestone?: string;
  status: 'completed' | 'pending' | 'released';
}

// Stats Card Component
const StatsCard: React.FC<{ title: string; value: string; subtitle: string; icon: React.ReactNode }> = ({ title, value, subtitle, icon }) => {
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
  onReleasePayment: () => void;
}> = ({ isOpen, onClose, onViewDetails, onReleasePayment }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-900">Actions</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          <button
            onClick={onViewDetails}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
          >
            View Details
          </button>
          <button
            onClick={onReleasePayment}
            className="w-full px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none"
          >
            Release Payment
          </button>
        </div>
      </div>
    </div>
  );
};

// Review Payment Modal Component
const ReviewPaymentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  payment: Payment | null;
}> = ({ isOpen, onClose, payment }) => {
  const [reviewNotes, setReviewNotes] = useState('');

  if (!isOpen || !payment) return null;

//   const calculateAmount = () => {
//     const contract = parseFloat(payment.contractAmount.replace(/[$,]/g, ''));
//     const platform = parseFloat(payment.platformFee.replace(/[$,]/g, ''));
//     return contract - platform;
//   };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Review Payment Release</h3>
            <p className="text-xs text-gray-500 mt-1">Verify completion and release payment to contractor</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded focus:outline-none flex-shrink-0">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {/* Job Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Job Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">Job</div>
                <div className="text-sm font-medium text-gray-900">{payment.jobTitle}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Milestone</div>
                <div className="text-sm font-medium text-gray-900">{payment.milestone || 'Project Completion'}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Requester</div>
                <div className="text-sm font-medium text-gray-900">{payment.requester}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Contractor</div>
                <div className="text-sm font-medium text-gray-900">{payment.contractor}</div>
              </div>
            </div>
          </div>

          {/* Payment Breakdown */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Payment Breakdown</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Contract Amount:</span>
                <span className="font-semibold text-gray-900">{payment.contractAmount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Platform Commission (10%):</span>
                <span className="font-semibold text-gray-900">{payment.platformFee}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Contractor Payout (90%):</span>
                <span className="font-semibold text-gray-900">{payment.contractorReceives}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">Amount to Release:</span>
                  <span className="text-lg font-bold text-green-600">{payment.contractorReceives}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Review Notes */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Admin Review Notes</h4>
            <textarea
              value={reviewNotes}
              onChange={(e) => setReviewNotes(e.target.value)}
              placeholder="Enter review notes or reasons for holding payment..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />
          </div>

          {/* Warning Message */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-orange-800">
              Payment has been on escrow for 2 days. Holding release period is 5-7 business days.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log('Payment released:', payment.id);
                onClose();
              }}
              className="flex-1 px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none"
            >
              Release Payment ({payment.contractorReceives})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Upcoming Releases Table Card (Mobile)
const UpcomingReleaseCard: React.FC<{ payment: Payment; onActionClick: (payment: Payment) => void }> = ({ payment, onActionClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900">{payment.jobTitle}</h4>
          <p className="text-xs text-gray-500 mt-1">{payment.jobDetails}</p>
        </div>
        <button 
          onClick={() => onActionClick(payment)}
          className="p-1 hover:bg-gray-100 rounded focus:outline-none flex-shrink-0"
        >
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <div className="text-gray-600 mb-1">Requester:</div>
          <div className="text-gray-900 font-medium">{payment.requester}</div>
          <div className="text-gray-500">{payment.requesterDetails}</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Contractor:</div>
          <div className="text-gray-900 font-medium">{payment.contractor}</div>
          <div className="text-gray-500">{payment.contractorDetails}</div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
          <div>
            <div className="text-gray-600">Contract:</div>
            <div className="text-gray-900 font-semibold">{payment.contractAmount}</div>
          </div>
          <div>
            <div className="text-gray-600">Platform Fee:</div>
            <div className="text-gray-900 font-semibold">{payment.platformFee}</div>
          </div>
        </div>
        <div className="pt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            {payment.status === 'completed' ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Upcoming Releases Table Component
const UpcomingReleasesTable: React.FC<{ payments: Payment[]; onActionClick: (payment: Payment) => void }> = ({ payments, onActionClick }) => {
  return (
    <>
      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-3">
        {payments.map((payment) => (
          <UpcomingReleaseCard key={payment.id} payment={payment} onActionClick={onActionClick} />
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Job Details</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Parties</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Payment Breakdown</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="text-sm font-medium text-gray-900">{payment.jobTitle}</div>
                    <div className="text-xs text-gray-500">{payment.jobDetails}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="mb-2">
                      <div className="text-sm text-gray-900">{payment.requester}</div>
                      <div className="text-xs text-gray-500">{payment.requesterDetails}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">{payment.contractor}</div>
                      <div className="text-xs text-gray-500">{payment.contractorDetails}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contract:</span>
                        <span className="font-medium text-gray-900">{payment.contractAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Platform Fee:</span>
                        <span className="font-medium text-gray-900">{payment.platformFee}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {payment.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => onActionClick(payment)}
                      className="px-4 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none"
                    >
                      Review & Release
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

// Compliance Hold Table Component
const ComplianceHoldTable: React.FC<{ payments: Payment[] }> = ({ payments }) => {
  return (
    <>
      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-3">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-gray-600 mb-1">Requester + Contractor:</div>
                <div className="text-sm font-medium text-gray-900">{payment.requester}</div>
                <div className="text-gray-500">{payment.requesterDetails}</div>
                <div className="text-sm font-medium text-gray-900 mt-1">{payment.contractor}</div>
                <div className="text-gray-500">{payment.contractorDetails}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-gray-600">Amount:</div>
                  <div className="text-gray-900 font-semibold">{payment.contractAmount}</div>
                </div>
                <div>
                  <div className="text-gray-600">Platform Fee:</div>
                  <div className="text-gray-900 font-semibold">{payment.platformFee}</div>
                </div>
              </div>
              <div>
                <div className="text-gray-600">Contractor Receives:</div>
                <div className="text-gray-900 font-semibold">{payment.contractorReceives}</div>
              </div>
              <button className="w-full px-4 py-2 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                Resolve
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Requester + Contractor</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Platform Fee</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Contractor Receives</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="mb-2">
                      <div className="text-sm font-medium text-gray-900">{payment.requester}</div>
                      <div className="text-xs text-gray-500">{payment.requesterDetails}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{payment.contractor}</div>
                      <div className="text-xs text-gray-500">{payment.contractorDetails}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">{payment.contractAmount}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-blue-600">{payment.platformFee}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">{payment.contractorReceives}</td>
                  <td className="py-4 px-4">
                    <button className="px-4 py-2 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors focus:outline-none">
                      Resolve
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

// Recently Released Payments Table Component
const RecentlyReleasedTable: React.FC<{ payments: Payment[] }> = ({ payments }) => {
  return (
    <>
      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-3">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="space-y-3 text-xs">
              <div>
                <div className="text-gray-600 mb-1">Requester + Contractor:</div>
                <div className="text-sm font-medium text-gray-900">{payment.requester}</div>
                <div className="text-gray-500">{payment.requesterDetails}</div>
                <div className="text-sm font-medium text-gray-900 mt-1">{payment.contractor}</div>
                <div className="text-gray-500">{payment.contractorDetails}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-gray-600">Amount:</div>
                  <div className="text-gray-900 font-semibold">{payment.contractAmount}</div>
                </div>
                <div>
                  <div className="text-gray-600">Platform Fee:</div>
                  <div className="text-blue-600 font-semibold">{payment.platformFee}</div>
                </div>
              </div>
              <div>
                <div className="text-gray-600">Contractor Received:</div>
                <div className="text-gray-900 font-semibold">{payment.contractorReceives}</div>
              </div>
              <button className="w-full px-4 py-2 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg">
                Released
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Requester + Contractor</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Platform Fee</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Contractor Received</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="mb-2">
                      <div className="text-sm font-medium text-gray-900">{payment.requester}</div>
                      <div className="text-xs text-gray-500">{payment.requesterDetails}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{payment.contractor}</div>
                      <div className="text-xs text-gray-500">{payment.contractorDetails}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">{payment.contractAmount}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-blue-600">{payment.platformFee}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">{payment.contractorReceives}</td>
                  <td className="py-4 px-4">
                    <button className="px-4 py-2 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg">
                      Released
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
const PaymentProcessing: React.FC = () => {
  const [activeView, setActiveView] = useState<'pending' | 'released'>('pending');
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const upcomingPayments: Payment[] = [
    {
      id: 1,
      jobTitle: 'Elevator Modernization - 8 Units',
      jobDetails: 'Manhattan Tower LLC',
      requester: 'Elevator Modernization - 8 Units',
      requesterDetails: 'Manhattan 2025-01-15',
      contractor: 'Elite Elevator Solutions',
      contractorDetails: 'contact@eliteelevators.com',
      contractAmount: '$195,000',
      platformFee: '$19,500',
      contractorReceives: '$175,500',
      milestone: 'Project Completion',
      status: 'completed'
    },
    ...Array(3).fill(null).map((_, i) => ({
      id: i + 2,
      jobTitle: 'Elevator Modernization - 8 Units',
      jobDetails: 'Manhattan Tower LLC',
      requester: 'Elevator Modernization - 8 Units',
      requesterDetails: 'Manhattan 2025-01-15',
      contractor: 'Elite Elevator Solutions',
      contractorDetails: 'contact@eliteelevators.com',
      contractAmount: '$195,000',
      platformFee: '$19,500',
      contractorReceives: '$175,500',
      milestone: 'Project Completion',
      status: 'completed' as const
    }))
  ];

  const compliancePayments: Payment[] = Array(3).fill(null).map((_, i) => ({
    id: i + 10,
    jobTitle: 'Payment Modernization - 8 Units',
    jobDetails: 'Manhattan Tower LLC',
    requester: 'Payment Modernization - 8 Units',
    requesterDetails: 'To be submitted through admin for on-site verification',
    contractor: 'Elite Elevator Solutions',
    contractorDetails: 'To be submitted through admin for on-site verification',
    contractAmount: '$195,000',
    platformFee: '$20',
    contractorReceives: '$2,150',
    status: 'pending'
  }));

  const releasedPayments: Payment[] = Array(5).fill(null).map((_, i) => ({
    id: i + 20,
    jobTitle: '',
    jobDetails: '',
    requester: 'Elevator Modernization - 8 Units',
    requesterDetails: 'To be submitted through admin for on-site verification',
    contractor: 'Elite Elevator Solutions',
    contractorDetails: 'To be submitted through admin for on-site verification',
    contractAmount: '$145,000',
    platformFee: '$50',
    contractorReceives: '$2,150',
    status: 'released'
  }));

  const handleActionClick = (payment: Payment) => {
    setSelectedPayment(payment);
    setIsActionModalOpen(true);
  };

  const handleViewDetails = () => {
    setIsActionModalOpen(false);
    // Handle view details
  };

  const handleReleasePayment = () => {
    setIsActionModalOpen(false);
    setIsReviewModalOpen(true);
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
            {activeView === 'pending' ? 'Payment Processing' : 'Recently Released Payments'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            {activeView === 'pending' 
              ? 'Monitor contractor payments and escrow fund events'
              : 'Review escrow and completed transactions'}
          </p>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveView('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeView === 'pending'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Pending Releases
          </button>
          <button
            onClick={() => setActiveView('released')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeView === 'released'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Recently Released
          </button>
        </div>

        {activeView === 'pending' ? (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatsCard
                title="Pending"
                value="8"
                subtitle="Awaiting completion"
                icon={<Clock className="w-5 h-5" />}
              />
              <StatsCard
                title="Received Payments"
                value="$245,100"
                subtitle="Total in escrow"
                icon={<DollarSign className="w-5 h-5" />}
              />
              <StatsCard
                title="Disbursements"
                value="$221,300"
                subtitle="To contractors"
                icon={<TrendingUp className="w-5 h-5" />}
              />
              <StatsCard
                title="Released Funds"
                value="$93,400"
                subtitle="Total paid out"
                icon={<CheckCircle className="w-5 h-5" />}
              />
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search payments..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Upcoming Pending Releases */}
            <div className="mb-8">
              <div className="mb-4">
                <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Upcoming Pending Releases</h2>
                <p className="text-xs sm:text-sm text-gray-600">Review contractor milestones and release escrowed payments</p>
              </div>
              <UpcomingReleasesTable payments={upcomingPayments} onActionClick={handleActionClick} />
            </div>

            {/* Payment Held - Compliance Hold */}
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Payment Held - Compliance Hold</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Payment under admin pending verification</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Value</div>
                    <div className="text-lg font-bold text-gray-900">$29.10</div>
                  </div>
                </div>
              </div>
              <ComplianceHoldTable payments={compliancePayments} />
            </div>
          </>
        ) : (
          <>
            {/* Search Bar */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search payments..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Search className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Recently Released Payments Table */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Recently Released Payments</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Tracking escrow and completed transactions</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Value</div>
                  <div className="text-lg font-bold text-gray-900">$29.10</div>
                </div>
              </div>
            </div>
            <RecentlyReleasedTable payments={releasedPayments} />

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">Previous</button>
              <button className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded">1</button>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">3</button>
              <span className="px-2 text-sm text-gray-600">...</span>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">Next</button>
            </div>
          </>
        )}

        {/* Modals */}
        <ActionModal
          isOpen={isActionModalOpen}
          onClose={() => setIsActionModalOpen(false)}
          onViewDetails={handleViewDetails}
          onReleasePayment={handleReleasePayment}
        />

        <ReviewPaymentModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          payment={selectedPayment}
        />
      </div>
    </div>
  );
};

export default PaymentProcessing;