/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronDown, X } from "lucide-react";

interface DetailsStepProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function DetailsStep({
  formData,
  setFormData,
  onNext,
  onBack,
}: DetailsStepProps) {
  // const handleAddRequirement = (requirement: string) => {
  //   if (!formData.technicalRequirements.includes(requirement)) {
  //     setFormData({
  //       ...formData,
  //       technicalRequirements: [...formData.technicalRequirements, requirement],
  //     });
  //   }
  // };

  // const handleRemoveRequirement = (requirement: string) => {
  //   setFormData({
  //     ...formData,
  //     technicalRequirements: formData.technicalRequirements.filter(
  //       (r: string) => r !== requirement
  //     ),
  //   });
  // };

  const handleRemoveTechnicalFile = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      technicalRequirementsFiles: (
        prev.technicalRequirementsFiles || []
      ).filter((_: File, i: number) => i !== index),
    }));
  };

  return (
    <div>
      {/* Heading */}

      <div className="mb-8 ">
        <h2 className="text-xl font-medium text-gray-900">Details</h2>
        <p className="text-[#717182] text-base mt-2 border-b border-gray-200 inline-block shadow-xs  pb-3">
          Tell us more about the work involved.
        </p>
      </div>

      {/* Project Description */}
      <div className="mb-8 mt-10">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Project Description
        </label>
        <div className="border border-gray-200 rounded-lg mb-4 p-3">
          <div className="flex gap-2 flex-wrap">
            <button className="px-2 py-1 font-bold hover:bg-gray-100">B</button>
            <button className="px-2 py-1 italic hover:bg-gray-100">I</button>
            <button className="px-2 py-1 underline hover:bg-gray-100">U</button>
            <div className="border-l border-gray-300 mx-2"></div>
            <button className="px-2 py-1 text-sm hover:bg-gray-100">H1</button>
            <button className="px-2 py-1 text-sm hover:bg-gray-100">H2</button>
          </div>
        </div>
        <textarea
          placeholder="Describe the elevator project in detail. Include number of units, building type, elevator specifications, and any specific requirements..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-900 placeholder-gray-400 h-32"
        />
      </div>

      {/* Technical Requirements */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Technical Requirements & Certifications
        </label>
        <label className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors inline-flex items-center">
          <span className="text-gray-500">📎 Upload file</span>
          {/* <input
            type="file"
            multiple
            onChange={handleTechnicalRequirementsFile}
            className="hidden"
          /> */}
          <input
            type="file"
            multiple
            onChange={(e) => {
              if (!e.target.files) return;
              const filesArray = Array.from(e.target.files); // convert FileList to array
              setFormData((prev: any) => ({
                ...prev,
                technicalRequirementsFiles: [
                  ...(prev.technicalRequirementsFiles || []), // append existing
                  ...filesArray,
                ],
              }));
            }}
          />
        </label>
        <div className="flex flex-wrap gap-2 mt-3">
          {formData.technicalRequirementsFiles &&
            formData.technicalRequirementsFiles.length > 0 &&
            formData.technicalRequirementsFiles.map(
              (file: File, index: number) => (
                <div
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-lg flex items-center gap-2"
                >
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <button
                    onClick={() => handleRemoveTechnicalFile(index)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              )
            )}
        </div>
      </div>

      {/* Elevator Details */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Elevator Type
          </label>

          <div className="relative">
            <select
              className="w-full px-4 py-3 pr-10 bg-blue-50 border border-blue-100 rounded-lg
                 focus:outline-none focus:ring-1 focus:ring-gray-800
                 text-gray-900 appearance-none cursor-pointer"
            >
              <option value="">Select elevator type</option>
              <option value="Hydraulic">Hydraulic</option>
              <option value="raction">Traction (Geared)</option>
              <option value="MRL">MRL (Machine Room-Less)</option>
              <option value="freight">Freight</option>
              <option value="dumbwaiter">Dumbwaiter</option>
            </select>

            {/* Arrow icon */}
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Number of Elevators
          </label>
          <input
            type="text"
            placeholder="01"
            value={formData.numberOfElevators}
            onChange={(e) =>
              setFormData({
                ...formData,
                numberOfElevators: e.target.value,
              })
            }
            className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Capacity
          </label>
          <input
            type="text"
            placeholder="3500 lbs"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({ ...formData, capacity: e.target.value })
            }
            className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Speed
          </label>
          <input
            type="text"
            placeholder="500 FPM"
            value={formData.speed}
            onChange={(e) =>
              setFormData({ ...formData, speed: e.target.value })
            }
            className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-900 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2 border-2 cursor-pointer border-gray-300 text-gray-500 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
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
