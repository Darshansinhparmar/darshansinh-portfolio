import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

function FloatingShape({ position, color, distort, speed }) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 32, 32]} position={position} scale={1.5}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.5}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.2}
          distort={distort}
          speed={speed}
        />
      </Sphere>
    </Float>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0A0A0F]">
      {/* Layer 1: Interactive Gradient Mesh */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(0, 245, 255, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(122, 0, 255, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 46, 209, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(0, 245, 255, 0.4) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Layer 2: Fine grain / noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 3: Floating 3D abstract shapes */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#00F5FF" />
          <pointLight position={[10, -10, -5]} intensity={1} color="#FF2ED1" />
          
          <FloatingShape position={[-4, 2, -2]} color="#7A00FF" distort={0.4} speed={2} />
          <FloatingShape position={[5, -3, -5]} color="#00F5FF" distort={0.5} speed={1.5} />
          <FloatingShape position={[-2, -4, -8]} color="#FF2ED1" distort={0.3} speed={2.5} />
        </Canvas>
      </div>
    </div>
  );
}
