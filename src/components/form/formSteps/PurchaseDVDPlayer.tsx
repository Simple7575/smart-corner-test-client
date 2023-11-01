import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function PurchaseDVDPlayer({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">
                When would you purchase a DVD player if you don't already own one?
            </h4>
            <label className="flex flex-col text-neutral-content relative" htmlFor="">
                <p className="text-error absolute -top-6">
                    {errors.purchaseDVDPlayer?.message?.toString()}
                </p>
                <input
                    className="input input-accent input-sm"
                    type="text"
                    {...register("purchaseDVDPlayer", {
                        required: "This field is required.",
                        validate: (value) => value.length <= 250 || "Max 250 characters.",
                    })}
                />
            </label>
        </>
    );
}
