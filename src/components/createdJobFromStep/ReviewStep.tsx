/* eslint-disable @typescript-eslint/no-explicit-any */

import { MapPin, DollarSign, FileIcon } from "lucide-react";

interface ReviewStepProps {
  formData: any;
  onBack: () => void;
  onSubmit: () => void;
}

export default function ReviewStep({
  formData,
  onBack,
  onSubmit,
}: ReviewStepProps) {
  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Review</h2>
        <p className="text-gray-500 mt-2">
          Review your job post before publishing.
        </p>
      </div>

      {/* Job Title and Badge */}
      <div className="mb-1 pb-2 ">
        <div className="flex items-start justify-between  ">
          <div className="flex justify-items-center gap-4 ">
            <h3 className="text-2xl font-medium text-gray-900 mb-1 py-2">
              {formData.jobTitle || "No job title"}
            </h3>
            {formData.serviceType && (
              <div className="inline-flex items-center justify-center bg-[#D5FDFF] text-gray-900 px-3 py-2 rounded-full text-sm font-medium">
                {formData.serviceType}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Location and Budget */}
      <div className=" pb-6 ">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {(formData.streetAddress || formData.city || formData.zipCode) && (
            <div className="flex gap-2">
              <MapPin
                size={20}
                className="text-[#3B4861] flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-[#3B4861] text-md">
                  {formData.streetAddress && formData.streetAddress}
                  {formData.streetAddress && formData.city && ", "}
                  {formData.city && formData.city}
                  {(formData.streetAddress || formData.city) &&
                    formData.zipCode &&
                    ", "}
                  {formData.zipCode && formData.zipCode}
                </p>
              </div>
            </div>
          )}
          {formData.estimatedBudget && (
            <div className="flex gap-2">
              <DollarSign
                size={20}
                className="text-gray-600 flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-gray-700">
                  Budget: {formData.estimatedBudget}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-4">
        {formData.description && (
          <div className="mb-8 pb-6 ">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Project Description
            </h4>
            <p className="text-[#0A0A0A] mt-6 text-base">
              {formData.description}
            </p>
          </div>
        )}
      </div>
      {/* Technical Requirements */}

      {formData.technicalRequirementsFiles &&
        formData.technicalRequirementsFiles.length > 0 && (
          <div className="mb-8 pb-6 ">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Technical Requirements Files
            </h4>
            <div className="flex flex-wrap gap-2">
              {formData.technicalRequirementsFiles.map(
                (file: File, i: number) => (
                  <div
                    key={i}
                    className="  bg-[#ECEEF2]  px-3 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FileIcon size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">{file.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}

      {/* Elevator Specifications */}
      {(formData.elevatorType ||
        formData.numberOfElevators ||
        formData.capacity ||
        formData.speed) && (
        <div className="mb-8 pb-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            Elevator Specifications
          </h4>

          <div className="grid grid-cols-1 gap-3">
            {" "}
            {/* one column for each row */}
            {formData.elevatorType && (
              <div className="flex justify-between bg-pink-50 px-4 py-2 rounded">
                <span className="text-gray-500 text-sm">Elevator Type:</span>
                <span className="text-gray-900 font-semibold">
                  {formData.elevatorType}
                </span>
              </div>
            )}
            {formData.numberOfElevators && (
              <div className="flex justify-between  px-4 py-2 rounded">
                <span className="text-gray-500 text-sm">Number of Units:</span>
                <span className="text-gray-900 font-semibold">
                  {formData.numberOfElevators} {""}Elevators
                </span>
              </div>
            )}
            {formData.capacity && (
              <div className="flex justify-between  px-4 py-2 rounded">
                <span className="text-gray-500 text-sm">Capacity:</span>
                <span className="text-gray-900 font-semibold">
                  {formData.capacity} lbs each
                </span>
              </div>
            )}
            {formData.speed && (
              <div className="flex justify-between  px-4 py-2 rounded">
                <span className="text-gray-500 text-sm">Speed:</span>
                <span className="text-gray-900 font-semibold">
                  {formData.speed} FPM
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Uploaded Photos */}
      {formData.photos && formData.photos.length > 0 && (
        <div className="mb-8 pb-6 ">
          <h4 className="text-lg font-medium text-gray-900 mb-6">
            Uploaded Photos
          </h4>
          <div className="flex gap-2 flex-wrap">
            {formData.photos.map((photo: File | string, i: number) => (
              <div key={i} className="relative">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  {typeof photo === "string" ? (
                    <img
                      src={photo}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Uploaded Documents */}
      {formData.documents && formData.documents.length > 0 && (
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h4 className="text-lg font-medium text-gray-900 mb-6">
            Uploaded Documents
          </h4>
          <div className="flex flex-wrap gap-2">
            {formData.documents.map((doc: any, i: number) => (
              <div
                key={i}
                className="bg-white border border-gray-300 px-3 py-2 rounded-lg flex items-center gap-2"
              >
                <FileIcon size={16} className="text-gray-600" />
                <span className="text-sm text-gray-700">{doc.name || doc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Publish Job
        </button>
      </div>
    </div>
  );
}
