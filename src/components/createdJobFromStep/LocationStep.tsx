/* eslint-disable @typescript-eslint/no-explicit-any */

interface LocationStepProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function LocationStep({
  formData,
  setFormData,
  onNext,
  onBack,
}: LocationStepProps) {
  return (
    <div>
      {/* Heading */}

      <div className="mb-8 ">
        <h2 className="text-xl font-medium text-gray-900">Location</h2>
        <p className="text-[#717182] text-base mt-2 border-b border-gray-200 inline-block shadow-xs  pb-3">
          Where will the work take place?
        </p>
      </div>
      {/* Address */}
      <div className="mb-6 mt-10">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Address
        </label>
        <input
          type="text"
          placeholder="Metropolitan Property Management LLC"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Street Address */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Street Address
        </label>
        <input
          type="text"
          placeholder="123 Main Street"
          value={formData.streetAddress}
          onChange={(e) =>
            setFormData({ ...formData, streetAddress: e.target.value })
          }
          className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* City and ZIP Code */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="New York"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            placeholder="10001"
            value={formData.zipCode}
            onChange={(e) =>
              setFormData({ ...formData, zipCode: e.target.value })
            }
            className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 placeholder-gray-400"
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
          className="px-6 py-2 bg-gray-900 cursor-pointer text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
