import React, { useEffect, useState } from "react";
import "./UserCourses.css";
import { deleteCourse, getUserCourses } from "../../../services/apiService";
import { Link } from "react-router-dom";

function UserCourses({ setErrorMessage, setSuccessMessage, rerender }) {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await getUserCourses();
      setCourses(response.data);
    } catch (error) {
      setErrorMessage("Error fetching user courses:");
      console.error("Error fetching user courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [rerender]);

  const handleDelete = async (id) => {
    const response = await deleteCourse(id);

    if (response.status === "success") {
      setCourses(courses.filter((course) => course.id !== id));
      setSuccessMessage(response.message);
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="user-courses">
      <h2>My Courses</h2>
      {courses.length === 0 ? (
        <p>You have not created any courses.</p>
      ) : (
        courses.map((course) => (
          <div key={course.id} className="user-course">
            <div>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>
            <div className="btn-div">
              <button onClick={() => handleDelete(course.id)}>Delete</button>
              <button>
                <Link to={`/update/${course.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserCourses;
