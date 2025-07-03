import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { name, email, password, role });
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Register</h2>
      <input placeholder="Name" className="border p-2 mb-2 block" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" className="border p-2 mb-2 block" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mb-2 block" onChange={e => setPassword(e.target.value)} />
      <select className="border p-2 mb-2 block" onChange={e => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleRegister}>Register</button>
    </div>
  );
}
