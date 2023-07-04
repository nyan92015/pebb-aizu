import React from "react";
import { PastExamData } from "../../types.ts/PastExamData";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/PastExamForm/TextInput";
import FileInput from "../../components/PastExamForm/FileInput";
import { onUploadPastExam } from "../../firebase/pastexam";
import { useNavigate } from "react-router-dom";

const NewPastExamForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PastExamData>();

  const onUpload: SubmitHandler<PastExamData> = async (
    data: PastExamData,
    event
  ): Promise<void> => {
    event?.preventDefault();
    await onUploadPastExam(data);
    navigate("/");
  };

  return (
    <form className="newPastExam__form" onSubmit={handleSubmit(onUpload)}>
      <TextInput
        label="科目名"
        type="text"
        name="subjectName"
        register={register}
        errors={errors}
      />
      <TextInput
        label="年度"
        type="text"
        name="createdYear"
        register={register}
        errors={errors}
      />
      <TextInput
        label="教員名"
        type="text"
        name="teacherName"
        register={register}
        errors={errors}
      />
      <FileInput
        label="ファイル"
        type="file"
        name="file"
        register={register}
        errors={errors}
        accept=".png, .jpg, .pdf, .zip"
      />
      <button type="submit">投稿する</button>
    </form>
  );
};

export default NewPastExamForm;
