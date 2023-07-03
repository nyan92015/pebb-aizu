import { Navigate, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserData } from "../../types.ts/UserData";
import { signinWithEmailAndPassword } from "../../firebase/auth";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput.tsx";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/user";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSignIn: SubmitHandler<UserData> = async (
    data: UserData,
    event
  ): Promise<void> => {
    event?.preventDefault();
    const userCredential = await signinWithEmailAndPassword(
      data.email,
      data.password
    );
    dispatch(setUser(userCredential?.user));
    navigate("/");
  };

  return (
    <form
      className="Signin__form"
      data-testid="form"
      onSubmit={handleSubmit(onSignIn)}
    >
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button type="submit">SignIn</button>
    </form>
  );
};

export default SignIn;
