import React from 'react';
import ManageGroups from '../components/Admin/ManageGroups';

const AdminPanel = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <ManageGroups />
    </div>
  );
};

export default AdminPanel;