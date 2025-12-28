import React from "react";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#696868] text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/footer.jpg')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative max-w-[1500px] mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Left - Main Heading and Buttons */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-8">
              Connecting construction needs<br />
              with certified expertise.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2dd4bf] text-black px-6 py-3 rounded font-medium hover:bg-[#2dd4bf]/90 transition-colors">
                Get started
              </button>
              <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Address */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Address</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kingstone ---<br />
                Deniel street office<br />
                Berlin, Germany
              </p>
            </div>

            {/* Say Hello */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Say Hello</h3>
              <p className="text-gray-400 text-sm mb-1">hello@design.com</p>
              <p className="text-gray-400 text-sm">+268 368 3158</p>
              
              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
                  <Youtube size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">How it works</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a>
            </nav>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;