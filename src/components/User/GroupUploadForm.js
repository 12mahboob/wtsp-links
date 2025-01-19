// src/components/User/GroupUploadForm.js
import React, { useState } from 'react';
import { supabase } from '../../services/api';

const GroupUploadForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('groups').insert([
      {
        name,
        description,
      },
    ]);

    if (error) {
      console.error('Error uploading group:', error.message);
      alert('Error uploading group');
    } else {
      alert('Group uploaded successfully!');
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="group-upload-form p-6 bg-white shadow-lg rounded-md w-full max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Upload a New Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Group Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Group Description"
            className="w-full p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Upload Group
        </button>
      </form>
    </div>
  );
};

export default GroupUploadForm;
