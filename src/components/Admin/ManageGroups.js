// src/components/Admin/ManageGroups.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/api';

const ManageGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const { data, error } = await supabase.from('groups').select('*');
      if (error) {
        console.error(error);
      } else {
        setGroups(data);
      }
    };

    fetchGroups();
  }, []);

  const deleteGroup = async (id) => {
    const { error } = await supabase.from('groups').delete().eq('id', id);
    if (error) {
      console.error('Error deleting group:', error.message);
    } else {
      setGroups(groups.filter(group => group.id !== id));
    }
  };

  return (
    <div className="manage-groups p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-5">Manage Groups</h1>
      <div className="group-list">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} className="group-item flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4">
              <div>
                <h2 className="text-xl font-semibold">{group.name}</h2>
                <p>{group.description}</p>
              </div>
              <button
                onClick={() => deleteGroup(group.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No groups available to manage.</p>
        )}
      </div>
    </div>
  );
};

export default ManageGroups;
