import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';
import {
  BG_LIGHT,
  BG_DARK,
  PARTICLE_COLOR,
  PARTICLE_COUNT,
  PARTICLE_DISTANCE_MIN,
  PARTICLE_DISTANCE_MAX,
  PARTICLE_ROTATION_X_DIV,
  PARTICLE_ROTATION_Y_DIV,
  PARTICLE_SIZE,
  PARTICLE_OPACITY,
  SCENE_CAMERA_Z,
  SCENE_GROUP_ROTATION_Z,
} from '../constants/theme';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);

  const sphere = useMemo(() => {
    const points = new Float32Array(PARTICLE_COUNT * 3);
    const range = PARTICLE_DISTANCE_MAX - PARTICLE_DISTANCE_MIN;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const distance = PARTICLE_DISTANCE_MIN + Math.random() * range;
      points[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      points[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      points[i * 3 + 2] = distance * Math.cos(theta);
    }
    return points;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / PARTICLE_ROTATION_X_DIV;
      ref.current.rotation.y -= delta / PARTICLE_ROTATION_Y_DIV;
    }
  });

  return (
    <group rotation={[0, 0, SCENE_GROUP_ROTATION_Z]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={PARTICLE_COLOR}
          size={PARTICLE_SIZE}
          sizeAttenuation
          depthWrite={false}
          opacity={PARTICLE_OPACITY}
        />
      </Points>
    </group>
  );
};

const ThreeScene: React.FC = () => {
  const { theme } = useTheme();
  const bg = theme === 'dark' ? BG_DARK : BG_LIGHT;

  return (
    <div className="fixed inset-0 -z-10" style={{ backgroundColor: bg }}>
      <Canvas camera={{ position: [0, 0, SCENE_CAMERA_Z] }}>
        <color attach="background" args={[bg]} />
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
