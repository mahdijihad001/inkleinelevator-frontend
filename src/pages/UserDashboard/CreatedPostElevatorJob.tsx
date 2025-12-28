import BasicsStep from "@/components/createdJobFromStep/BasicsStep";
import DetailsStep from "@/components/createdJobFromStep/DetailsStep";
import LocationStep from "@/components/createdJobFromStep/LocationStep";
import ReviewStep from "@/components/createdJobFromStep/ReviewStep";
import StepperHeader from "@/components/createdJobFromStep/StepperHeader";
import UploadDocumentsStep from "@/components/createdJobFromStep/UploadDocumentsStep";
import { useState } from "react";

export default function CreatedPostElevatorJob() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    jobTitle: "",
    serviceType: "",
    description: "",
    technicalRequirements: [],
    elevatorType: "",
    numberOfElevators: "",
    capacity: "",
    speed: "",
    address: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    photos: [],
    documents: [],
    estimatedBudget: "",
  });

  const steps = ["Basics", "Details", "Location", "Upload Documents", "Review"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicsStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 1:
        return (
          <DetailsStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <LocationStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <UploadDocumentsStep
            formData={formData}
            setFormData={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <ReviewStep
            formData={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">
              Post a New Job
            </h1>
            <p className="text-[#717182] mt-2 text-base">
              Describe your project to find the perfect professional.
            </p>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="p-6">
        <StepperHeader currentStep={currentStep} steps={steps} />

        {/* Content */}
        <div className="mt-8">{renderStep()}</div>
      </div>
    </div>
  );
}
