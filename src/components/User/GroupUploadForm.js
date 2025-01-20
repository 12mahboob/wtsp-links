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
    }
  };

  return (
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
  );
};

export default GroupUploadForm;