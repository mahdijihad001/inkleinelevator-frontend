/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronDown } from "lucide-react";

interface BasicsStepProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BasicsStep({
  formData,
  setFormData,
  onNext,
  onBack,
}: BasicsStepProps) {
  return (
    <div>
      {/* Heading */}
      <div className="mb-8 ">
        <h2 className="text-xl font-medium text-gray-900">Basics</h2>
        <p className="text-[#717182] text-base mt-2 border-b border-gray-200 inline-block shadow-xs  pb-3">
          Let's start with the basics.
        </p>
      </div>

      {/* Job Title */}
      <div className="mb-6 mt-10">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Job Title
        </label>
        <input
          type="text"
          placeholder="e.g. Elevator Modernization - 4 Units"
          value={formData.jobTitle}
          onChange={(e) =>
            setFormData({ ...formData, jobTitle: e.target.value })
          }
          className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Service Type */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Service Type
        </label>

        <div className="relative">
          <select
            value={formData.serviceType}
            onChange={(e) =>
              setFormData({ ...formData, serviceType: e.target.value })
            }
            className="w-full px-4 py-3 pr-10 bg-blue-50 border border-blue-100 rounded-lg
                 focus:outline-none focus:ring-1 focus:ring-gray-800
                 text-gray-900 appearance-none cursor-pointer"
          >
            <option value="">Select service type</option>
            <option value="NewInstallation">New Installation</option>
            <option value="modernization">Modernization</option>
            <option value="MaintenanceContract">Maintenance Contract</option>
            <option value="RepairEmergencyService">
              Repair/Emergency Service
            </option>
            <option value="InspectionTesting">Inspection/Testing</option>
            <option value="consultation">Consultation</option>
          </select>

          {/* Arrow icon */}
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2 cursor-pointer border-2 border-gray-300 text-gray-500 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 cursor-pointer bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
