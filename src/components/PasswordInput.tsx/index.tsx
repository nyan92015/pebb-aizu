import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { UserData } from "../../types.ts/UserData";

interface PasswordInputProps {
  register: UseFormRegister<UserData>;
  errors: FieldErrors<UserData>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    <>
      <input
        type="password"
        {...register("password", {
          required: "パスワードを入力してください。",
          minLength: {
            value: 8,
            message: "無効なパスワードです。",
          },
        })}
        placeholder="Password"
      />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}
    </>
  );
};

export default PasswordInput;
