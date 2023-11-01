import { MouseEvent } from "react";
import { FieldValues } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

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
            delay: 0.1,
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
                className="absolute top-0 right-0 bottom-0 left-0 bg-slate-500/70 flex items-center justify-center z-10"
            >
                <motion.div
                    variants={modalVariants}
                    className="border border-accent rounded-md px-2 py-4 bg-base-100 max-w-lg flex flex-col items-center"
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
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                When would you purchase a DVD player if you don't already own one?
                            </strong>
                            <p className="text-accent">{formValues.purchaseDVDPlayer}</p>
                        </li>
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                Would you be interested in software that allows you to have control
                                over profanity, nudity, and violence in movies?
                            </strong>
                            <p className="text-accent">{formValues.interestInContentControl}</p>
                        </li>
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                Do you mainly purchase or rent movies you view?
                            </strong>
                            <p className="text-accent">{formValues.typeOfDVDPlayer}</p>
                        </li>
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                How much do you spend renting and/or buying movies per month(in
                                USD)?
                            </strong>
                            <p className="text-accent">{formValues.monthlySpendingOnMovies} $</p>
                        </li>
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                Type your first name, last name and email address
                            </strong>
                            <p className="text-accent">
                                <span className="text-neutral-content">First Name:</span>{" "}
                                {formValues.personalInformation.firstName}
                            </p>
                            <p className="text-accent">
                                <span className="text-neutral-content">Second Name:</span>{" "}
                                {formValues.personalInformation.secondName}
                            </p>
                            <p className="text-accent">
                                <span className="text-neutral-content">Email:</span>{" "}
                                {formValues.personalInformation.email}
                            </p>
                        </li>
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                When is your birthday?
                            </strong>
                            <p className="text-accent">{formValues.birthday.toString()} </p>
                        </li>
                        <li className="border-b border-accent mb-2">
                            <strong className="font-bold text-neutral-content text-md">
                                What is your gender?
                            </strong>
                            <p className="text-accent">{formValues.gender.toString()} </p>
                        </li>
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
