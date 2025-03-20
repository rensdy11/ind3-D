import React from 'react';
import { Canvas } from '@react-three/fiber';
import Monolith from './Monolith'; // Adjust the path as necessary

const Scene = ({ position, rotation, scale }) => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      gl={{ alpha: false }} // Disable alpha to ensure the background is opaque
      onCreated={({ gl }) => {
        gl.setClearColor('black'); // Set the background color to black
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <perspectiveCamera makeDefault position={[0, 0, 30]} />
      <Monolith
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </Canvas>
  );
};

export default Scene;
