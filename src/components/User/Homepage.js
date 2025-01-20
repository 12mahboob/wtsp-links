<<<<<<< HEAD
import React from 'react';
import { createScene } from '../../utils/threejsUtils';

const Homepage = () => {
  useEffect(() => {
    const { scene, camera, renderer } = createScene();
  }, []);

  return (
    <div id="homepage">
      <canvas id="canvas"></canvas>
=======
import React from "react";
import { gsap } from "gsap";

const Homepage = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".headline",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="headline text-5xl font-bold mb-4">
          Discover WhatsApp Groups
        </h1>
        <p className="text-lg mb-6">
          Join and share WhatsApp group links with ease.
        </p>
        <a
          href="/group-upload"
          className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-800"
        >
          Upload Your Group
        </a>
      </div>
>>>>>>> f4ff1c57 (hi)
    </div>
  );
};

export default Homepage;