import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../../components/Logo";
import SignOut from "../../components/SignOut";
import "./Header.scss";
import { auth } from "../../firebase/init";
import { UserContext } from "../../App";
import { useContext } from "react";
import LoadingPage from "../../pages/LoadingPage";
const Header = () => {
  const userData = useContext(UserContext);
  if (userData.isLoading) return <LoadingPage />;
  return (
    <header className="header">
      <Logo />
      <p>{userData.user?.displayName}</p>
      {userData.user?.emailVerified && <SignOut />}
    </header>
  );
};

export default Header;
