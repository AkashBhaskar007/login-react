"use client";
import { useState } from "react";

import "../globals.css";
import WelcomeMessage from "./WelcomeMessage";
import Form from "./Form";

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container">
      <div className="logo">
        <img src="/favicon.ico" alt="LemonPie" />{" "}
      </div>
      {loggedIn ? <WelcomeMessage /> : <Form setLoggedIn={setLoggedIn} />}
    </div>
  );
}
