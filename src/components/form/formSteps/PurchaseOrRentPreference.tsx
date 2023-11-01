import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function PurchaseOrRentPreference({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">
                Do you mainly purchase or rent movies you view?
            </h4>
            <div className="flex flex-col w-max relative">
                <p className="text-error absolute -top-6 w-max">
                    {errors.purchaseOrRentPreference?.message?.toString()}
                </p>

                <label htmlFor="purchase" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        id="purchase"
                        value="purchase"
                        {...register("purchaseOrRentPreference", {
                            required: "Please select one of the options.",
                        })}
                    />
                    Purchase.
                </label>
                <label htmlFor="rent" className="inline-flex items-center cursor-pointer">
                    <input
                        className="radio radio-sm radio-accent mx-1"
                        type="radio"
                        id="rent"
                        value="rent"
                        {...register("purchaseOrRentPreference")}
                    />
                    Rent.
                </label>
            </div>
        </>
    );
}
