import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};

export default function PersonalInformation({ register, errors }: props) {
    return (
        <>
            <h4 className="mb-5 text-xl text-neutral-content font-bold">
                Type your first name, last name and email address
            </h4>
            <div className="flex flex-col gap-y-6">
                <label className="flex text-neutral-content gap-x-2 relative" htmlFor="firstName">
                    <p className="text-error absolute -top-6">
                        {
                            // @ts-expect-error
                            errors.personalInformation?.firstName?.message?.toString()
                        }
                    </p>
                    <input
                        className="input input-accent input-sm"
                        type="text"
                        id="firstName"
                        {...register("personalInformation.firstName", {
                            required: "This field is required.",
                            validate: (value) => value.length <= 35 || "Max 35 characters.",
                        })}
                    />
                    First Name.
                </label>

                <label className="flex text-neutral-content gap-x-2 relative" htmlFor="secondName">
                    <p className="text-error absolute -top-6">
                        {
                            // @ts-expect-error
                            errors.personalInformation?.secondName?.message?.toString()
                        }
                    </p>
                    <input
                        className="input input-accent input-sm"
                        type="text"
                        id="secondName"
                        {...register("personalInformation.secondName", {
                            required: "This field is required.",
                            validate: (value) => value.length <= 35 || "Max 35 characters.",
                        })}
                    />
                    Second Name.
                </label>

                <label className="flex text-neutral-content gap-x-2 relative" htmlFor="email">
                    <p className="text-error absolute -top-6">
                        {
                            // @ts-expect-error
                            errors.personalInformation?.email?.message?.toString()
                        }
                    </p>
                    <input
                        className="input input-accent input-sm"
                        type="email"
                        id="email"
                        {...register("personalInformation.email", {
                            required: "This field is required.",
                            validate: (value) => value.length <= 250 || "Max 250 characters.",
                            pattern: {
                                value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                message: "Invalid email format.",
                            },
                        })}
                    />
                    Email.
                </label>
            </div>
        </>
    );
}
