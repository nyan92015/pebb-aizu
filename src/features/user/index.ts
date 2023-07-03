import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/auth";

interface UserState {
  userData: User | null | undefined;
  isSignIn: boolean;
}

const initialState: UserState = {
  userData: null,
  isSignIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null | undefined>) => {
      state.userData = action.payload;
      state.isSignIn = action.payload?.emailVerified !== (false || undefined);
    },
  },
});

export const { setUser } = userSlice.actions;
