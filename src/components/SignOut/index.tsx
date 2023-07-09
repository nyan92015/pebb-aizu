import { useDispatch } from "react-redux";
import { signout } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  const onSignOut = async () => {
    await signout();
    navigate("/");
  };
  return <button onClick={onSignOut}>サインアウト</button>;
};

export default SignOut;
