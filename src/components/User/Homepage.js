import React from 'react';
import { createScene } from '../../utils/threejsUtils';

const Homepage = () => {
  useEffect(() => {
    const { scene, camera, renderer } = createScene();
  }, []);

  return (
    <div id="homepage">
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default Homepage;