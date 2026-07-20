"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useSyncExternalStore } from "react";
import { MathUtils, type Group } from "three";

function BrandObjects() {
  const system = useRef<Group>(null);

  useFrame((state) => {
    if (!system.current) return;

    system.current.rotation.x = MathUtils.lerp(
      system.current.rotation.x,
      state.pointer.y * 0.055,
      0.035,
    );
    system.current.rotation.y = MathUtils.lerp(
      system.current.rotation.y,
      state.pointer.x * 0.09,
      0.035,
    );
    system.current.position.y = MathUtils.lerp(
      system.current.position.y,
      state.pointer.y * 0.12,
      0.025,
    );
  });

  return (
    <group ref={system}>
      <group position={[-4.25, 0.35, -0.3]} rotation={[0.12, 0.34, -0.12]}>
        <mesh>
          <coneGeometry args={[1.35, 2.6, 3]} />
          <meshStandardMaterial color="#0047cc" roughness={0.32} metalness={0.04} />
        </mesh>
        <mesh position={[0.82, -1.15, 0.2]} rotation={[-0.15, -0.18, 0.18]}>
          <boxGeometry args={[1.25, 1.55, 0.22]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
      </group>

      <group position={[4.1, -0.1, -0.55]} rotation={[-0.08, -0.28, 0.08]}>
        <mesh rotation={[1.05, 0.2, -0.3]}>
          <torusGeometry args={[1.25, 0.12, 24, 100]} />
          <meshStandardMaterial color="#0047cc" roughness={0.3} metalness={0.08} />
        </mesh>
        <mesh position={[-0.15, -1.35, 0.45]}>
          <boxGeometry args={[1.7, 1.35, 0.3]} />
          <meshStandardMaterial color="#e8e8ed" roughness={0.58} />
        </mesh>
        <mesh position={[0.36, 1.35, -0.12]} rotation={[0.08, 0.18, -0.08]}>
          <boxGeometry args={[1.05, 1.42, 0.12]} />
          <meshStandardMaterial color="#ffffff" roughness={0.52} />
        </mesh>
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.75} />
      <directionalLight position={[2, 5, 7]} intensity={3.1} color="#ffffff" />
      <pointLight position={[-5, -1, 4]} intensity={1.8} color="#82aaff" />
      <BrandObjects />
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
        <span className="scene-fallback-shape" />
        <span className="scene-fallback-shape" />
        <span className="scene-fallback-shape" />
      </div>
    );
  }

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 40 }}
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
