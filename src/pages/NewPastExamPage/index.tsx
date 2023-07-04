import React from "react";
import TextInput from "../../components/PastExamForm/TextInput";
import { PastExamData } from "../../types.ts/PastExamData";
import { useForm } from "react-hook-form";
import NewPastExamForm from "../../containers/NewPastExamForm";
import { Link } from "react-router-dom";

const NewPastExamPage = () => {
  return (
    <div>
      <NewPastExamForm />
      <Link to="/">ホームへ</Link>
    </div>
  );
};

export default NewPastExamPage;
