import React, { useEffect } from "react";
import "./App.css";
import Router from "./router";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
