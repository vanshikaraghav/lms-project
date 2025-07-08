import React, { useEffect, useState } from "react";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Simulate fetching courses
    const mockCourses = [
      {
        _id: "1",
        title: "Java Basics",
        description: "Learn the fundamentals of Java.",
        instructor: { email: "admin@example.com" }
      },
      {
        _id: "2",
        title: "React for Beginners",
        description: "Introduction to React.js.",
        instructor: { email: "admin@example.com" }
      }
    ];

    setCourses(mockCourses);

    // Load previously enrolled course IDs from localStorage
    const saved = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(saved);
  }, []);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      const updated = [...enrolledCourses, courseId];
      setEnrolledCourses(updated);
      localStorage.setItem("enrolledCourses", JSON.stringify(updated));
      alert("Enrolled successfully!");
    } else {
      alert("Already enrolled.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>
      {courses.map(course => (
        <div key={course._id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p><strong>Instructor:</strong> {course.instructor.email}</p>
          <button onClick={() => handleEnroll(course._id)}>
            {enrolledCourses.includes(course._id) ? "Enrolled" : "Enroll"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
