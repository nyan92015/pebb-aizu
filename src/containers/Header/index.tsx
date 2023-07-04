import Logo from "../../components/Logo";
import SignOut from "../SignOut";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./Header.scss";
const Header = () => {
  const user = useSelector((state: RootState) => state.user.userData);

  return (
    <div className="header">
      <Logo />
      <p>{user?.displayName}</p>
      {user?.emailVerified && <SignOut />}
    </div>
  );
};

export default Header;
