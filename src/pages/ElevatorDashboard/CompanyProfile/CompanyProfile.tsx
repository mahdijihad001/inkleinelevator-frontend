import React, { useState } from 'react';
import { Star, Plus, CheckCircle2, Circle, X } from 'lucide-react';

interface CompanyProfileProps {}

interface PortfolioCardProps {
  image: string;
  title: string;
  status: string;
  projectValue: string;
  completedDate: string;
  description: string;
}

interface CompanyData {
  companyName: string;
  licenseNumber: string;
  companyDescription: string;
  serviceTypes: string[];
  yearFounded: string;
  numberOfEmployees: string;
  phoneNumber: string;
  email: string;
  website: string;
  businessAddress: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  status,
  projectValue,
  completedDate,
  description,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-32 h-32 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-gray-900 leading-tight">
              {title}
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium whitespace-nowrap self-start">
              {status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
            <span>Project Value: {projectValue}</span>
            <span className="hidden sm:inline">•</span>
            <span>Completed: {completedDate}</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const EditableForm: React.FC<{
  data: CompanyData;
  onSave: (data: CompanyData) => void;
  onCancel: () => void;
}> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState<CompanyData>(data);
  const [newServiceType, setNewServiceType] = useState('');

  const handleChange = (field: keyof CompanyData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addServiceType = () => {
    if (newServiceType.trim() && !formData.serviceTypes.includes(newServiceType.trim())) {
      handleChange('serviceTypes', [...formData.serviceTypes, newServiceType.trim()]);
      setNewServiceType('');
    }
  };

  const removeServiceType = (type: string) => {
    handleChange('serviceTypes', formData.serviceTypes.filter(t => t !== type));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Information</h3>
        <p className="text-sm text-gray-500 mb-6">Your company's public profile information</p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Number
              </label>
              <input
                type="text"
                value={formData.licenseNumber}
                onChange={(e) => handleChange('licenseNumber', e.target.value)}
                className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Description
            </label>
            <textarea
              value={formData.companyDescription}
              onChange={(e) => handleChange('companyDescription', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <input
              type="text"
              value={newServiceType}
              onChange={(e) => setNewServiceType(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addServiceType())}
              placeholder="Enter service Type"
              className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.serviceTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs"
                >
                  {type}
                  <button
                    type="button"
                    onClick={() => removeServiceType(type)}
                    className="hover:text-gray-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year Founded
              </label>
              <input
                type="text"
                value={formData.yearFounded}
                onChange={(e) => handleChange('yearFounded', e.target.value)}
                className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="text"
                value={formData.numberOfEmployees}
                onChange={(e) => handleChange('numberOfEmployees', e.target.value)}
                className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
        <p className="text-sm text-gray-500 mb-6">Your company's public profile information</p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-blue-50 border border-r-0 border-blue-100 rounded-l-md text-sm text-gray-700">
                  🇺🇸 +1
                </span>
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  className="flex-1 px-3 py-2 bg-blue-50 border border-blue-100 rounded-r-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="text"
              value={formData.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Address
            </label>
            <input
              type="text"
              value={formData.businessAddress}
              onChange={(e) => handleChange('businessAddress', e.target.value)}
              className="w-full px-3 py-2 bg-blue-50 border border-blue-100 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#1e293b] text-white rounded-md text-sm font-medium hover:bg-[#0f172a] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

const CompanyProfile: React.FC<CompanyProfileProps> = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'portfolio'>('details');
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData>({
    companyName: 'Elite Elevator Solutions',
    licenseNumber: 'EL-12345-NY',
    companyDescription: 'Elite Elevator Solutions has been providing top-tier elevator installation, modernization, and maintenance services for over 25 years. We specialize in high-rise commercial buildings and complex modernization projects.',
    serviceTypes: ['Repairing', 'New Installation'],
    yearFounded: '1998',
    numberOfEmployees: '45',
    phoneNumber: '(212) 555-0123',
    email: 'contact@eliteelevators.com',
    website: 'www.eliteelevators.com',
    businessAddress: '123 Industrial Pkwy, New York, NY 10001',
  });

  const handleSave = (data: CompanyData) => {
    setCompanyData(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2 sm:mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Company Profile</h1>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-[#1e293b] text-white px-4 sm:px-6 py-2 rounded-md text-sm font-medium hover:bg-[#0f172a] transition-colors w-full sm:w-auto"
              >
                Edit Profile
              </button>
            )}
          </div>
          <p className="text-gray-500 text-sm">Your company's public profile information</p>
        </div>

        {isEditing ? (
          /* Edit Mode */
          <EditableForm
            data={companyData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          /* View Mode */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Company Logo Card */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 text-center mb-1">
                    {companyData.companyName}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">Elevator Maintenance & Repair</p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">4.8</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">(127 reviews)</span>
                  </div>
                  <button className="w-full bg-[#1e293b] text-white py-2 rounded-md text-sm font-medium hover:bg-[#0f172a] transition-colors flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Upload Logo
                  </button>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">AWS API Certified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">ISO Certification</span>
                  </div>
                  <div className="flex items-center">
                    <Circle className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-400">State License</span>
                  </div>
                  <button className="flex items-center text-[#1e293b] text-sm font-medium hover:text-[#0f172a] transition-colors mt-4">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Certificate
                  </button>
                </div>
              </div>

              {/* Service Types */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Service Types</h3>
                <div className="flex flex-wrap gap-2">
                  {companyData.serviceTypes.map((type) => (
                    <span
                      key={type}
                      className="bg-[#1e293b] text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                {/* Tabs */}
                <div className="border-b border-gray-200 px-4 sm:px-6">
                  <div className="flex space-x-4 sm:space-x-8">
                    <button
                      onClick={() => setActiveTab('details')}
                      className={`py-3 sm:py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === 'details'
                          ? 'border-[#1e293b] text-[#1e293b]'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Company Details
                    </button>
                    <button
                      onClick={() => setActiveTab('portfolio')}
                      className={`py-3 sm:py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === 'portfolio'
                          ? 'border-[#1e293b] text-[#1e293b]'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Portfolio
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6">
                  {activeTab === 'details' && (
                    <div className="space-y-6">
                      {/* Basic Information */}
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-4">Basic Information</h3>
                        <p className="text-sm text-gray-500 mb-4">Your company's public profile information</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                            <input
                              type="text"
                              value={companyData.companyName}
                              readOnly
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                            <input
                              type="text"
                              value={companyData.licenseNumber}
                              readOnly
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                          <textarea
                            value={companyData.companyDescription}
                            readOnly
                            rows={4}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-700"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Year Founded</label>
                            <input
                              type="text"
                              value={companyData.yearFounded}
                              readOnly
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                            <input
                              type="text"
                              value={companyData.numberOfEmployees}
                              readOnly
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <p className="text-sm text-gray-500 mb-4">Your company's public profile information</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <div className="flex">
                              <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-sm text-gray-700">
                                🇺🇸 +1
                              </span>
                              <input
                                type="text"
                                value={companyData.phoneNumber}
                                readOnly
                                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-r-md text-sm text-gray-900"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                              type="email"
                              value={companyData.email}
                              readOnly
                              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                          <input
                            type="url"
                            value={companyData.website}
                            readOnly
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                          <input
                            type="text"
                            value={companyData.businessAddress}
                            readOnly
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'portfolio' && (
                    <div className="space-y-4">
                      <PortfolioCard
                        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80"
                        title="Manhattan Office Tower Modernization"
                        status="Modernization"
                        projectValue="$2.3M"
                        completedDate="2018"
                        description="Successfully completed a total lift modernization with seismic retrofit for safety. A deluxe cabin installation. 510 floors."
                      />
                      <PortfolioCard
                        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80"
                        title="Manhattan Office Tower Modernization"
                        status="Modernization"
                        projectValue="$2.3M"
                        completedDate="2018"
                        description="Successfully completed a total lift modernization with seismic retrofit for safety. A deluxe cabin installation. 510 floors."
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;