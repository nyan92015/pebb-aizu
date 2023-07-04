import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubjectNameList from "../../containers/SubjectNameList";
import { getSubjectNameList } from "../../firebase/pastexam";

const HomePage = () => {
  const [subjectNameList, setSubjectNameList] = useState<string[]>([]);
  useEffect(() => {
    const setSubjectName = async () => {
      const docs: string[] = await getSubjectNameList();
      setSubjectNameList(docs);
    };
    setSubjectName();
  }, []);
  return (
    <div>
      <Link to="/pastexam/new">過去問を投稿する</Link>
      <SubjectNameList subjectNameList={subjectNameList} />
    </div>
  );
};

export default HomePage;
