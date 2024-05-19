import React, { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import CourseForm from "../../components/ui/CourseForm/CourseForm";
import UserCourses from "../../components/ui/UserCourses/UserCourses";
import RedirectMessage from "../../components/RedirectMessage/RedirectMessage";
import { checkValidJwt } from "../../utils/checkValidJwt";
import { Navigate } from "react-router-dom";

function Profile() {
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [rerender, setRerender] = useState(false);
  const [updateSwitch, setUpdateSwitch] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const loggedIn = checkValidJwt();

    if (!loggedIn) setRedirect(true);
  }, []);

  useEffect(() => {
    setRerender((prevRerender) => !prevRerender);
  }, [updateSwitch]);

  if (redirect) return <Navigate to={"/sign-in"}></Navigate>;
  else {
    return (
      <>
        <Header />
        {errorMessage && (
          <RedirectMessage
            path="./"
            message={errorMessage}
            duration={0}
            status="error"
          />
        )}
        {successMessage && (
          <RedirectMessage
            path="./"
            message={successMessage}
            duration={0}
            status="success"
          />
        )}
        <div className="profile-div">
          <CourseForm
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
            setUpdateSwitch={setUpdateSwitch}
          ></CourseForm>
          <UserCourses
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
            rerender={rerender}
          ></UserCourses>
        </div>
      </>
    );
  }
}

export default Profile;
