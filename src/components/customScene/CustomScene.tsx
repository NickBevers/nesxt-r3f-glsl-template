'use client';
import React from "react";
import { Plane } from "@react-three/drei";
import CustomMaterial from "@/materials/customMaterial/CustomMaterial";

export default function CustomScene() {
  return (
    <>
      <Plane args={[1, 1]} position={[0, 0, 0]}>
        <customMaterial
          attach="material"
          // you need the key prop to make sure typescript links this to the THREE namespace
          key={CustomMaterial.key}
        />
      </Plane>
    </>
  );
}