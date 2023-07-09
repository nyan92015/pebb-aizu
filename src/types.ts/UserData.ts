import { User } from "firebase/auth";

export type UserData = {
  isLoading: boolean;
  user: User | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  password?: string | null | undefined;
};
