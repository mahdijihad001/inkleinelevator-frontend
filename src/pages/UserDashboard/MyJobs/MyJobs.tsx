import { useState } from 'react';
import { Search, Calendar, MessageSquare, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const MyJobs = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [jobType, setJobType] = useState('all');

  const jobs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&h=300&fit=crop',
      title: 'Elevator Modernization - Tower A',
      category: 'Modernization',
      status: 'Open',
      statusColor: 'bg-green-500',
      postedDate: 'Posted 3 days ago',
      bids: 12,
      messages: 5,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      title: 'Elevator Modernization - Tower A',
      category: 'Modernization',
      status: 'Open',
      statusColor: 'bg-green-500',
      postedDate: 'Posted 3 days ago',
      bids: 12,
      messages: 5,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
      title: 'Elevator Modernization - Tower A',
      category: 'Modernization',
      status: 'Complete',
      statusColor: 'bg-orange-500',
      postedDate: 'Posted 3 days ago',
      bids: 12,
      messages: 5,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Jobs</h1>
          <p className="text-gray-600 text-sm">Overview of your elevator jobs, bids, and activity</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
          <span className="text-xl">+</span>
          Post a New Elevator Job
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Jobs by name, type ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="all">Jobs Type</option>
          <option value="modernization">Modernization</option>
          <option value="maintenance">Maintenance</option>
          <option value="repair">Repair</option>
        </select>
      </div>

      {/* Jobs List */}
      <div className="space-y-4 mb-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-6"
          >
            {/* Job Image */}
            <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Job Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <span className={`${job.statusColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                    {job.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-md font-medium">
                  {job.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span>{job.postedDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{job.bids} Bids</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-gray-400" />
                  <span>{job.messages} New Message</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800">
                Manage
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          <ChevronLeft size={16} />
          Previous
        </button>
        <button className="px-3 py-2 text-sm bg-slate-900 text-white rounded-lg">1</button>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">2</button>
        <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">3</button>
        <span className="px-3 py-2 text-sm text-gray-600">...</span>
        <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default MyJobs;