<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
=======
import React, { useState, useEffect } from "react";
import supabase from "../../services/api";
>>>>>>> f4ff1c57 (hi)

const ManageGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const fetchGroups = async () => {
      const { data, error } = await supabase.from("groups").select("*");
      if (!error) setGroups(data);
    };

    fetchGroups();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from("groups").delete().eq("id", id);
    setGroups(groups.filter((group) => group.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Manage Groups</h1>
      <ul className="w-full max-w-2xl bg-white rounded shadow p-6">
        {groups.map((group) => (
          <li
            key={group.id}
            className="flex justify-between items-center py-3 border-b"
          >
            <div>
              <p className="font-bold">{group.name}</p>
              <p className="text-sm text-gray-500">{group.link}</p>
            </div>
            <button
              onClick={() => handleDelete(group.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
>>>>>>> f4ff1c57 (hi)
    </div>
  );
};

export default ManageGroups;