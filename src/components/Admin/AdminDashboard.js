// src/components/Admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';

const AdminDashboard = () => {
  const [groupsCount, setGroupsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      // Get number of groups
      const { count: groups } = await supabase.from('groups').select('*', { count: 'exact' });
      setGroupsCount(groups);

      // Get number of categories
      const { count: categories } = await supabase.from('categories').select('*', { count: 'exact' });
      setCategoriesCount(categories);

      // Get number of users
      const { count: users } = await supabase.from('users').select('*', { count: 'exact' });
      setUsersCount(users);
    };

    fetchCounts();
  }, []);

  return (
    <div className="admin-dashboard p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
      <div className="stats grid grid-cols-3 gap-5">
        <div className="stat bg-blue-100 p-4 rounded-lg text-center">
          <h2 className="text-xl">Total Groups</h2>
          <p className="text-2xl">{groupsCount}</p>
        </div>
        <div className="stat bg-green-100 p-4 rounded-lg text-center">
          <h2 className="text-xl">Total Categories</h2>
          <p className="text-2xl">{categoriesCount}</p>
        </div>
        <div className="stat bg-yellow-100 p-4 rounded-lg text-center">
          <h2 className="text-xl">Total Users</h2>
          <p className="text-2xl">{usersCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
