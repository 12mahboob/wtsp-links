// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../services/api';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      history.push('/admin-panel');
    }
  };

  return (
    <div className="login-container p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Admin Login</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
