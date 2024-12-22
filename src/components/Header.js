import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [loginBtn, setLoginBtn] = useState("Login");
  const [onlineStatus, setOnlineStatus] = useState(false);
  const handleToggle = () => {
    if (loginBtn === "Login") {
      setLoginBtn("LogOut");
      setOnlineStatus(true);
    } else {
      setLoginBtn("Login");
      setOnlineStatus(false);
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo" className="logoImg" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link className="link-tag" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/about">
              About Us
            </Link>
          </li>
          <li>Contact Us</li>
          <li>
            <Link className="link-tag" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button onClick={handleToggle}>{loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
