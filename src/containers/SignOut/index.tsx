import { useDispatch } from "react-redux";
import { signout } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/user";

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignOut = async () => {
    await signout();
    dispatch(setUser(null));
    navigate("/");
  };
  return <button onClick={onSignOut}>サインアウト</button>;
};

export default SignOut;
