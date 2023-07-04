import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPastExamList } from "../../firebase/pastexam";
import { PastExamData } from "../../types.ts/PastExamData";
import PastExamList from "../../containers/PastExamList.tsx";
import LoadingPage from "../LoadingPage";

const PastExamListPage = () => {
  const { subjectName } = useParams();
  const [pastExamList, setPastExamList] = useState<PastExamData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const setPastExam = async () => {
      if (subjectName) {
        const docs = await getPastExamList(subjectName);
        setPastExamList(docs);
        setLoading(false);
      }
    };
    setPastExam();
  }, []);
  if (loading) return <LoadingPage />;
  return (
    <div>
      <h1>{subjectName}</h1>
      <PastExamList pastExamList={pastExamList} />
      <Link to="/">ホームへ</Link>
    </div>
  );
};

export default PastExamListPage;
