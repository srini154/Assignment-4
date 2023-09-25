import React, { useState } from "react";
import "./Login.css";
import { dialcodes } from "../../constants";
import { Link } from "react-router-dom";
function Login({ openRegister }) {
  const [selectedDialCode, setSelectedDialCode] = useState("");
  const DialCodeSelection = (dialCode) => {
    setSelectedDialCode(dialCode);
  };
  return (
    <div>
      <h1 className="h1-login">Login</h1>
      <div className="otp-input">
        <div className="main-1">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedDialCode || "+91"}
            </button>
            <ul className="dropdown-menu cityname-ul-login">
              {dialcodes.map((e, index) => (
                // console.log(e);

                <li key={index} className=" cityname-li-login">
                  <Link
                    className="cityname-li-text-login"
                    onClick={() => DialCodeSelection(e.dial_code)}
                  >
                    {e.dial_code}
                  </Link>
                </li>
              ))}
            </ul>
            <input
              type="text"
              className="form-control input-otp "
              aria-label="Text input with dropdown button"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
      <button className="btn-otp">Send One Time Password</button>
      <div className="loggin-register">
        New to Zomato!{" "}
        <button className="create-login " onClick={openRegister}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
