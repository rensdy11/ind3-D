import {Canvas} from "@react-three/fiber";
const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-4xl text-3xl font-light text-center">Welcome,Bienvenue,Welkom,Irasshaimasse</p>
                <p className="sm:text-2xl text-xl text-center font-semibold text-gray-700"> Thank you for visiting</p>

            </div>
            <div className="w-full h-full absolute inset-0">

                <Canvas className="w-full h-full">
                    <perspectiveCamera makeDefault position={[0,0,30]}/>
                     
 
                </Canvas>
            </div>
        
        </section>
    )
}
export default Hero;