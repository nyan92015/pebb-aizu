import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { PastExamData } from "../../types.ts/PastExamData";

interface FileInputProps {
  label: string;
  type: string;
  name: keyof PastExamData;
  register: UseFormRegister<PastExamData>;
  errors: FieldErrors<PastExamData>;
  accept?: string; // accept属性の型を追加
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  type,
  name,
  register,
  errors,
  accept,
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
        accept={accept}
      />
      {errors[name] && <span className="error">{errors[name]?.message}</span>}
    </>
  );
};

export default FileInput;
