import { Linkedin, Facebook, Youtube, ArrowRight } from "lucide-react"

const Banner = () => {
  return (
    <div className="bg-[#0A1A3A] min-h-screen">
      <div className="relative w-full flex items-center">
        {/* Main Content Container */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1500px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Section */}
            <div className="text-white py-12 lg:py-20 relative">
              {/* Social Media Icons - Vertical Left Side with "FOLLOW US" */}
              <div className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
                <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <div className="h-8 w-px bg-teal-400 my-1"></div>
                <span className="text-white text-xs font-medium tracking-widest [writing-mode:vertical-lr] rotate-180">
                  FOLLOW US
                </span>
              </div>

              {/* Mobile Social Icons - Horizontal */}
              <div className="flex lg:hidden gap-4 mb-8">
                <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-teal-400 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {/* Small Title */}
              <p className="text-teal-400 text-sm font-medium mb-6 tracking-wide">in-Klein Elevators</p>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Connect with Licensed Elevator Companies & Technicians.
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                The premier marketplace for elevator installation, modernization, maintenance, and repair. Trusted by
                property managers and building owners nationwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-[#0a1f44] px-6 py-3 rounded-md font-semibold hover:bg-teal-400 hover:text-[#0a1f44] transition-all flex items-center justify-center gap-2">
                  Post an Elevator job
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-md font-semibold hover:bg-teal-400 hover:text-[#0a1f44] transition-all flex items-center justify-center gap-2">
                  Find Elevator Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-64 sm:h-96 top-16 lg:h-full hidden lg:block">
              <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-none">
                <img
                  src="/banner.png"
                  alt="Elevator Technician at Work"
                  className="w-full h-full object-cover transform"
                />
                {/* Gradient Overlay for better text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
