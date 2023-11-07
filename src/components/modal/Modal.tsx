import { MouseEvent } from "react";
import { FieldValues } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import ListItem from "./ListItem";

type props = {
    formValues: FieldValues;
    handleCancel: (e: MouseEvent<HTMLButtonElement>) => void;
    onSubmit: (data: FieldValues) => Promise<void>;
    // change any later
    handleSubmit: any;
    isLoading: boolean;
    serverError: string;
    successMessage: string;
};

const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.2,
        },
    },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: "0px",
    },
    exit: {
        opacity: 0,
        x: "-100vw",
    },
};

const messageVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 0,
    },
};

const questionsList = [
    {
        question: "When would you purchase a DVD player if you don't already own one?",
        propKey: "purchaseDVDPlayer",
    },
    {
        question:
            "Would you be interested in software that allows you to have control over profanity, nudity, and violence in movies?",
        propKey: "interestInContentControl",
    },
    { question: "What type of DVD player do you own?", propKey: "typeOfDVDPlayer" },
    {
        question: "Do you mainly purchase or rent movies you view?",
        propKey: "purchaseOrRentPreference",
    },
    {
        question: "How much do you spend renting and/or buying movies per month(in USD)?",
        propKey: "monthlySpendingOnMovies",
    },
    {
        question: "Type your first name, last name and email address",
        propKey: "personalInformation",
    },
    { question: "When is your birthday?", propKey: "birthday" },
    { question: "What is your gender?", propKey: "gender" },
];

export default function Modal({
    formValues,
    handleCancel,
    handleSubmit,
    onSubmit,
    isLoading,
    serverError,
    successMessage,
}: props) {
    return (
        <>
            <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-0 right-0 bottom-0 left-0 h-screen bg-slate-500/70 flex items-center justify-center z-10"
            >
                <motion.div
                    variants={modalVariants}
                    className="border border-accent rounded-md px-2 py-4 bg-base-100 max-w-lg flex flex-col items-center smmax:w-80"
                >
                    <h4 className="font-bold text-center text-neutral-content text-2xl mb-3">
                        Are you sure, you want to submit the survey?
                    </h4>
                    <AnimatePresence>
                        {serverError ? (
                            <motion.p variants={messageVariants} className="text-error">
                                {serverError}
                            </motion.p>
                        ) : null}
                        {successMessage ? (
                            <motion.p variants={messageVariants} className="text-success">
                                {successMessage}
                            </motion.p>
                        ) : null}
                    </AnimatePresence>
                    <ul className="max-h-98 overflow-y-scroll">
                        <AnimatePresence mode="wait">
                            {questionsList.map((q, index) => (
                                <ListItem
                                    formValues={formValues}
                                    {...q}
                                    key={index}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </ul>

                    <div className="flex gap-x-2">
                        <button
                            className="btn btn-outline btn-accent btn-sm"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-outline btn-accent btn-sm transition-all"
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                        >
                            {isLoading ? <span className="loading loading-spinner"></span> : null}
                            Submit
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
