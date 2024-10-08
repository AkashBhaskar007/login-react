"use client";
import { useState } from "react";

import "./globals.css";
import WelcomeMessage from "./login/WelcomeMessage";
import Form from "./login/Form";
export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn, setLoggedIn);

  return (
    <div className="container">
      <div className="logo">
        <img src="/favicon.ico" alt="LemonPie" />{" "}
      </div>
      {loggedIn ? <WelcomeMessage /> : <Form setLoggedIn={setLoggedIn} />}
    </div>
  );
}
