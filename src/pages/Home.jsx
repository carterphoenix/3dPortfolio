import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import HomeInfo from "../components/HomeInfo";
import Ship from "../models/Ship";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;  

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setisPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } 

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation]
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    {currentStage && <HomeInfo currentStage={currentStage}/>}
    </div>
        <Canvas 
          className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
                <directionalLight postion={[1,1,1]} intensity={5}/>
                <ambientLight intensity={1}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                
                <Bird />
                <Sky isRotating={isRotating} />
                <Island
                  position={[0, 0, -150]}
                  scale={[1.2, 1.2, 1.2]} 
                  rotation={islandRotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage={setCurrentStage}
                />
                <Ship
                  isRotating={isRotating}
                  scale={[1.2, 1.2, 1.2]}
                  position={[0, -8, -4]}
                  rotation={[0, 3, 0]} 
                  />
            </Suspense>
        </Canvas>

        <div className="absolute bottom-2 left-2">
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setisPlayingMusic(!isPlayingMusic)}
        />
        </div>
    </section>
  )
}

export default Home