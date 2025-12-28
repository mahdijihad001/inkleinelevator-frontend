import React, { useState } from 'react';
import { User, Briefcase } from 'lucide-react';

const Signup: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'hire' | 'work' | null>(null);

  const handleContinue = () => {
    if (selectedOption) {
      console.log('Selected option:', selectedOption);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-bold text-xl">IN-KLEIN</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center px-8 py-12">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
            <p className="text-gray-500 text-sm">
              Choose how you want to use the platform
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {/* I want to hire */}
            <button
              onClick={() => setSelectedOption('hire')}
              className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-start gap-4 ${
                selectedOption === 'hire'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className="flex-shrink-0">
                <User className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">I want to hire</div>
                <div className="text-sm text-gray-500">Find and hire the professionals</div>
              </div>
            </button>

            {/* I want to work */}
            <button
              onClick={() => setSelectedOption('work')}
              className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-start gap-4 ${
                selectedOption === 'work'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className="flex-shrink-0">
                <Briefcase className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">I want to work</div>
                <div className="text-sm text-gray-500">Find jobs and grow your business</div>
              </div>
            </button>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedOption}
            className={`w-full py-3 rounded-lg font-medium transition-colors mb-4 ${
              selectedOption
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button className="text-gray-900 font-medium hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;