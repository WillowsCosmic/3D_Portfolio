import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {

  //   ref - References the Points component for animation
  // sphere - Generates 5000 random positions inside a sphere
  // radius: 1.2 - Stars distributed within 1.2 units from center

  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  //   delta - Time since last frame (smooth animation)
  // Slow rotation - /10 makes it gentle
  // Both X & Y rotation - Creates tumbling effect

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>

    </div>
  )
}

export default StarsCanvas