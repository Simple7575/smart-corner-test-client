import { ReactElement, useState } from "react";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

export default function useFormSteps(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        setCurrentStep((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
    };

    const previous = () => {
        setCurrentStep((prev) => (prev === 0 ? prev : prev - 1));
    };

    const resetSteps = () => {
        setCurrentStep(0);
    };

    return {
        steps,
        currentStep,
        step: (
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-98"
                key={currentStep}
            >
                {steps[currentStep]}
            </motion.section>
        ),
        next,
        previous,
        resetSteps,
    };
}
