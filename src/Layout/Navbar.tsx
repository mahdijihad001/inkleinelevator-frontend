import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Mail } from "lucide-react";

// Menu items array
const menuItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/how-it-works", label: "How it works" },
  { path: "/success-stories", label: "Success Stories" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0a1f44] sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#0a2a5a] border-b border-blue-800">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center text-white text-sm">
              <span className="mr-2">⚡</span>
              <span>We will go through all the stages of construction</span>
            </div>
            <div className="hidden sm:flex items-center text-white text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@example.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-teal-500 font-bold text-xs text-center leading-tight">
                    <img src="/logo.png" alt="" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-teal-400"
                      : "text-white hover:text-teal-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-teal-400 p-2 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border-2 border-white text-white hover:bg-white hover:text-[#0a1f44] px-6 py-2 rounded-md font-medium transition-all"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/get-started")}
              className="bg-teal-400 hover:bg-teal-500 text-[#0a1f44] px-6 py-2 rounded-md font-medium transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-teal-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a2a5a]">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#0a1f44] text-teal-400"
                      : "text-white hover:bg-[#0a1f44] hover:text-teal-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0a1f44] w-full px-4 py-2 rounded-md font-medium transition-all"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/get-started");
                  setIsOpen(false);
                }}
                className="bg-teal-400 hover:bg-teal-500 text-[#0a1f44] w-full px-4 py-2 rounded-md font-medium transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;