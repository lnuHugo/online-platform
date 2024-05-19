import React, { useEffect, useState } from "react";
import "./Register.css";
import Header from "../../components/Header/Header";
import RegisterForm from "../../components/ui/RegisterForm/RegisterForm";
import RedirectMessage from "../../components/RedirectMessage/RedirectMessage";

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
      <div className="register-div">
        <div className="wrapper">
          <h1>Create your Coursefi account</h1>
          <RegisterForm
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </div>
    </>
  );
}

export default Register;
