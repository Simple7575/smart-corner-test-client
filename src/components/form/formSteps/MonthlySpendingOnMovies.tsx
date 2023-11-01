import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function MonthlySpendingOnMovies({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">
                How much do you spend renting and/or buying movies per month(in USD)?
            </h4>

            <label className="relative">
                <p className="text-error absolute -top-7">
                    {errors.monthlySpendingOnMovies?.message?.toString()}
                </p>
                <input
                    className="input input-accent input-sm w-full text-accent"
                    type="number"
                    {...register("monthlySpendingOnMovies", {
                        valueAsNumber: true,
                        required: "This field is required.",
                        validate: (value) => value >= 0 || "Only positive numbers are acceptable.",
                    })}
                />
            </label>
        </>
    );
}
