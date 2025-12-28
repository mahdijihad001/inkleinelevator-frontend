import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Building2, LogOut, Menu, User, Users, Briefcase, FileText, CreditCard, FileCode, Settings, Download } from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: any) => {
    if (path === "/admin" && location.pathname === "/admin") return true;
    if (path !== "/admin" && location.pathname === path) return true;
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Profile Section */}
        <div className="p-4">
          <div className="bg-[#1a2332] rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden flex-shrink-0">
                <User size={20} className="text-white" />
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 mb-0.5">Admin Panel</div>
                  <div className="font-semibold text-sm text-white">In-Klein Elevators</div>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <div className="text-xs text-gray-400">in.klein@example.com</div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 overflow-y-auto">
          {/* Platform Management Section */}
          {sidebarOpen && (
            <div className="text-xs font-semibold text-gray-500 mb-2 mt-2">Platform Management</div>
          )}
          
          <button
            onClick={() => navigate('/admin')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <Building2 size={18} />
            {sidebarOpen && <span className="text-sm">Dashboard</span>}
          </button>

          <button
            onClick={() => navigate('/admin/userManagement')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/userManagement') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <Users size={18} />
            {sidebarOpen && <span className="text-sm">User Management</span>}
          </button>

          <button
            onClick={() => navigate('/admin/JobsManagement')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/JobsManagement') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <Briefcase size={18} />
            {sidebarOpen && <span className="text-sm">Jobs Management</span>}
          </button>

          <button
            onClick={() => navigate('/admin/bidsmanagement')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/bidsmanagement') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <FileText size={18} />
            {sidebarOpen && <span className="text-sm">Bids Management</span>}
          </button>

          <button
            onClick={() => navigate('/admin/payments')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/payments') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <CreditCard size={18} />
            {sidebarOpen && <span className="text-sm">Payments</span>}
          </button>

          {/* System Section */}
          {sidebarOpen && (
            <div className="text-xs font-semibold text-gray-500 mb-2 mt-4">System</div>
          )}

          <button
            onClick={() => navigate('/admin/contentManagement')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/contentManagement') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <FileCode size={18} />
            {sidebarOpen && <span className="text-sm">Content Management</span>}
          </button>

          <button
            onClick={() => navigate('/admin/systemSettings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/systemSettings') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <Settings size={18} />
            {sidebarOpen && <span className="text-sm">System Settings</span>}
          </button>

          <button
            onClick={() => navigate('/admin/dataExport')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive('/admin/dataExport') ? 'bg-[#1a2332] text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <Download size={18} />
            {sidebarOpen && <span className="text-sm">Data Export</span>}
          </button>
        </nav>

        {/* Platform Status Card - Above Logout */}
        {sidebarOpen && (
          <div className="px-4 pt-4">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="text-xs font-semibold text-gray-700 mb-2">Platform Status</div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-gray-600">Users Online</span>
                <span className="text-xs font-semibold text-green-600">247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Active Jobs</span>
                <span className="text-xs font-semibold text-gray-700">50</span>
              </div>
            </div>
          </div>
        )}

        {/* Logout */}
        <div className="p-4 pb-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <LogOut size={18} />
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
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center gap-2">
                <Building2 className="text-blue-600" size={24} />
                <span className="font-bold text-xl">IN KLEIN</span>
                <span className="text-xs text-gray-500 ml-2">
                  ELEVATOR SOFTWARE
                </span>
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
        <div className="p-8 bg-[#F9F9FF]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;