import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { UserData } from "../../types.ts/UserData";

interface NameInputProps {
  register: UseFormRegister<UserData>;
  errors: FieldErrors<UserData>;
}

const NameInput: React.FC<NameInputProps> = ({ register, errors }) => {
  return (
    <>
      <input
        type="text"
        {...register("name", {
          required: "ユーザーネームを入力してください。",
        })}
        placeholder="UserName"
      />
      {errors.name && <span className="error">{errors.name.message}</span>}
    </>
  );
};

export default NameInput;
