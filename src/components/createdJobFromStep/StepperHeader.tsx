interface StepperHeaderProps {
  currentStep: number;
  steps: string[];
}

export default function StepperHeader({
  currentStep,
  steps,
}: StepperHeaderProps) {
  return (
    <div className="">
      {/* Steps tabs */}
      <div className="flex justify-between items-center gap-4 text-sm md:text-sm">
        {steps.map((step, index) => (
          <div key={index} className="flex-1">
            <button
              className={`w-full text-left font-medium transition-colors  ${
                index === currentStep
                  ? "text-gray-900"
                  : index < currentStep
                  ? "text-gray-900"
                  : "text-gray-400"
              }`}
            >
              {step}
            </button>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 flex bg-gray-200">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-1 rounded-full transition-colors ${
              index <= currentStep ? "bg-gray-900" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
