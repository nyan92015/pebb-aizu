import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserData } from "../../types.ts/UserData";
import { signupWithEmailAndPassword } from "../../firebase/auth";
import { SetDisplayName } from "../../firebase/user";
import NameInput from "../../components/UserForm/NameInput";
import EmailInput from "../../components/UserForm/EmailInput";
import PasswordInput from "../../components/UserForm/PasswordInput";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSignUp: SubmitHandler<UserData> = async (
    data: UserData,
    event
  ): Promise<void> => {
    event?.preventDefault();
    if (data.email && data.password) {
      const userCredential = await signupWithEmailAndPassword(
        data.email,
        data.password
      );
      if (userCredential && data.name) {
        SetDisplayName(userCredential.user, data.name);
        navigate("/signin");
      }
    }
  };

  return (
    <form className="signup__form" onSubmit={handleSubmit(onSignUp)}>
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignUp;
