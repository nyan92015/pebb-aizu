import React, { useContext } from "react";
import SignIn from "../../containers/SignIn";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import { UserContext } from "../../App";

const SignInPage = () => {
  const userData = useContext(UserContext);
  if (userData.isLoading) return <LoadingPage />;
  if (userData.user?.emailVerified) return <Navigate to="/" />;
  return (
    <div className="Signin">
      <h1 className="Signin__title">サインイン</h1>
      <SignIn />
      <Link to="/signup">新規作成</Link>
    </div>
  );
};

export default SignInPage;
