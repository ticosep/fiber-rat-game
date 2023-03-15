import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshRef } from "../../../types";

export function SpinningWheel() {
  const ref = useRef<MeshRef>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta;
    }
  });

  return (
    <mesh ref={ref} position={[-2, 0, 0]} rotation={[0, -1, 0]}>
      <mesh key="first-ring" ref={ref} position={[0, 0, 0]}>
        <meshStandardMaterial color="orange" />
        <ringGeometry args={[2, 2.5, 8]} />
      </mesh>
      <mesh key="second-ring" ref={ref} position={[0, 0, -2]}>
        <meshStandardMaterial color="hotpink" />
        <ringGeometry args={[2, 2.5, 8]} />
      </mesh>
    </mesh>
  );
}
