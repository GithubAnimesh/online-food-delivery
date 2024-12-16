import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" className="logoImg" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
