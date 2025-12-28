import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log('Login submitted', { email, password, rememberMe });
  };

  return (
      <div className='flex min-h-screen'>
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="/LogIn.png"
            alt="Elevator maintenance"
            className="w-full h-full object-cover"
          />
          {/* Logo Overlay */}
          <div className="absolute top-8 left-8">
            <div className="bg-white px-4 py-2 rounded">
              <span className="text-gray-900 font-bold text-lg">IN-KLEIN</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
          <div className="max-w-md w-full">
            {/* Welcome Message */}
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-8">
                Hello 👋 Welcome Back !
              </p>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
              <p className="text-gray-500 text-sm">
                Sign in to your In-Klein Elevator account
              </p>
            </div>

            {/* Login Form */}
            <div className="space-y-5">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded text-gray-900 focus:ring-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button className="text-sm text-red-500 hover:text-red-600 font-medium">
                  Forgot Password ?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Log In
              </button>

              {/* Registration Link */}
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button className="text-gray-900 font-medium hover:underline">
                  Registration
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;