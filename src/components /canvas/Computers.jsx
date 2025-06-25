
import {Suspense, useEffect, useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <>
      <ambientLight intensity={0.15} />
      <hemisphereLight intensity={2.0} groundColor="black"/>
      <pointLight intensity={3} position={[0, 0, 0]} />
      <spotLight
        position={[-20, 50, 10]}
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile? 0.6 : 0.75}
        position={isMobile?[0, -3, -2.2]:[0, -3.30, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  })

  return(
    <div style={{ width: '100%', height: '700px' }}>
      <Canvas camera={{position: [20, 3, 5], fov: 25}}>
        <Suspense fallback={<CanvasLoader/>}>
          
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ComputersCanvas