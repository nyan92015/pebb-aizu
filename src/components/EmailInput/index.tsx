import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { UserData } from "../../types.ts/UserData";

interface EmailInputProps {
  register: UseFormRegister<UserData>;
  errors: FieldErrors<UserData>;
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <>
      <input
        type="email"
        {...register("email", {
          required: "Eメールを入力してください",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "無効なEメールアドレスです。",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <span className="error">{errors.email.message}</span>}
    </>
  );
};

export default EmailInput;
