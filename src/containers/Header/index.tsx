import React from "react";
import Logo from "../../components/Logo";
import SignOut from "../SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const user = useSelector((state: RootState) => state.user.userData);

  return (
    <div>
      <Logo />
      <p>{user?.displayName}</p>
      {user?.emailVerified && <SignOut />}
    </div>
  );
};

export default Header;
