import React from "react";
import { Login } from "../../styles/Login/loginViewStyle";
import Logo from "../../assets/images/logo.png";
import Logingif from "../../assets/images/loginvid.gif";
export default function login2() {
  return (
    <Login>
      <div className="cover">
        <div className="login">
          <div className="login__form">
            <div className="login__form-logo">
              <img src={Logo} alt="" />
              <h2>FORCE</h2>
            </div>

            <div className="login__form-inputs">
              <input
              placeholder="USERNAME"
               type="text"  />
              <input placeholder="PASSWORD" type="password"  />
              <button>LOG IN</button>
            </div>
          </div>
        </div>
      </div>
    </Login>
  );
}
