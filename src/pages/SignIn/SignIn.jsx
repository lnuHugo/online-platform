import React, { useState } from "react";
import "./SignIn.css";
import Header from "../../components/Header/Header";
import SignInForm from "../../components/ui/SignInForm/SignInForm";
import RedirectMessage from "../../components/RedirectMessage/RedirectMessage";
import Footer from "../../components/Footer/Footer";

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      <Header isUserLoggedIn={isLoggedIn}/>
      {successMessage && (
        <RedirectMessage
          duration={1}
          path={"/courses"}
          message={successMessage}
          status={"success"}
        />
      )}
      {errorMessage && (
        <RedirectMessage
          duration={0}
          path={"./"}
          message={errorMessage}
          status={"error"}
        />
      )}
      <div className="sign-in-div main-content">
        <div className="wrapper">
          <h1>Sign In to Online Courses</h1>
          <SignInForm onLogin={handleLogin} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
