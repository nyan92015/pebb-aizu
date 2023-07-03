import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; // RootStateにはRedux Storeのルートの状態の型定義が含まれる
import SignOut from "../../containers/SignOut";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default HomePage;
