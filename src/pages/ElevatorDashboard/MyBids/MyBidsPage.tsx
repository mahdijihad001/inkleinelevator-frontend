import { useState } from 'react';
import { Info, ChevronLeft, ChevronRight, MoreHorizontal, X, Eye, Edit, Trash2, Download } from 'lucide-react';

// Types
interface ActionItem {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    value: string;
}

interface ActionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAction: (action: string) => void;
}

interface PaymentInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// interface Bid {
//     id: number;
//     jobTitle: string;
//     client: string;
//     bidAmount: string;
//     payout: string;
//     status: string;
//     statusColor: string;
// }

// Actions Dropdown Modal Component
const ActionsModal: React.FC<ActionsModalProps> = ({ isOpen, onClose, onAction }) => {
    if (!isOpen) return null;

    const actions: ActionItem[] = [
        { icon: Eye, label: 'View Details', value: 'view' },
        { icon: Edit, label: 'Edit Bid', value: 'edit' },
        { icon: Trash2, label: 'Withdraw Bid', value: 'withdraw' },
        { icon: Download, label: 'Download Proposal', value: 'download' },
    ];

    const handleAction = (value: string) => {
        onAction(value);
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
                    isOpen ? 'opacity-50' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className={`bg-white rounded-xl shadow-2xl max-w-xs w-full transition-transform duration-300 ${
                    isOpen ? 'scale-100' : 'scale-95'
                }`}>
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                        <h3 className="text-base font-semibold text-gray-900">Actions</h3>
                    </div>

                    {/* Actions List */}
                    <div className="py-2">
                        {actions.map((action) => {
                            const IconComponent = action.icon;
                            return (
                                <button
                                    key={action.value}
                                    onClick={() => handleAction(action.value)}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <IconComponent size={18} className="text-gray-500" />
                                    <span>{action.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

// Payment Information Modal Component
const PaymentInfoModal: React.FC<PaymentInfoModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
                    isOpen ? 'opacity-50' : 'opacity-0'
                }`}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
                    isOpen ? 'scale-100' : 'scale-95'
                }`}>
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">How In-Klein Payment Works</h2>
                            <p className="text-sm text-gray-500 mt-1">Understand our transparent payment process</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-6 space-y-6">
                        {/* Step-by-Step Payment Flow */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Payment Flow</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span>You submit a bid (e.g., $10,000 for a job)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span>Client accepts your bid and creates a confirmed job</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span>Client pays through In-Klein via credit card, ACH, or bank transfer</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span>Platform automatically deducts 10% commission ($1,000)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span>You receive $9,000 after job completion or milestone approval</span>
                                </li>
                            </ul>
                        </div>

                        {/* Example Breakdown */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Breakdown</h3>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-gray-700">Your Bid Amount:</span>
                                    <span className="text-lg font-semibold text-gray-900">$10,000</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-t border-gray-200">
                                    <span className="text-sm text-gray-700">Platform Fee (10%):</span>
                                    <span className="text-lg font-semibold text-red-600">- $1,000</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-t-2 border-gray-300">
                                    <span className="text-base font-semibold text-gray-900">You Receive:</span>
                                    <span className="text-xl font-bold text-green-600">$9,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <p className="text-sm text-orange-800 leading-relaxed">
                                The commission is automatically deducted when the client pays, ensuring transparent and instant processing. You only receive payment after job milestones are approved, protecting both parties.
                            </p>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={onClose}
                            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const MyBidsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isActionsModalOpen, setIsActionsModalOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState<number | null>(null);

    const handleActionClick = (bidId: number) => {
        setSelectedBid(bidId);
        setIsActionsModalOpen(true);
    };

    const handleAction = (action: string) => {
        console.log(`Action: ${action} for Bid ID: ${selectedBid}`);
        // Handle different actions here
        switch(action) {
            case 'view':
                alert('View Details clicked');
                break;
            case 'edit':
                alert('Edit Bid clicked');
                break;
            case 'withdraw':
                alert('Withdraw Bid clicked');
                break;
            case 'download':
                alert('Download Proposal clicked');
                break;
        }
    };

    const bids = [
        {
            id: 1,
            jobTitle: 'Elevator Modernization - 8 Units',
            client: 'Queens Property Management',
            bidAmount: '$195,000',
            payout: '$175,500',
            status: 'Pending Review',
            statusColor: 'bg-orange-100 text-orange-700'
        },
        {
            id: 2,
            jobTitle: 'MRL Installation - 6-Story Building',
            client: 'Queens Property Management',
            bidAmount: '$98,500',
            payout: '$175,500',
            status: 'Accepted',
            statusColor: 'bg-green-100 text-green-700'
        },
        {
            id: 3,
            jobTitle: 'Hydraulic System Repair',
            client: 'Queens Property Management',
            bidAmount: '$9,200',
            payout: '$175,500',
            status: 'Declined',
            statusColor: 'bg-red-100 text-red-700'
        },
        {
            id: 4,
            jobTitle: 'Annual Maintenance Contract - 12 Elevators',
            client: 'Queens Property Management',
            bidAmount: '$4,500',
            payout: '$175,500',
            status: 'Pending Review',
            statusColor: 'bg-orange-100 text-orange-700'
        },
        {
            id: 5,
            jobTitle: 'Elevator Modernization - 8 Units',
            client: 'Queens Property Management',
            bidAmount: '$195,000',
            payout: '$175,500',
            status: 'Pending Review',
            statusColor: 'bg-orange-100 text-orange-700'
        },
        {
            id: 6,
            jobTitle: 'Elevator Modernization - 8 Units',
            client: 'Queens Property Management',
            bidAmount: '$195,000',
            payout: '$175,500',
            status: 'Pending Review',
            statusColor: 'bg-orange-100 text-orange-700'
        },
        {
            id: 7,
            jobTitle: 'Elevator Modernization - 8 Units',
            client: 'Queens Property Management',
            bidAmount: '$195,000',
            payout: '$175,500',
            status: 'Pending Review',
            statusColor: 'bg-orange-100 text-orange-700'
        },
        {
            id: 8,
            jobTitle: 'Elevator Modernization - 8 Units',
            client: 'Queens Property Management',
            bidAmount: '$195,000',
            payout: '$175,500',
            status: 'Pending Review',
            statusColor: 'bg-orange-100 text-orange-700'
        },
    ];

    return (
        <div className="space-y-4 md:space-y-6 pb-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Bids</h1>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Overview of your elevator jobs and Bids.</p>
                </div>
                <button
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                    <Info size={18} />
                    Payment information
                </button>
            </div>

            {/* Submitted Proposals Section */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 md:p-6 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900">Submitted Proposals</h2>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">Track your bids and view payment breakdowns for accepted jobs.</p>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Job Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Client
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Bid Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Your Payout (After 10% Fee)
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bids.map((bid) => (
                                <tr key={bid.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {bid.jobTitle}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {bid.client}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {bid.bidAmount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                                        {bid.payout}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${bid.statusColor}`}>
                                            {bid.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button 
                                            onClick={() => handleActionClick(bid.id)}
                                            className="hover:text-gray-700"
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile/Tablet Card View */}
                <div className="lg:hidden divide-y divide-gray-200">
                    {bids.map((bid) => (
                        <div key={bid.id} className="p-4 hover:bg-gray-50">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-sm font-semibold text-gray-900 pr-2">{bid.jobTitle}</h3>
                                <button 
                                    onClick={() => handleActionClick(bid.id)}
                                    className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                                >
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            <div className="space-y-2 text-xs md:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Client:</span>
                                    <span className="text-gray-900">{bid.client}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Bid Amount:</span>
                                    <span className="text-gray-900 font-medium">{bid.bidAmount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Your Payout:</span>
                                    <span className="text-green-600 font-medium">{bid.payout}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Status:</span>
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${bid.statusColor}`}>
                                        {bid.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 md:gap-2 overflow-x-auto pb-2">
                <button className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
                    <ChevronLeft size={16} />
                    <span className="hidden sm:inline">Previous</span>
                </button>

                <button
                    onClick={() => setCurrentPage(1)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${
                        currentPage === 1
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    1
                </button>
                <button
                    onClick={() => setCurrentPage(2)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${
                        currentPage === 2
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    2
                </button>
                <button
                    onClick={() => setCurrentPage(3)}
                    className={`px-2.5 md:px-3 py-2 text-xs md:text-sm rounded-lg transition-colors ${
                        currentPage === 3
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

            {/* Actions Modal */}
            <ActionsModal 
                isOpen={isActionsModalOpen} 
                onClose={() => setIsActionsModalOpen(false)}
                onAction={handleAction}
            />

            {/* Payment Info Modal */}
            <PaymentInfoModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
        </div>
    );
};

export default MyBidsPage;