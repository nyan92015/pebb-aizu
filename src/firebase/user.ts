import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";

//名前を設定する関数
export const SetDisplayName = async (user: User, displayName: string) => {
  try {
    await updateProfile(user, { displayName });
  } catch (error) {
    console.error("名前の登録時にエラーが発生しました", error);
  }
};
