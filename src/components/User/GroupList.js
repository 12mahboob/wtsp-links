import React, { useEffect, useState } from "react";
import axios from "axios";

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/groups");
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };
    fetchGroups();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Groups</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {groups.map((group) => (
          <li
            key={group._id}
            className="bg-white p-4 shadow rounded hover:shadow-lg"
          >
            <h3 className="font-semibold">{group.name}</h3>
            <p className="text-sm text-gray-500">{group.category}</p>
            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block"
            >
              Join Group
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
