import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function Gender({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">What is your gender?</h4>
            <div className="flex flex-col w-max relative">
                <p className="text-error absolute -top-6 w-max">
                    {errors.gender?.message?.toString()}
                </p>
                <label htmlFor="male" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        id="male"
                        value="Male"
                        {...register("gender", {
                            required: "Please select one of the options.",
                        })}
                    />
                    Male.
                </label>
                <label htmlFor="female" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        id="female"
                        value="Female"
                        {...register("gender")}
                    />
                    Female.
                </label>
            </div>
        </>
    );
}
