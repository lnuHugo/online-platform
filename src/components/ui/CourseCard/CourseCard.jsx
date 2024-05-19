import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({id, image, name, creator, price}) {
  return (
    <div className="course-card">
      <Link to={`/course/${id}`}>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="course-information">
        <h4>{name}</h4>
        <p>{creator}</p>
        <p>{price}</p>
      </div>
      </Link>
    </div>
  );
}

export default CourseCard;
