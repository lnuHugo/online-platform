import React, { useEffect, useState } from "react";
import "./CourseForm.css";
import { createCourse, updateCourse } from "../../../services/apiService";

function CourseForm({
  setErrorMessage,
  setSuccessMessage,
  style = "add-course-div",
  data,
  setMessage,
  setUpdateSwitch,
}) {
  const [formData, setFormData] = useState({
    name: data?.name ?? "",
    description: data?.description ?? "",
    instructor: data?.instructor ?? "",
    price: data?.price ?? "",
    category: data?.category ?? "",
    image: data?.image ?? "",
    youtubeLinks: data?.youtubeLinks ?? "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
      console.log(data.youtubeLinks);
      console.log(typeof data.youtubeLinks);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let youtubeLinks = formData.youtubeLinks;
    if (Array.isArray(youtubeLinks)) {
      youtubeLinks = youtubeLinks[0];
    }

    const formDataUpdated = { ...formData, youtubeLinks };

    console.log("formData.youtubeLinks typeof: " + typeof youtubeLinks);
    console.log("formData.youtubeLinks: " + youtubeLinks);

    if (style === "add-course-div") {
      const response = await createCourse(formDataUpdated);

      if (typeof response === "string") {
        setSuccessMessage("");
        setErrorMessage(response);
      } else {
        setFormData({
          name: "",
          description: "",
          instructor: "",
          price: "",
          category: "",
          image: "",
          youtubeLinks: "",
        });
        setErrorMessage("");
        setSuccessMessage(response.message);
        setUpdateSwitch((prevUpdateSwitch) => !prevUpdateSwitch);
      }
    } else if (style === "fullpage") {
      const response = await updateCourse(data.id, formData);
      setMessage(response);

      setFormData({
        name: "",
        description: "",
        instructor: "",
        price: "",
        category: "",
        image: "",
        youtubeLinks: "",
      });
    }
  };

  return (
    <div className={style}>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit} className="add-course-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Course Name"
        />
        <br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Course Description"
        />
        <br />
        <input
          type="text"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          placeholder="Instructor Name"
        />
        <br />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <br />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image"
        />
        <br />
        <input
          type="text"
          name="youtubeLinks"
          value={formData.youtubeLinks}
          onChange={handleChange}
          placeholder="YouTube Links"
        />
        <br />
        <button type="submit" id="add-btn">
          Add Course
        </button>
        {style === "fullpage" && <button type="submit">Update Course</button>}
      </form>
    </div>
  );
}

export default CourseForm;
