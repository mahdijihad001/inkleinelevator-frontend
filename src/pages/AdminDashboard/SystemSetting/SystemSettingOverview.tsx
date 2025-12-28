import { useState } from "react";

// Platform Fees Component
const PlatformFees = () => {
    const [commission, setCommission] = useState("10");
    const [holdPeriod, setHoldPeriod] = useState("5");

    const calculatePayment = () => {
        const contractorBid = 10000;
        const platformFee = (contractorBid * parseFloat(commission)) / 100;
        const contractorReceives = contractorBid - platformFee;

        return {
            contractorBid,
            platformFee,
            contractorReceives
        };
    };

    const payment = calculatePayment();

    return (
        <div className="bg-white rounded-lg p-4 md:p-6">
            <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold mb-2">Commission Settings</h3>
                <p className="text-sm text-gray-600">Configure platform commission and payment rules</p>
            </div>

            <div className="space-y-6">
                {/* Platform Commission */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Platform Commission (%)
                        <span className="text-gray-500 font-normal ml-2">
                            (Current: {commission}% commission on all completed jobs)
                        </span>
                    </label>
                    <input
                        type="number"
                        value={commission}
                        onChange={(e) => setCommission(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
                        placeholder="10"
                    />
                </div>

                {/* Payment Flow Example */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Payment Flow Example</h4>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Contractor Bid:</span>
                            <span className="text-sm font-medium">${payment.contractorBid.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Platform Fee ({commission}%):</span>
                            <span className="text-sm font-medium text-red-600">-${payment.platformFee.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2 mt-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-700">Contractor Receives:</span>
                                <span className="text-sm font-semibold text-green-600">${payment.contractorReceives.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Hold Period */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Hold Period
                    </label>
                    <input
                        type="number"
                        value={holdPeriod}
                        onChange={(e) => setHoldPeriod(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
                        placeholder="5"
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Save Changes
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Reset to Default
                </button>
            </div>
        </div>
    );
};

// Notifications Component
type NotificationKeys = 'email' | 'sms' | 'newBids';

const Notifications = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: true,
        newBids: true
    });

    const toggleNotification = (key: NotificationKeys) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]  // Toggle the notification for the given key
        }));
    };

    const notificationItems = [
        {
            id: "email",
            title: "Email Notification",
            description: "Receive email alerts via email",
            enabled: notifications.email
        },
        {
            id: "sms",
            title: "SMS Notifications",
            description: "Receive urgent alerts via SMS",
            enabled: notifications.sms
        },
        {
            id: "newBids",
            title: "New Bids Alerts",
            description: "Get notified immediately when new bids arrive",
            enabled: notifications.newBids
        }
    ];

    return (
        <div className="bg-white rounded-lg p-4 md:p-6">
            <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold mb-2">Notification</h3>
            </div>

            <div className="space-y-1">
                {notificationItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0"
                    >
                        <div className="flex-1 pr-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                        <button
                            onClick={() => toggleNotification(item.id as any)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${item.enabled ? 'bg-[#1a2332]' : 'bg-gray-300'
                                }`}
                            role="switch"
                            aria-checked={item.enabled}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main System Settings Component
const SystemSettings = () => {
    const [activeTab, setActiveTab] = useState("fees");

    const tabs = [
        { id: "fees", label: "Platform Fees" },
        { id: "notifications", label: "Notifications" }
    ];

    return (
        <div className="bg-gray-50">
            <div className="mx-auto p-4">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl md:text-2xl font-bold mb-1">System Settings</h1>
                    <p className="text-sm text-gray-600">Configure platform rules, fees, and admin preferences</p>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-full shadow-sm p-1.5 mb-6 inline-flex overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${activeTab === tab.id
                                ? "bg-[#1a2332] text-white"
                                : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div>
                    {activeTab === "fees" && <PlatformFees />}
                    {activeTab === "notifications" && <Notifications />}
                </div>
            </div>
        </div>
    );
};

export default SystemSettings;