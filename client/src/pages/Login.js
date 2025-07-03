import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Login</h2>
      <input placeholder="Email" className="border p-2 mb-2 block" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mb-2 block" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>Login</button>
    </div>
  );
}