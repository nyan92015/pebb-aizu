import React, { useEffect, useState } from "react";
import { getSubjectNameList } from "../../firebase/pastexam";
import { Link } from "react-router-dom";
import "./SubjectNameList.scss";


const SubjectNameList: React.FC<{ subjectNameList: string[] }> = ({
  subjectNameList,
}) => {
  return (
    <ul className="subject-name-list">
      {subjectNameList.map((subjectName: string, index: number) => (
        <li className="subject-name-list__subject-name" key={index}>
          <Link className="subject-name-list__subject-name__link" to={`pastexam/${subjectName}`}>{subjectName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubjectNameList;
