import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from '../../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
