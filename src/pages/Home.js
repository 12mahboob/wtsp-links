<<<<<<< HEAD
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../services/supabase';

const Home = () => {
  const [groupName, setGroupName] = useState('');
  const [groupLink, setGroupLink] = useState('');

  const createGroupMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.from('groups').insert({
        name: groupName,
        link: groupLink,
      });
      return data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGroupMutation.mutateAsync();
    setGroupName('');
    setGroupLink('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Group</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
            Group Name
          </label>
          <input
            type="text"
            id="groupName"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="groupLink" className="block text-sm font-medium text-gray-700">
            Group Link
          </label>
          <input
            type="url"
            id="groupLink"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indogo-200 focus:ring-opacity-50"
            value={groupLink}
            onChange={(e) => setGroupLink(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Group
        </button>
      </form>
      <h2 className="text-2xl font-semibold mt-8">Existing Groups</h2>
      <ul className="mt-4">
        {/* List existing groups here */}
      </ul>
    </div>
  );
=======
import React from "react";
import Homepage from "../components/User/Homepage";

const Home = () => {
  return <Homepage />;
>>>>>>> f4ff1c57 (hi)
};

export default Home;
      