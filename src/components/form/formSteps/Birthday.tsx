import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function Birthday({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">When is your birthday?</h4>
            <label className="flex flex-col text-neutral-content relative">
                <p className="text-error absolute -top-6">{errors.birthday?.message?.toString()}</p>
                <input
                    className="input input-accent input-sm text-accent cursor-pointer"
                    type="date"
                    {...register("birthday", {
                        valueAsDate: true,
                        required: "This field is required.",
                    })}
                />
            </label>
        </>
    );
}
