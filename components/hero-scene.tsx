"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef, useSyncExternalStore } from "react";
import type { Group, Mesh } from "three";

function StudySystem() {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);

  useFrame((state) => {
    if (!group.current || !ring.current) return;
    const time = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(time * 0.22) * 0.18 - 0.28;
    group.current.rotation.x = Math.sin(time * 0.17) * 0.04;
    ring.current.rotation.z = time * 0.08;
  });

  return (
    <group ref={group} rotation={[-0.08, -0.28, 0.04]}>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.35}>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[3.8, 2.6, 0.18]} />
          <meshStandardMaterial color="#f5f5f7" roughness={0.56} metalness={0.04} />
        </mesh>
        <mesh position={[-0.7, 0.42, 0.14]}>
          <boxGeometry args={[1.85, 0.12, 0.045]} />
          <meshStandardMaterial color="#0047CC" roughness={0.38} />
        </mesh>
        <mesh position={[-0.9, 0.05, 0.14]}>
          <boxGeometry args={[1.45, 0.06, 0.04]} />
          <meshStandardMaterial color="#c2c2c2" roughness={0.7} />
        </mesh>
        <mesh position={[-0.72, -0.2, 0.14]}>
          <boxGeometry args={[1.8, 0.06, 0.04]} />
          <meshStandardMaterial color="#d8d8dc" roughness={0.7} />
        </mesh>
        <mesh position={[1.12, -0.6, 0.16]}>
          <boxGeometry args={[0.7, 0.7, 0.08]} />
          <meshStandardMaterial color="#0047CC" roughness={0.35} metalness={0.08} />
        </mesh>
      </Float>

      <mesh ref={ring} position={[1.3, 0.9, -0.5]} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[0.62, 0.045, 16, 96]} />
        <meshStandardMaterial color="#0047CC" roughness={0.32} metalness={0.18} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.18} floatIntensity={0.45}>
        <mesh position={[-1.55, -1.1, 0.65]} rotation={[0.1, 0.2, -0.22]}>
          <boxGeometry args={[0.72, 0.94, 0.12]} />
          <meshStandardMaterial color="#ffffff" roughness={0.48} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 5, 7]} intensity={3.2} color="#ffffff" />
      <pointLight position={[-3, -2, 3]} intensity={2.2} color="#80a9ff" />
      <StudySystem />
    </>
  );
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", callback);
      return () => query.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function HeroScene({ className = "" }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div className={`${className} scene-fallback`} aria-hidden="true">
        <div className="scene-sheet" />
        <div className="scene-ring" />
      </div>
    );
  }

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
