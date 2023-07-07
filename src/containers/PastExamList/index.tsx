import React from "react";
import { PastExamData } from "../../types.ts/PastExamData";
import { Link } from "react-router-dom";

const PastExamList: React.FC<{ pastExamList: PastExamData[] }> = ({
  pastExamList,
}) => {
  return (
    <ul>
      {pastExamList.map((pastexam: PastExamData, index: number) => (
        <li key={index}>
          <p>{pastexam.subjectName}</p>
          <p>{pastexam.createdYear}</p>
          <p>{pastexam.teacherName}</p>
          {pastexam.fileUrl && <Link to={pastexam.fileUrl}>ファイル</Link>}
        </li>
      ))}
    </ul>
  );
};

export default PastExamList;
