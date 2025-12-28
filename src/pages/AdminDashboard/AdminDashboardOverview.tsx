import pepol from "@/assets/people.png";
import dollerBag from "@/assets/money-bag-02.png";
import bits from "@/assets/bits.png";
import profit from "@/assets/profit.png";
import { ArrowUpRight } from "lucide-react";

const AdminDashboardOverview = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,247",
      subtitle: "892 Requesters, 355 Contractors",
      icon: pepol,
      persent: "+12.5%",
    },
    {
      title: "Active Jobs",
      value: "156",
      subtitle: "89 Open, 67 In Progress",
      icon: dollerBag,
      persent: "+12.5%",
    },
    {
      title: "Total Bids",
      value: "2,341",
      subtitle: "Avg. 15 bids per job",
      icon: bits,
      persent: "+12.5%",
    },
    {
      title: "Platform Revenue",
      value: "$428,560",
      subtitle: "From 10% commission",
      icon: profit,
      persent: "+12.5%",
    },
  ];

  const activeJobs = [
    {
      title: "Elite Elevator Solutions",
      subtitle: "Waiting for approval",
    },
    {
      title: "Elite Elevator Solutions'",
      subtitle: "Waiting for approval",
    },
    {
      title: "Elite Elevator Solutions",
      subtitle: "Waiting for approval",
    },
  ];

  const recentActivity = [
    {
      text: "Elite Elevator Solutions Submitted contractor application'",
      time: "10 min ago",
    },
    {
      text: "Manhattan Tower LLC Posted new job: Modernization Project'",
      time: "15 min ago",
    },
    {
      text: "Brooklyn Development Awarded contract for $195,000'",
      time: "20 min ago",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-base mt-2">
            Full control center for managing users, jobs, and platform activity
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-gray-600 text-sm font-medium">
                {stat.title}
              </div>

              <img src={stat.icon} alt={stat.title} className="w-6 h-6" />
            </div>

            <div className="text-2xl font-medium text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 leading-none mt-2">
              <span className="inline-flex items-center gap-1 text-green-500 align-middle">
                <ArrowUpRight className="w-3 h-3 shrink-0" />
                <span className="leading-none">{stat.persent}</span>
              </span>{" "}
              {stat.subtitle}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Contractor Approval
            </h2>
            <p className="text-sm text-[#717182]">
              Items requiring immediate attention
            </p>
          </div>
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
                  Review
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
                <div className="font-medium text-gray-900 text-base mb-2">
                  {activity.text}
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOverview;
