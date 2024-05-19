import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { checkValidJwt } from "../../utils/checkValidJwt";

function Header({ isUserLoggedIn }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = checkValidJwt();
    setIsLoggedIn(loggedInStatus);
    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isUserLoggedIn]);

  const logOut = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    console.log("Logging out");
  };

  return (
    <header>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/Courses">Courses</Link>
        </li>
        <li>
          <Link to="/purchased-courses">Purchased Courses</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button className="sign-btn" onClick={logOut}>
              <span>Log out</span>
            </button>
          ) : (
            <button className="sign-btn">
              <Link to="/sign-in">Sign In</Link>
            </button>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
