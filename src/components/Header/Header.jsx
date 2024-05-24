import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { checkValidJwt } from "../../utils/checkValidJwt";

function Header({ isUserLoggedIn }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

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
  };

  return (
    <header>
      <h1>Online Courses</h1>
      <ul>
        <li>
          <Link
            to="/Courses"
            className={location.pathname === "/Courses" ? "active" : ""}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/purchased-courses"
            className={
              location.pathname === "/purchased-courses" ? "active" : ""
            }
          >
            Purchased Courses
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
          >
            Profile
          </Link>
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
