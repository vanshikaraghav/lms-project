import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to LMS</h1>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Register</Link>
      </div>
    </div>
  );
}