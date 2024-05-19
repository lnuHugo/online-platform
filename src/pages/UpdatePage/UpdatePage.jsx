import Header from "../../components/Header/Header";
import CourseForm from "../../components/ui/CourseForm/CourseForm";
import { useParams } from "react-router-dom";
import "./UpdatePage.css";
import { getSingleCourse } from "../../services/apiService";
import { useEffect, useState } from "react";
import RedirectMessage from "../../components/RedirectMessage/RedirectMessage";

function UpdatePage() {
  const [course, setCourse] = useState({});
  const [message, setMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getCourse = async () => {
      const response = await getSingleCourse(id);
      setCourse(response.data);
    };

    getCourse();
  }, []);

  return (
    <>
      <Header></Header>
      {message != "" && (
        <RedirectMessage
          message={message.message}
          status={message.status}
          duration={1}
          path={"/profile"}
        />
      )}
      <div className="update-page-div">
        <h2>Update {course.name} course</h2>
        <CourseForm
          style={"fullpage"}
          data={course}
          setMessage={setMessage}
        ></CourseForm>
      </div>
    </>
  );
}

export default UpdatePage;
