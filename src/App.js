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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
<<<<<<< HEAD
        <Navbar />
        <main className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
=======
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
>>>>>>> f4ff1c57 (hi)
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;