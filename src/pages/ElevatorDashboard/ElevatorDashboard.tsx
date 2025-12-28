import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Building2, Flag, Fuel, LayoutDashboard, LogOut, Menu, MessageSquare, Search, Settings, User } from 'lucide-react';

const ElevatorDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: any) => {
        if (path === '/elevator' && location.pathname === '/elevator') return true;
        if (path !== '/elevator' && location.pathname === path) return true;
        return false;
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
                {/* User Profile */}
                <div className="m-4 mb-6">
                    <div className="bg-[#0f1729] rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <User size={20} className="text-gray-600" />
                            </div>
                            {sidebarOpen && (
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs text-gray-400 mb-1">Company</div>
                                    <div className="font-semibold text-sm text-white">Jane Contractor</div>
                                    <div className="text-xs text-gray-400 truncate">tim.jennings@example.com</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <button
                        onClick={() => navigate('/elevator')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <LayoutDashboard size={20} />
                        {sidebarOpen && <span>Dashboard</span>}
                    </button>
                    <button
                        onClick={() => navigate('/elevator/browse-jobs')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator/browse-jobs') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Search size={20} />
                        {sidebarOpen && <span>Browse Jobs</span>}
                    </button>
                    <button
                        onClick={() => navigate('/elevator/my-bids')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator/my-bids') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Flag size={20} />
                        {sidebarOpen && <span>My Bids</span>}
                    </button>
                    <button
                        onClick={() => navigate('/elevator/billing')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator/billing') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Fuel size={20} />
                        {sidebarOpen && <span>Billing</span>}
                    </button>
                    <button
                        onClick={() => navigate('/elevator/company-profile')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator/company-profile') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Building2 size={20} />
                        {sidebarOpen && <span>Company Profile</span>}
                    </button>
                    <button
                        onClick={() => navigate('/elevator/meassages')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator/meassages') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <MessageSquare size={20} />
                        {sidebarOpen && <span>Messages</span>}
                    </button>
                    <button
                        onClick={() => navigate('/elevator/settings')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${isActive('/elevator/settings') ? 'bg-[#0f1729] text-white' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Settings size={20} />
                        {sidebarOpen && <span>Settings</span>}
                    </button>
                </nav>

                {/* Logout */}
                <div className="p-4 pb-6">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <LogOut size={20} />
                        {sidebarOpen && <span className="text-sm font-medium">Log out</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Menu size={24} />
                            </button>
                            <div className="flex items-center gap-2">
                                <Building2 className="text-blue-600" size={24} />
                                <span className="font-bold text-xl">IN KLEIN</span>
                                <span className="text-xs text-gray-500 ml-2">ELEVATOR SOFTWARE</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                type="text"
                                placeholder="Search bids or keywords"
                                className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <User size={24} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content - This will render child routes */}
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ElevatorDashboard;