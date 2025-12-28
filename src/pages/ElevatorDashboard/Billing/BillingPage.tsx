
import { CreditCard, Download } from 'lucide-react';

const BillingPage = () => {
  const invoices = [
    {
      id: 1,
      title: 'Elevator Modernization - Tower A',
      date: 'Dec 1, 2024',
      amount: '$195,000',
      status: 'Paid'
    },
    {
      id: 2,
      title: 'Elevator Modernization - Tower A',
      date: 'Dec 1, 2024',
      amount: '$195,000',
      status: 'Paid'
    },
    {
      id: 3,
      title: 'Elevator Modernization - Tower A',
      date: 'Dec 1, 2024',
      amount: '$195,000',
      status: 'Paid'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Billings</h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Overview of your elevator jobs Billing.</p>
      </div>

      {/* Payment Method Section */}
      <div>
        <div className="mb-4">
          <h2 className="text-base md:text-lg font-semibold text-gray-900">Payment Method</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage your payment methods</p>
        </div>

        {/* Payment Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6 mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard size={20} className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-gray-900">Credit/Debit Card</h3>
                <p className="text-xs md:text-sm text-gray-500">Visa, Mastercard, Amex</p>
              </div>
            </div>
            <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
              Default
            </span>
          </div>
        </div>

        {/* Add Payment Method Button */}
        <button className="bg-black text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors">
          Add Payment Method
        </button>
      </div>

      {/* Billing History Section */}
      <div>
        <div className="mb-4">
          <h2 className="text-base md:text-lg font-semibold text-gray-900">Billing History</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">View and download your invoices</p>
        </div>

        {/* Invoice Cards */}
        <div className="space-y-3 md:space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="bg-white border border-gray-300 rounded-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                    {invoice.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">{invoice.date}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {invoice.amount}
                  </span>
                  <span className="bg-green-500 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    {invoice.status}
                  </span>
                  <button className="w-full sm:w-auto bg-black text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingPage;