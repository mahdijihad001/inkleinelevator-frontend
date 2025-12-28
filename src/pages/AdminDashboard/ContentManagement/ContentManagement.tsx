import { useState } from "react";
import { Plus, Bold, Italic, Underline, List, ListOrdered, AlignLeft, Link2 } from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-2">Hero Section Content</h2>
      <p className="text-sm text-gray-600 mb-6">Main landing page content (editable now)</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
          <input
            type="text"
            placeholder="Enter tagline (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Main Title</label>
          <textarea
            placeholder="This section showcases the hero, essential top-tier elevator solutions, fusing quality with expertise to serve you. At gcore, We take pride in high-rise commercial buildings and complex elevator projects."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
          <input
            type="text"
            placeholder="Enter a subtitle"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary CTA Button</label>
            <input
              type="text"
              placeholder="Request Projects #1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary CTA Button</label>
            <input
              type="text"
              placeholder="Secondary Button"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reset to Default
        </button>
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-2">About Section Content</h2>
      <p className="text-sm text-gray-600 mb-6">Content to be displayed in the about us section</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section Label</label>
          <input
            type="text"
            placeholder="About Us"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="At G-tex Elevator, our values to contribute..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
          <input
            type="text"
            placeholder="See contact us experience"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Statistics Number</label>
            <input
              type="text"
              placeholder="50+"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Statistics Label</label>
            <input
              type="text"
              placeholder="Satisfied clients"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reset to Default
        </button>
      </div>
    </div>
  );
};

// Process Steps Component
const ProcessSteps = () => {
  const steps = [1, 2, 3];

  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-2">How It Works Section</h2>
      <p className="text-sm text-gray-600 mb-6">Provide steps that outline your process</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section Label</label>
          <input
            type="text"
            placeholder="Elevator work (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
          <input
            type="text"
            placeholder="Enter section title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Process Steps</label>
        
        {steps.map((step, index) => (
          <div key={step} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-red-500 border border-red-500 rounded px-2 py-1">
                Step {index + 1}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Step Title</label>
                <input
                  type="text"
                  placeholder="Enter step (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Step Description</label>
                <textarea
                  placeholder="At G-tex Elevator, our values to contribute..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reset to Default
        </button>
      </div>
    </div>
  );
};

// Why Us Section Component
const WhyUsSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-2">Why Us?/For Section</h2>
      <p className="text-sm text-gray-600 mb-6">Manage what sets your service apart</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section Label</label>
          <input
            type="text"
            placeholder="Provide services from trusted sub"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
          <input
            type="text"
            placeholder="Enter the title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section Subtitle</label>
          <input
            type="text"
            placeholder="Write a short compelling thought"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>
      </div>

      {/* Job Requisitions */}
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <h3 className="font-medium text-gray-700 mb-4">Job Requisitions</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Card Title</label>
            <input
              type="text"
              placeholder="Enter Your Answer (Ai)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Card Subtitle</label>
            <input
              type="text"
              placeholder="G-r (Ans Elevator, our values to contribute..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Bullet Points</label>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <button className="p-1 hover:bg-gray-100 rounded"><Bold size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><Italic size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><Underline size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><List size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><ListOrdered size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><AlignLeft size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><Link2 size={14} /></button>
              <span className="ml-auto">15 Rich Text</span>
            </div>
            <textarea
              placeholder="Describe key elements in a clean, double-clicked or click for adding new values, and describe, save bullet(or very specific business communication)"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Contractors */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium text-gray-700 mb-4">Contractors</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Card Title</label>
            <input
              type="text"
              placeholder="Enter Your Answer (Ai)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Card Subtitle</label>
            <input
              type="text"
              placeholder="G-r (Ans Elevator, our values to contribute..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Bullet Points</label>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <button className="p-1 hover:bg-gray-100 rounded"><Bold size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><Italic size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><Underline size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><List size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><ListOrdered size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><AlignLeft size={14} /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><Link2 size={14} /></button>
              <span className="ml-auto">15 Rich Text</span>
            </div>
            <textarea
              placeholder="Describe key elements in a clean, double-clicked or click for adding new values, and describe, save bullet(or very specific business communication)"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reset to Default
        </button>
      </div>
    </div>
  );
};

// FAQs Component
const FAQsSection = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-sm text-gray-600">Manage answers of frequently asked questions</p>
        </div>
        <button className="mt-4 sm:mt-0 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm flex items-center gap-2">
          <Plus size={16} />
          Add New FAQ
        </button>
      </div>

      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg p-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                <input
                  type="text"
                  placeholder="How does bidding work?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ans</label>
                <textarea
                  placeholder="As in your service, direct link"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-gray-700 mb-4">Contact Information</h3>
        <p className="text-sm text-gray-600 mb-4">Help people to swiftly contact (placeholder)</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              placeholder="+1 000 0000000"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="hello@inklein-elevatorproject.xyz"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            placeholder="www.inklein-elevatorproject.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
          <input
            type="text"
            placeholder="123 Street of Noun, New York, NY 10001"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reset to Default
        </button>
      </div>
    </div>
  );
};

// Upload Media Component
const UploadMedia = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">Upload Media</h2>
          <p className="text-sm text-gray-600">Upload any Media</p>
        </div>
        <button className="mt-4 sm:mt-0 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm flex items-center gap-2">
          <Plus size={16} />
          Add New FAQ
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Area</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>Hero Section</option>
            <option>About Section</option>
            <option>Process Steps</option>
            <option>Why Us Section</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 md:p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
            <div className="flex flex-col items-center justify-center">
              <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-600 mb-1">
                <span className="text-blue-600 underline">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (Max: 800x400px)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Content Management Component
const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState("hero");

  const tabs = [
    { id: "hero", label: "Hero Section" },
    { id: "about", label: "About Section" },
    { id: "process", label: "Process Steps" },
    { id: "whyus", label: "Why Us For" },
    { id: "faqs", label: "FAQ & Contact" },
    { id: "media", label: "Upload Media" }
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold mb-1">Content Management</h1>
          <p className="text-sm text-gray-600">Manage all landing page content from one place</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-full shadow-sm p-1.5 mb-6 inline-flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#1a2332] text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "hero" && <HeroSection />}
          {activeTab === "about" && <AboutSection />}
          {activeTab === "process" && <ProcessSteps />}
          {activeTab === "whyus" && <WhyUsSection />}
          {activeTab === "faqs" && <FAQsSection />}
          {activeTab === "media" && <UploadMedia />}
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;