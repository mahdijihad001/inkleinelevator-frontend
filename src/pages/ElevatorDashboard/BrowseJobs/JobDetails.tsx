import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, DollarSign, FileText, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProjectDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectImages = ["https://images.unsplash.com/photo-1766548729658-0ce12fd07af8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1761839258830-81f87b1c6d62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", "https://plus.unsplash.com/premium_photo-1765836892038-f3cdb2dcac02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Elevator Modernization - Tower A</h1>
                <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm font-medium">
                  Modernization
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>123 Main Street, New York, 10001</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>Budget: $150,000 - $200,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="relative h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img
          src={projectImages[currentImageIndex] || "/placeholder.svg"}
          alt={`Project image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Project Description */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Project Description</h2>
          <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
            Complete modernization of 8 passenger elevators in a 35-story office building. This project includes:
          </p>
          <ul className="space-y-2 text-gray-600 text-sm md:text-base ml-4">
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Upgrade to destination dispatch technology</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Install new LED lighting and touchscreen panels</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Replace all motors and drives for improved efficiency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Replace all motors and drives for improved efficiency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-400">•</span>
              <span>Update safety systems to current ASME A17.1 standards</span>
            </li>
          </ul>
        </section>

        {/* Technical Requirements */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Technical Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="bg-gray-50 border-gray-200 p-4 text-center">
              <p className="text-xs md:text-sm font-semibold text-gray-700">ASME A17.1 Certified</p>
            </Card>
            <Card className="bg-gray-50 border-gray-200 p-4 text-center">
              <p className="text-xs md:text-sm font-semibold text-gray-700">IEI Certification</p>
            </Card>
            <Card className="bg-gray-50 border-gray-200 p-4 text-center">
              <p className="text-xs md:text-sm font-semibold text-gray-700">BIM Assurance Required</p>
            </Card>
          </div>
        </section>

        {/* Elevator Specifications */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Elevator Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Elevator Type</p>
              <p className="text-gray-900 font-semibold">Traction (Geared)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Number of Units</p>
              <p className="text-gray-900 font-semibold">8 Elevators</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Capacity</p>
              <p className="text-gray-900 font-semibold">5,500 lbs each</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Power</p>
              <p className="text-gray-900 font-semibold">500 FPM</p>
            </div>
          </div>
        </section>

        {/* Uploaded Photos */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Uploaded Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300">
              <img src="https://images.unsplash.com/photo-1766543497004-2fd76e88f605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" alt="Project photo 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden border-2 border-gray-300 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-blue-500" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300">
              <img src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="Project photo 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300">
              <img src="https://images.unsplash.com/photo-1766469284258-11bf4223e2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" alt="Project photo 3" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold text-gray-700">Photo July</p>
            <p>Photo Aug</p>
          </div>
        </section>

        {/* Uploaded Documents */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Uploaded Documents</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Building_Elevator_Specs.pdf</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <input type="checkbox" className="w-4 h-4" />
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Building_Elevator_Specs.pdf</span>
            </label>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="space-y-3 text-sm md:text-base text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">Metropolitan Property Management LLC</p>
            </div>
            <div>
              <p className="text-gray-600">Contact: Sarah Johnson</p>
            </div>
            <div>
              <p className="text-gray-600">Phone: (212) 555-0187</p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-3 justify-end">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
            Back
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">Quote Bill</Button>
        </div>
      </div>
    </main>
  )
}
