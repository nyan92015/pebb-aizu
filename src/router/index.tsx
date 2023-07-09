import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "../pages/LoadingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import NewPastExamPage from "../pages/NewPastExamPage";
import { auth } from "../firebase/init";
import PastExamListPage from "../pages/PastExamListPage";
import { useContext } from "react";
import { UserContext } from "../App";

const Router = () => {
  const userData = useContext(UserContext);
  if (userData.isLoading) return <LoadingPage />;
  else
    return (
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {userData.user?.emailVerified ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/pastexam/new" element={<NewPastExamPage />} />
            <Route
              path="/pastexam/:subjectName"
              element={<PastExamListPage />}
            />
          </>
        ) : (
          <Route path="/" element={<Navigate to="/signin" />} />
        )}
      </Routes>
    );
};

export default Router;
