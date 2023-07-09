import React, { createContext } from "react";
import "./App.css";
import Router from "./router";
import Header from "./containers/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/init";
import { UserData } from "./types.ts/UserData";

export const UserContext = createContext<UserData>({
  isLoading: true,
  user: null,
});

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <UserContext.Provider
      value={{
        isLoading: loading,
        user: user,
      }}
    >
      <Header />
      <Router />
    </UserContext.Provider>
  );
}

export default App;
