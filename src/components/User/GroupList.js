// src/components/User/GroupList.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/api';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  // Fetch all groups from Supabase
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
    <div className="group-list mt-5">
      <h2 className="text-2xl font-semibold">Available Groups</h2>
      {groups.length > 0 ? (
        groups.map((group) => (
          <div key={group.id} className="group-item p-4 bg-gray-100 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">{group.name}</h3>
            <p>{group.description}</p>
          </div>
        ))
      ) : (
        <p>No groups available yet. Please add one!</p>
      )}
    </div>
  );
};

export default GroupList;
