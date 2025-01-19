// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import GroupUploadForm from '../components/User/GroupUploadForm';
import GroupList from '../components/User/GroupList';
import { fadeIn, slideIn } from '../animations/gsapAnimations';

const Home = () => {
  const homeRef = useRef();

  useEffect(() => {
    fadeIn(homeRef.current);
  }, []);

  return (
    <div ref={homeRef} className="home-container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to WhatsApp Groups</h1>
      
      <div className="group-upload">
        <h2 className="text-2xl font-semibold mb-4">Upload Your Group</h2>
        <GroupUploadForm />
      </div>

      <div className="group-list mt-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Available Groups</h2>
        <GroupList />
      </div>
    </div>
  );
};

export default Home;
