import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      console.log("Submitting course:", title, description);
console.log("Token:", token);

      const res = await axios.post(
        "http://localhost:5000/api/courses",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Course creation failed", error);
      alert("Failed to create course");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button style={{ marginTop: "1rem" }} type="submit">
          Create Course
        </button>
      </form>
    </div>
  );
}

export default CreateCourse;
