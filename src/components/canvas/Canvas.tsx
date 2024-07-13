'use client';
import React from "react";
import { Canvas } from "@react-three/fiber";
import CustomScene from "@components/customScene/CustomScene";
import { PerspectiveCamera } from "@react-three/drei";

export default function CanvasComponent() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 1]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CustomScene />
    </Canvas>
  );
}