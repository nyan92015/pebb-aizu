import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./init";

export const signupWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        alert("認証メールを送信しました。");
      } catch (error) {
        alert("認証メールの送信に失敗しました。");
      }
    }
    return user;
  } catch (error) {
    alert("登録失敗");
  }
};

export const signinWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert("サインイン失敗");
  }
};

export const signout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert("サインアウト時にエラーが発生しました。");
  }
};
