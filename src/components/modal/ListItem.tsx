import { FieldValues } from "react-hook-form";
import { motion } from "framer-motion";

type props = {
    formValues: FieldValues;
    question: string;
    propKey: string;
    index: number;
};

const liVariants = (index: number) => {
    return {
        hidden: {
            opacity: 0,
            y: -50 * index,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.07,
            },
        },
    };
};

export default function ListItem({ formValues, question, propKey, index }: props) {
    return propKey === "personalInformation" ? (
        <motion.li
            className="border-b border-accent mb-2"
            variants={liVariants(index)}
            initial="hidden"
            animate="visible"
        >
            <strong className="font-bold text-neutral-content text-md">{question}</strong>
            <p className="text-accent">
                <span className="text-neutral-content">First Name:</span>{" "}
                {formValues[propKey].firstName}
            </p>
            <p className="text-accent">
                <span className="text-neutral-content">Second Name:</span>{" "}
                {formValues[propKey].secondName}
            </p>
            <p className="text-accent">
                <span className="text-neutral-content">Email:</span> {formValues[propKey].email}
            </p>
        </motion.li>
    ) : (
        <motion.li
            className="border-b border-accent mb-2"
            variants={liVariants(index)}
            initial="hidden"
            animate="visible"
            custom={index}
        >
            <strong className="font-bold text-neutral-content text-md">{question}</strong>
            <p className="text-accent">{formValues[propKey].toString()}</p>
        </motion.li>
    );
}
