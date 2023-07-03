import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "../pages/LoadingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import { auth } from "../firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user";
import { RootState } from "../store";

const Router = () => {
  const [user, loading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const isSignIn = useSelector((state: RootState) => state.user.isSignIn);

  useEffect(() => {
    if (!loading) {
      dispatch(setUser(user));
      setPageLoading(false);
    }
  }, [loading]);

  if (pageLoading) return <LoadingPage />;
  else
    return (
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {isSignIn ? (
          <>
            <Route path="/" element={<HomePage />} />
          </>
        ) : (
          <Route path="/" element={<Navigate to="/signin" />} />
        )}
      </Routes>
    );
};

export default Router;
