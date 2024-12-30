import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let [loginBtn, setLoginBtn] = useState("Login");
  const [onlineStatus, setOnlineStatus] = useState(false);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
    <div className="mx-10 px-2 flex items-center border border-black shadow-md bg-white">
      {/* Logo */}
      <div className="logo">
        <img alt="logo" className="max-w-[100px]" src={LOGO_URL} />
      </div>

      {/* Navigation */}
      <div className="w-full">
        <ul className="flex justify-end list-none m-5">
          <li className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white">
            <Link className="link-tag" to="/">
              Home
            </Link>
          </li>
          <li className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white">
            <Link className="link-tag" to="/about">
              About Us
            </Link>
          </li>
          <li className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white">
            Contact Us
          </li>
          <li className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white">
            <Link className="link-tag" to="/grocery">
              Grocery
            </Link>
          </li>
          <Link className="link-tag" to="/cart">
            <li className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white">
              Cart ({cartItems.length} items)
            </li>{" "}
          </Link>
          <button
            className="p-2 m-2 bg-red-200 rounded hover:bg-sky-700 hover:text-white"
            onClick={handleToggle}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
