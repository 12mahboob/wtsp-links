<<<<<<< HEAD
import React, { useState } from 'react';
import { supabase } from '../../services/supabase';

const GroupUploadForm = () => {
  const [groupName, setGroupName] = useState('');
  const [groupLink, setGroupLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('groups').insert({
        name: groupName,
        link: groupLink,
      });
      if (error) throw error;
      setGroupName('');
      setGroupLink('');
    } catch (error) {
      console.error('Error uploading group:', error.message);
=======
import React, { useState } from "react";
import supabase from "../../services/api";

const GroupUploadForm = () => {
  const [groupName, setGroupName] = useState("");
  const [groupLink, setGroupLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("groups")
      .insert([{ name: groupName, link: groupLink }]);

    if (error) {
      setMessage("Error uploading group.");
    } else {
      setMessage("Group uploaded successfully!");
>>>>>>> f4ff1c57 (hi)
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
        <input
          type="text"
          id="groupName"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="groupLink" className="block text-sm font-medium text-gray-700">Group Link</label>
        <input
          type="url"
          id="groupLink"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={groupLink}
          onChange={(e) => setGroupLink(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Upload Group
      </button>
    </form>
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Upload Group</h2>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="url"
          value={groupLink}
          onChange={(e) => setGroupLink(e.target.value)}
          placeholder="Group Link"
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-800"
        >
          Submit
        </button>
        {message && <p className="text-green-600 mt-4">{message}</p>}
      </form>
    </div>
>>>>>>> f4ff1c57 (hi)
  );
};

export default GroupUploadForm;