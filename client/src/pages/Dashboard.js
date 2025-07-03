import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Courses</h2>
      {courses.map(course => (
        <div key={course._id} className="border p-4 mb-2">
          <h3 className="text-xl font-bold">{course.title}</h3>
          <p>{course.description}</p>
          <Link to={`/course/${course._id}`} className="text-blue-600">View Course</Link>
        </div>
      ))}
    </div>
  );
}