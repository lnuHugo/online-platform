import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { buyCourse, getSingleCourse } from "../../services/apiService";
import Header from "../../components/Header/Header";
import "./SingleCoursePage.css";
import { checkValidJwt } from "../../utils/checkValidJwt";
import RedirectMessage from "../../components/RedirectMessage/RedirectMessage";
import Footer from "../../components/Footer/Footer";

function SingleCoursePage() {
  const [courseData, setCourseData] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const { id } = useParams();

  useEffect(() => {
    const loggedIn = checkValidJwt();
    if (!loggedIn) setRedirect(true);
    else {
      const getData = async () => {
        const response = await getSingleCourse(id);
        setCourseData(response.data);
      };

      getData();
    }
  }, [errorMessage, successMessage]);

  if (redirect) return <Navigate to={"/sign-in"}></Navigate>;

  const handleBuy = async () => {
    const response = await buyCourse(id);
    console.log(response);
    if (response.status === "success") setSuccessMessage(response.message);
    else setErrorMessage(response.message);
  };

  return (
    <>
      <Header></Header>
      {successMessage && (
        <RedirectMessage
          message={successMessage}
          duration={0}
          path={"./"}
          status={"success"}
        ></RedirectMessage>
      )}
      {errorMessage && (
        <RedirectMessage
          message={errorMessage}
          duration={0}
          path={"./"}
          status={"error"}
        ></RedirectMessage>
      )}
      <div className="single-course-page main-content">
        <h1>{courseData.name}</h1>
        <p>{courseData.instructor}</p>
        <p>Description: {courseData.description}</p>
        <p>Price: ${courseData.price}</p>
        <p>Category: {courseData.category}</p>
        {courseData.image && !courseData.youtubeLinks && (
          <img className="course-img" src={courseData.image} alt={courseData.name} />
        )}
        {courseData.youtubeLinks && courseData.youtubeLinks.length > 0 ? (
          <div className="video-div">
            <iframe
              width="100%"
              height="100%"
              src={courseData.youtubeLinks[0]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <button onClick={handleBuy}>Buy Course</button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SingleCoursePage;
