import React from "react";
import SignIn from "../../containers/SignIn";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SignInPage = () => {
  const user = useSelector((state: RootState) => state.user.userData);
  if (user?.emailVerified) return <Navigate to="/" />;
  return (
    <div className="Signin">
      <h1 className="Signin__title">サインイン</h1>
      <SignIn />
      <Link to="/signup">新規作成</Link>
    </div>
  );
};

export default SignInPage;
