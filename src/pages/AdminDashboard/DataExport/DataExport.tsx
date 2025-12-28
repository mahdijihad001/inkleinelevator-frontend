import { Download, Users, Briefcase, FileText } from "lucide-react";

// Export Card Component
const ExportCard = ({ icon: Icon, title, description, totalRecords, onExportCSV, onExportExcel }: {
    icon: any;
    title: string;
    description: string;
    totalRecords: string;
    onExportCSV: () => void;
    onExportExcel: () => void;
}) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-red-50 rounded-lg">
                    <Icon className="text-red-500" size={24} />
                </div>
                <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>

            {/* Total Records */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Total Records:</span>
                <span className="px-3 py-1 bg-[#1a2332] text-white text-sm font-medium rounded-full">
                    {totalRecords} users
                </span>
            </div>

            {/* Export Format */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">Export Format:</label>
                <div className="flex gap-2">
                    <button
                        onClick={onExportCSV}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a2332] text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        <Download size={16} />
                        CSV
                    </button>
                    <button
                        onClick={onExportExcel}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a2332] text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        <Download size={16} />
                        Excel
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Data Export Component
const DataExport = () => {
    const handleExport = (type: any, format: any) => {
        console.log(`Exporting ${type} as ${format}`);
        // Add export logic here
    };

    const exportData = [
        {
            id: "users",
            icon: Users,
            title: "User Data",
            description: "All registered users (requesters and contractors)",
            totalRecords: "1,247 users",
            onExportCSV: () => handleExport("users", "CSV"),
            onExportExcel: () => handleExport("users", "Excel")
        },
        {
            id: "jobs",
            icon: Briefcase,
            title: "Jobs Data",
            description: "All job postings with complete details",
            totalRecords: "1,247 users",
            onExportCSV: () => handleExport("jobs", "CSV"),
            onExportExcel: () => handleExport("jobs", "Excel")
        },
        {
            id: "bids",
            icon: FileText,
            title: "Bids Data",
            description: "All contractor bids and proposals",
            totalRecords: "1,547 users",
            onExportCSV: () => handleExport("bids", "CSV"),
            onExportExcel: () => handleExport("bids", "Excel")
        }
    ];

    return (
        <div className="bg-gray-50">
            <div className="mx-auto p-4 md:p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl md:text-2xl font-bold mb-1">Data Export</h1>
                    <p className="text-sm text-gray-600">Download reports for users, jobs, bids, and platform activity</p>
                </div>

                {/* Export Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {exportData.map((data) => (
                        <ExportCard key={data.id} {...data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataExport;