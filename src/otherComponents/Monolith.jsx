import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Monolith = (props) => {
  const { nodes, materials } = useGLTF('/models/monolith.glb');

  return (
    <group {...props} dispose={null}>
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

export default Monolith;
