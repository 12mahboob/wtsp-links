import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';

const ManageGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase.from('groups').select('*');
      if (error) throw error;
      setGroups(data);
    } catch (error) {
      console.error('Error fetching groups:', error.message);
    }
  };

  const handleDeleteGroup = async (id) => {
    try {
      const { error } = await supabase.from('groups').delete().eq('id', id);
      if (error) throw error;
      setGroups(groups.filter(group => group.id !== id));
    } catch (error) {
      console.error('Error deleting group:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Groups</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Link</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr key={group.id}>
              <td className="border px-4 py-2">{group.id}</td>
              <td className="border px-4 py-2">{group.name}</td>
              <td className="border px-4 py-2"><a href={group.link} target="_blank" rel="noopener noreferrer">{group.link}</a></td>
              <td className="border px-4 py-2">
                <button onClick={() => handleDeleteGroup(group.id)} className="text-red-600 hover:text-red-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageGroups;