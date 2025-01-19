// src/components/User/Homepage.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/api';

const Homepage = () => {
  const [groups, setGroups] = useState([]);

  // Fetch groups when component is mounted
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

  return (
    <div className="homepage">
      <h1 className="text-3xl font-bold">Welcome to WhatsApp Groups</h1>
      <div className="group-list mt-5">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div key={group.id} className="group-item p-4 bg-gray-100 rounded-lg mb-4">
              <h2 className="text-xl font-semibold">{group.name}</h2>
              <p>{group.description}</p>
            </div>
          ))
        ) : (
          <p>No groups available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
