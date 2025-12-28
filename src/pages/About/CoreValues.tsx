import type React from "react"
import { Heart, Users, Lightbulb, Handshake } from "lucide-react"

interface PrincipleCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const PrincipleCard = ({ icon, title, description }: PrincipleCardProps) => (
  <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#F9F9FF] border border-[#EBEBFF] w-full max-w-[340px] shadow-sm">
    <div className="w-12 h-12 rounded-lg bg-[#0B163B] flex items-center justify-center text-white shrink-0">{icon}</div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-[#0B163B] leading-tight">{title}</h3>
      <p className="text-[#4B5563] text-[15px] leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function PrinciplesSection() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#0B163B]">Our Core Values</h2>
          <p className="text-[#4B5563] text-lg">The principles that guide everything we do</p>
        </div>

        <div className="relative">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-x-64 gap-y-20 items-center">
            {/* Top Left */}
            <div className="flex justify-end">
              <PrincipleCard
                icon={<Heart className="w-6 h-6 fill-current" />}
                title="Trust & Safety"
                description="We verify every contractor's licenses, insurance, and credentials. Safety is non-negotiable in the elevator industry."
              />
            </div>

            {/* Top Right */}
            <div className="flex justify-start">
              <PrincipleCard
                icon={<Users className="w-6 h-6" />}
                title="Customer First"
                description="Both requesters and contractors are our customers. We succeed when they succeed in finding each other and completing great projects."
              />
            </div>

            {/* Bottom Left */}
            <div className="flex justify-end">
              <PrincipleCard
                icon={<Lightbulb className="w-6 h-6" />}
                title="Innovation"
                description="We're bringing modern technology to a traditional industry, making it easier for everyone to connect and collaborate."
              />
            </div>

            {/* Bottom Right */}
            <div className="flex justify-start">
              <PrincipleCard
                icon={<Handshake className="w-6 h-6" />}
                title="Excellence"
                description="We maintain high standards for quality, compliance, and professionalism in every interaction on our platform."
              />
            </div>
          </div>

          {/* Central Logo and Connecting Lines (Desktop Only) */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <svg className="absolute w-full h-full overflow-visible" viewBox="0 0 1000 600">
              <path
                d="M 380 150 L 500 150 L 500 300"
                fill="none"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 380 450 L 500 450 L 500 300"
                fill="none"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 620 150 L 500 150 L 500 300"
                fill="none"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 620 450 L 500 450 L 500 300"
                fill="none"
                stroke="#DDD6FE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="500" cy="300" r="4" fill="#DDD6FE" />
              <path d="M 380 150 h 20" fill="none" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 380 450 h 20" fill="none" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 600 150 h 20" fill="none" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 600 450 h 20" fill="none" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            <div className="relative z-10 w-24 h-24 rounded-full bg-[#0B163B] flex items-center justify-center shadow-[0_0_40px_rgba(11,22,59,0.15)] ring-[12px] ring-white">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6H17V8H9.414L17 15.586V18H7V16H14.586L7 8.414V6Z" fill="white" />
                <rect x="15" y="10" width="2" height="2" fill="white" />
                <rect x="7" y="12" width="2" height="2" fill="white" />
              </svg>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-8 items-center">
            <PrincipleCard
              icon={<Heart className="w-6 h-6 fill-current" />}
              title="Trust & Safety"
              description="We verify every contractor's licenses, insurance, and credentials. Safety is non-negotiable in the elevator industry."
            />
            <PrincipleCard
              icon={<Users className="w-6 h-6" />}
              title="Customer First"
              description="Both requesters and contractors are our customers. We succeed when they succeed in finding each other and completing great projects."
            />
            <div className="w-20 h-20 rounded-full bg-[#0B163B] flex items-center justify-center my-4 ring-8 ring-white shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6H17V8H9.414L17 15.586V18H7V16H14.586L7 8.414V6Z" fill="white" />
              </svg>
            </div>
            <PrincipleCard
              icon={<Lightbulb className="w-6 h-6" />}
              title="Innovation"
              description="We're bringing modern technology to a traditional industry, making it easier for everyone to connect and collaborate."
            />
            <PrincipleCard
              icon={<Handshake className="w-6 h-6" />}
              title="Excellence"
              description="We maintain high standards for quality, compliance, and professionalism in every interaction on our platform."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
