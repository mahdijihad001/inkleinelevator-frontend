export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "Group.png",
      title: "Post Your Elevator Job",
      description:
        "Property managers post detailed elevator projects. Licensed companies browse opportunities matching their expertise and service area.",
    },
    {
      number: "02",
      icon: "Group1.png",
      title: "Compare Bids",
      description:
        "Elevator companies submit competitive bids. Compare quotes, certifications, safety records, and past performance side-by-side.",
    },
    {
      number: "03",
      icon: "Group2.png",
      title: "Complete the Project",
      description:
        "Work begins with full compliance tracking. Milestone payments ensure quality and satisfaction throughout the project lifecycle.",
    },
  ]

  return (
    <section className="py-24 bg-[#F8F9FF] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#37d7d9]" />
            <div className="w-2 h-2 rounded-full border border-[#37d7d9]" />
            <span className="text-[#37d7d9] text-xs font-medium uppercase tracking-widest">
              construction-tech Company
            </span>
          </div>

          <div className="relative inline-block">
            <h2 className="text-[120px] font-bold text-[#000]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0">
              Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">How In-Klein Elevators Works</h3>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-0 w-full h-[1px] border-t border-dashed border-gray-300 z-0">
            <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300" />
            <div className="absolute top-1/2 left-[85%] -translate-y-1/2 w-2 h-2 rounded-full bg-gray-300" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start pt-24 md:pt-32">
                {/* <div className="mb-8 p-3 bg-white relative">{step.icon}</div> */}
                <img className="mb-8 p-3 relative" src={`/${step.icon}`} alt="" />

                <div className="relative">
                  <span className="text-8xl font-bold text-[#000]/5 absolute -top-12 left-24 select-none -z-10">
                    {step.number}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-500 leading-relaxed max-w-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
