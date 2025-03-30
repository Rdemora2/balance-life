import React, { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;

    colors[i] = Math.random();
    colors[i + 1] = Math.random();
    colors[i + 2] = Math.random();
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes.position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes.color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingLogo() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

const LoadingAnimation: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingLogo />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default LoadingAnimation;
