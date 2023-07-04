import React, { useEffect, useState } from "react";
import { getSubjectNameList } from "../../firebase/pastexam";
import { Link } from "react-router-dom";

const SubjectNameList: React.FC<{ subjectNameList: string[] }> = ({
  subjectNameList,
}) => {
  return (
    <ul>
      {subjectNameList.map((subjectName: string, index: number) => (
        <li key={index}>
          <Link to={`pastexam/${subjectName}`}>{subjectName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubjectNameList;
