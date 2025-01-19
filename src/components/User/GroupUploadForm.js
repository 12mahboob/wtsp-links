import React, { useState } from "react";
import axios from "axios";

const GroupUploadForm = () => {
  const [group, setGroup] = useState({ name: "", category: "", link: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/groups", group);
      alert("Group added successfully!");
      setGroup({ name: "", category: "", link: "" });
    } catch (error) {
      console.error("Error uploading group:", error);
      alert("Failed to upload group.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4 shadow rounded mb-6">
      <h2 className="text-xl font-semibold mb-4">Upload a WhatsApp Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Group Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={group.name}
            onChange={(e) => setGroup({ ...group, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={group.category}
            onChange={(e) => setGroup({ ...group, category: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">WhatsApp Link</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={group.link}
            onChange={(e) => setGroup({ ...group, link: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GroupUploadForm;
