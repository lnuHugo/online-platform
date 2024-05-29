import React, { useEffect, useState } from "react";
import "./Register.css";
import Header from "../../components/Header/Header";
import RegisterForm from "../../components/ui/RegisterForm/RegisterForm";
import RedirectMessage from "../../components/RedirectMessage/RedirectMessage";
import Footer from "../../components/Footer/Footer";

function Register() {
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  return (
    <>
      <Header />
      {successMessage && (
        <RedirectMessage
          duration={1}
          path={"/sign-in"}
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
      <div className="register-div main-content">
        <div className="wrapper">
          <h1>Create your Online Courses account</h1>
          <RegisterForm
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
