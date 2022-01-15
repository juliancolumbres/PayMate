import React from "react";
import { useState } from "react";

function Login() {
  const [registerEmail, setRegisterEmail] = new useState();

  return (
    <div>
      <h1>Register</h1>
      <h2>Email</h2>

      <input
        type="text"
        id="register-email"
        value={registerEmail}
        onChange={(event) => {
          setRegisterEmail(event.target.value);
          console.log(registerEmail);
        }}
      />
      <h2>Password</h2>
      <input type="text"></input>
      <button>Register</button>
    </div>
  );
}

export default Login;
