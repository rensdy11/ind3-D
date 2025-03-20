import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Monolith = (props) => {
  const { nodes, materials } = useGLTF('/models/monolith.glb');
  const groupRef = useRef();

  // Use useFrame to update the rotation on each frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.001;  
      groupRef.current.rotation.x += 0.0005; // Adjust the speed of rotation here
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={[0.01, 0.01, 0.01]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Monolith_Monolith_0.geometry}
            material={materials.Monolith}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Monolith_Monolith_0_1.geometry}
            material={materials.Monolith}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Monolith_Monolith_0_2.geometry}
            material={materials.Monolith}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Monolith_Monolith_0_3.geometry}
            material={materials.Monolith}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/monolith.glb');

const Scene = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      gl={{ alpha: false }} 
      onCreated={({ gl }) => {
        gl.setClearColor('black'); 
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Monolith />
    </Canvas>
  );
};

export default Monolith;
