import React from "react";
import SignUp from "../../containers/SignUp";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signup">
      <h1 className="signup__title">新規作成</h1>
      <SignUp />
      <Link to="/signin">サインイン</Link>
    </div>
  );
};

export default SignUpPage;
