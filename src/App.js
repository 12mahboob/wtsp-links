<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminAdminPanel';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
>>>>>>> f4ff1c57 (hi)
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import './index.css';
>>>>>>> 0ef80afe (hi)

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <div className="flex flex-col min-h-screen">
<<<<<<< HEAD
        <Navbar />
        <main className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
=======
        <Nav />
=======
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-xl font-bold">WhatsApp Group Links</h1>
        </header>
>>>>>>> 0ef80afe (hi)
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
>>>>>>> f4ff1c57 (hi)
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2025 WhatsApp Group Links</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;