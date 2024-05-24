import React, { useEffect, useState } from "react";
import "./Courses.css";
import Header from "../../components/Header/Header";
import CourseCard from "../../components/ui/CourseCard/CourseCard";
import { getAllCourses } from "../../services/apiService";
import Footer from "../../components/Footer/Footer";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await getAllCourses();
      setCourses(response.data);
      console.log(courses);
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Header />
      <div className="courses-div main-content">
        {courses.map((course, index) => (
          <CourseCard
          key={index}
            id={course.id}
            name={course.name}
            creator={course.instructor}
            image={course.image}
            price={course.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Courses;
