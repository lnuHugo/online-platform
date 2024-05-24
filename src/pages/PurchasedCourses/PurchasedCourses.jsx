import React, { useEffect, useState } from "react";
import "./PurchasedCourses.css";
import Header from "../../components/Header/Header";
import { getPurchasedCourses } from "../../services/apiService";
import CourseCard from "../../components/ui/CourseCard/CourseCard";
import { checkValidJwt } from "../../utils/checkValidJwt";
import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function PurchasedCourses() {
  const [courses, setCourses] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const loggedIn = checkValidJwt();

    if (!loggedIn) setRedirect(true);
    else {
      const fetchCourses = async () => {
        const response = await getPurchasedCourses();
        setCourses(response.data);
      };

      fetchCourses();
    }
  }, []);

  if (redirect) return <Navigate to={"/sign-in"}></Navigate>;

  return (
    <>
      <Header />
      <div className="purchased-courses courses-div main-content">
        {courses.length !== 0 ? (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              id={course.id}
              name={course.name}
              creator={course.instructor}
              image={course.image}
              price={course.price}
            />
          ))
        ) : (
          <p>You have not purchased any courses.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PurchasedCourses;
