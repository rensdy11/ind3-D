import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../otherComponents/CanvasLoader";
import Monolith from "../otherComponents/Monolith";
import { Leva, useControls } from "leva"; // Import useControls from leva
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const x = useControls('Monolith', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        }, 
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        } ,
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        }, 
        rotationY: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10
        } ,
        scale: {
            value: 1,
            min: 0.1,
            max: 10
        }
        
    });

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-4xl text-3xl font-light text-center">Welcome!</p>
                <p className="sm:text-2xl text-xl text-center font-semibold text-gray-700"> Thank you for visiting</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <perspectiveCamera makeDefault position={[0, 0, 30]} />
                        <Monolith
                        
                            position={[x.positionX, x.positionY, x.positionZ]}
                            rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                            scale={[x.scale, x.scale, x.scale]}
                        />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
