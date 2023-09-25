import React from "react";
import "./Register.css";
function Register({ openLogin }) {
  return (
    <div>
      <div>
        <h1 className="h1-signup">Sign Up</h1>
        <input
          type="text"
          className="input-name-register"
          placeholder="Full Name"
        />
      </div>
      <input type="text" className="input-name-register" placeholder="Email" />
      <div>
        <button className="create-btn">Create Account</button>
      </div>
      <p className="loggin-register-1">
        Already have an account?
        <button className="create-login " onClick={openLogin}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Register;
