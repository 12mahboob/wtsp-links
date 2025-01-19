// src/pages/AdminPanel.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../services/api';
import { useHistory } from 'react-router-dom';
import AdminDashboard from '../components/Admin/AdminDashboard';
import ManageGroups from '../components/Admin/ManageGroups';
import ManageCategories from '../components/Admin/ManageCategories';

const AdminPanel = () => {
  const [admin, setAdmin] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchAdmin = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data) {
        history.push('/admin-login');
      } else {
        setAdmin(data);
      }
    };

    fetchAdmin();
  }, [history]);

  return (
    <div className="admin-panel p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Panel</h1>

      {admin && (
        <>
          <AdminDashboard />
          
          <div className="admin-management mt-10">
            <h2 className="text-2xl font-semibold mb-5">Group Management</h2>
            <ManageGroups />

            <h2 className="text-2xl font-semibold mt-8 mb-5">Category Management</h2>
            <ManageCategories />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
