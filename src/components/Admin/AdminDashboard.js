<<<<<<< HEAD
// src/components/Admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
=======
import React from "react";
import { Link } from "react-router-dom";
>>>>>>> f4ff1c57 (hi)

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-4">
        <Link
          to="/manage-groups"
          className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-800"
        >
          Manage Groups
        </Link>
        <Link
          to="/manage-categories"
          className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-800"
        >
          Manage Categories
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
