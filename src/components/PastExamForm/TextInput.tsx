import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { PastExamData } from "../../types.ts/PastExamData";

interface TextInputProps {
  label: string;
  type: string;
  name: keyof PastExamData;
  register: UseFormRegister<PastExamData>;
  errors: FieldErrors<PastExamData>;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <>
      <label htmlFor={name.toString()}>{label}</label>
      <input
        type={type}
        id={name.toString()}
        {...register(name, {
          required: `${label}を入力してください。`,
        })}
        placeholder={label}
      />
      {errors[name] && <span className="error">{errors[name]?.message}</span>}
    </>
  );
};

export default TextInput;
