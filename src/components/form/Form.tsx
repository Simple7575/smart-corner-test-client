import { MouseEvent, useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import useFormSteps from "../../hooks/useFormSteps";
import axios from "axios";
// steps
import PurchaseDVDPlayer from "./formSteps/PurchaseDVDPlayer";
import InterestInContentControl from "./formSteps/InterestInContentControl";
import TypeOfDVDPlayer from "./formSteps/TypeOfDVDPlayer";
import PurchaseOrRentPreference from "./formSteps/PurchaseOrRentPreference";
import MonthlySpendingOnMovies from "./formSteps/MonthlySpendingOnMovies";
import PersonalInformation from "./formSteps/PersonalInformation";
import Birthday from "./formSteps/Birthday";
import Gender from "./formSteps/Gender";
import Modal from "../Modal";

const initialFormData = {
    purchaseDVDPlayer: "",
    interestInContentControl: "",
    typeOfDVDPlayer: "",
    purchaseOrRentPreference: "",
    monthlySpendingOnMovies: "",
    personalInformation: "",
    birthday: "",
    gender: "",
};

export default function Form() {
    const form = useForm();
    const { handleSubmit, register, formState, getValues, reset } = form;
    const { errors } = formState;

    const [isMadalOpen, setIsMadalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { steps, step, currentStep, next, previous, resetSteps } = useFormSteps([
        <PurchaseDVDPlayer register={register} errors={errors} />,
        <InterestInContentControl register={register} errors={errors} />,
        <TypeOfDVDPlayer register={register} errors={errors} />,
        <PurchaseOrRentPreference register={register} errors={errors} />,
        <MonthlySpendingOnMovies register={register} errors={errors} />,
        <PersonalInformation register={register} errors={errors} />,
        <Birthday register={register} errors={errors} />,
        <Gender register={register} errors={errors} />,
    ]);

    const isLastStep = currentStep + 1 >= steps.length;

    const handleNext = (data: FieldValues) => {
        if (isLastStep) {
            setIsMadalOpen(true);
        } else {
            next();
        }
    };

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsMadalOpen(false);
    };

    const onSubmit = async (data: FieldValues) => {
        try {
            setServerError("");
            setIsLoading(true);
            const response = await axios.post("http://localhost:5000/save-survey", data);
            setIsLoading(false);
            setSuccessMessage("Survey has been successfully saved.");
            setTimeout(() => {
                reset();
                setIsMadalOpen(false);
                resetSteps();
                setSuccessMessage("");
            }, 3000);
            console.log("Response", response);
        } catch (error) {
            console.log("Error", error);
            if (error instanceof Error) {
                setServerError(error.message);
                setIsLoading(false);
            }
        }
    };

    const formValues = getValues();

    return (
        <>
            <AnimatePresence mode="wait">
                {isMadalOpen && (
                    <Modal
                        formValues={formValues}
                        handleCancel={handleCancel}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        isLoading={isLoading}
                        serverError={serverError}
                        successMessage={successMessage}
                    />
                )}
            </AnimatePresence>
            <form
                className="flex flex-col justify-between items-center h-96 border border-accent rounded-md px-2 py-4 w-128"
                onSubmit={handleSubmit(handleNext)}
            >
                <div className="text-right w-full">{`${currentStep + 1} / ${steps.length}`}</div>
                <AnimatePresence mode="wait">{step}</AnimatePresence>
                <div className="flex gap-x-2">
                    <button
                        className="btn btn-outline btn-accent btn-sm"
                        type="button"
                        onClick={() => previous()}
                    >
                        Back
                    </button>
                    <button className="btn btn-outline btn-accent btn-sm" type="submit">
                        {isLastStep ? "Complete Survey" : "Next"}
                    </button>
                </div>
            </form>
        </>
    );
}
