import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export interface StepProps {
  children: ReactNode;
}

export function Step({ children }: StepProps) {
  return <div className="space-y-3">{children}</div>;
}

interface StepperProps {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  className?: string;
}

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = 'Previous',
  nextButtonText = 'Next',
  className = '',
}: StepperProps) {
  const steps = React.Children.toArray(children).filter(React.isValidElement);
  const totalSteps = steps.length;
  const [currentStep, setCurrentStep] = useState(Math.max(1, Math.min(initialStep, totalSteps)));
  const [direction, setDirection] = useState(1);

  const goToStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > totalSteps) return;
    setDirection(stepNumber > currentStep ? 1 : -1);
    setCurrentStep(stepNumber);
    if (onStepChange) onStepChange(stepNumber);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    } else {
      if (onFinalStepCompleted) onFinalStepCompleted();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  const currentStepChild = steps[currentStep - 1];

  return (
    <div className={`space-y-4 rounded-2xl bg-[#352044]/40 border border-[#E9C7D4]/15 p-5 ${className}`}>
      {/* Step Indicators Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E9C7D4]/10">
        <div className="flex items-center gap-2">
          {steps.map((_, index) => {
            const stepNum = index + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <button
                key={stepNum}
                onClick={() => goToStep(stepNum)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#6D4AFF] text-white font-bold ring-2 ring-[#E9C7D4]/40 shadow-md'
                    : isCompleted
                    ? 'bg-[#C98FA8] text-[#24152F] font-semibold'
                    : 'bg-[#24152F] text-[#8D6A91] border border-[#E9C7D4]/15 hover:text-[#F8F5F2]'
                }`}
                aria-label={`Go to step ${stepNum}`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : stepNum}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-[#C98FA8]">
          Phase {currentStep} of {totalSteps}
        </span>
      </div>

      {/* Step Content with AnimatePresence */}
      <div className="min-h-[110px] overflow-hidden py-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 24 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {currentStepChild}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stepper Navigation Buttons */}
      <div className="flex items-center justify-between pt-3 border-t border-[#E9C7D4]/10">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
            currentStep === 1
              ? 'opacity-40 cursor-not-allowed text-[#8D6A91]'
              : 'bg-[#24152F] hover:bg-[#352044] text-[#E9C7D4] border border-[#E9C7D4]/15 cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{backButtonText}</span>
        </button>

        <button
          onClick={handleNext}
          className="inline-flex items-center gap-1 px-4 py-1.5 rounded-xl text-xs font-semibold bg-[#6D4AFF] hover:bg-[#5b3be0] text-white shadow-md shadow-[#6D4AFF]/25 transition-all cursor-pointer"
        >
          <span>{currentStep === totalSteps ? 'Completed' : nextButtonText}</span>
          {currentStep < totalSteps && <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
