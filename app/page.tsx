"use client";
import { useState } from "react";

import "./globals.css";
import WelcomeMessage from "./login/WelcomeMessage";
import Form from "./login/Form";
import App from "./navbar";
export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn, setLoggedIn);

  return (
    <div className="container">
      <div className="logo">
        <img src="/favicon.ico" alt="LemonPie" />{" "}
      </div>
      {loggedIn ? <App /> : <Form setLoggedIn={setLoggedIn} />}
    </div>
  );
}
