import { Briefcase, DollarSign, FileText, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserDashboardOverview = () => {
  const navigate = useNavigate();
  const stats = [
    {
      title: "Active Jobs",
      value: "5",
      subtitle: "3 modernization, 2 maintenance",
      icon: Briefcase,
    },
    {
      title: "Total Invested",
      value: "$427,500",
      subtitle: "Across 5 projects",
      icon: DollarSign,
    },
    {
      title: "New Bids",
      value: "18",
      subtitle: "Awaiting review",
      icon: FileText,
    },
    {
      title: "Completed Projects",
      value: "5",
      subtitle: "All time",
      icon: Building2,
    },
  ];

  const activeJobs = [
    { title: "Elevator Modernization - Tower A", subtitle: "6 Bids Received" },
    {
      title: "Vertical Solutions accepted for 'Emergency Repair - Hydraulic'",
      subtitle: "8 Bids Received",
    },
    { title: "Emergency Repair - Building C", subtitle: "In Progress" },
  ];

  const recentActivity = [
    {
      text: "You Accepted Vertical Solutions for 'Emergency Repair - Hydraulic'",
      time: "10 min ago",
    },
    {
      text: "Elite Elevators submitted bid for 'Modernization - 8 Units'",
      time: "15 min ago",
    },
    { text: "New message from Metro Lift Services", time: "3 hours ago" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 text-sm">
            Overview of your elevator jobs, bids, and activity
          </p>
        </div>
        <button
          onClick={() => navigate("/user/createdPostElevatorJob")}
          className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
        >
          <span className="text-xl">+</span>
          Post a New Elevator Job
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-gray-600 text-sm">{stat.title}</div>
              <stat.icon size={20} className="text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500">{stat.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Active Jobs</h2>
          <div className="space-y-4">
            {activeJobs.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 text-sm mb-1">
                    {job.title}
                  </div>
                  <div className="text-xs text-gray-500">{job.subtitle}</div>
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm rounded hover:bg-slate-800">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="py-3 border-b border-gray-100 last:border-0"
              >
                <div className="font-medium text-gray-900 text-sm mb-1">
                  {activity.text}
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardOverview;
