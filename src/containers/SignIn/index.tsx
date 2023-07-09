import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserData } from "../../types.ts/UserData";
import { signinWithEmailAndPassword } from "../../firebase/auth";
import EmailInput from "../../components/UserForm/EmailInput";
import PasswordInput from "../../components/UserForm/PasswordInput";
import "./SignIn.scss";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSignIn: SubmitHandler<UserData> = async (
    data,
    event
  ): Promise<void> => {
    event?.preventDefault();
    if (data.email && data.password) {
      await signinWithEmailAndPassword(data.email, data.password);
    }
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
