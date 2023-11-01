import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function InterestInContentControl({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">
                Would you be interested in software that allows you to have control over profanity,
                nudity, and violence in movies?
            </h4>
            <div className="flex flex-col w-max relative">
                <p className="text-error absolute -top-6 w-max">
                    {errors.interestInContentControl?.message?.toString()}
                </p>

                <label htmlFor="yes" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        value="yes"
                        id="yes"
                        {...register("interestInContentControl", {
                            required: "Please select one of the options.",
                        })}
                    />
                    Yes.
                </label>
                <label htmlFor="no" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        value="no"
                        id="no"
                        {...register("interestInContentControl")}
                    />
                    No.
                </label>
                <label htmlFor="not-sure" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        value="not-sure"
                        id="not-sure"
                        {...register("interestInContentControl")}
                    />
                    Not sure.
                </label>
            </div>
        </>
    );
}
