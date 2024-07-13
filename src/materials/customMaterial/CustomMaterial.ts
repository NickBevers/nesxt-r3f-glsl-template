import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

// Import the shaders
import customFragmentShader from "@shaders/customFragment.glsl";
import customVertexShader from "@shaders/customVertex.glsl";

const CustomMaterial = shaderMaterial(
  // uniforms you need in the fragment and vertex shaders
  {},
  // The vertex shader
  customVertexShader,

  // The fragment shader
  customFragmentShader
);

extend({ CustomMaterial })

export default CustomMaterial