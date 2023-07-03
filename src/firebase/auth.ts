import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY2auoAF3aGANMK9hR_XDQrbiiTsJMEqA",
  authDomain: "pebb-aizu.firebaseapp.com",
  projectId: "pebb-aizu",
  storageBucket: "pebb-aizu.appspot.com",
  messagingSenderId: "782979903127",
  appId: "1:782979903127:web:e3bf40bce7e1b8e2bfc3d2",
  measurementId: "G-4SN7N5PVV3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

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
