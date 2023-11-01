import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function TypeOfDVDPlayer({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">
                What type of DVD player do you own?
            </h4>
            <label className="text-accent relative">
                <p className="text-error absolute -top-9">
                    {errors.typeOfDVDPlayer?.message?.toString()}
                </p>
                <select
                    className="select select-accent w-full max-w-xs cursor-pointer"
                    defaultValue=""
                    {...register("typeOfDVDPlayer", {
                        required: "Please select one of the options.",
                    })}
                >
                    <option selected disabled value="">
                        Pleas select type of DVD player.
                    </option>
                    <option value="PC DVD-ROM">PC DVD-ROM</option>
                    <option value="Macintosh DVD-ROM">Macintosh DVD-ROM</option>
                    <option value="Sony PlayStation 2/Microsoft X-Box">
                        Sony PlayStation 2/Microsoft X-Box
                    </option>
                    <option value="Console Top DVD player">Console Top DVD player</option>
                    <option value="None">None</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </>
    );
}
