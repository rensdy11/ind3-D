import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import CanvasLoader from "../otherComponents/CanvasLoader";
import Scene from "../otherComponents/Scene";
import { Leva, useControls } from "leva";
import "animate.css";

const Hero = () => {
  const [currentText, setCurrentText] = useState("Welcome");
  const texts = ["Welcome", "Bienvenue", "ようこそ", "Wilkommen", "Bienvenidos"]; // Texts to cycle through
  const [isFlipping, setIsFlipping] = useState(false);
  const [isLevaVisible, setIsLevaVisible] = useState(false); // Initialize to false to hide Leva initially

  // Toggle Leva visibility on 'h' key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "h" || event.key === "H") {
        setIsLevaVisible((prev) => !prev); // Toggle visibility
        console.log("Leva visibility toggled:", !prev); // Debugging statement
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setCurrentText(texts[currentIndex]);
        setIsFlipping(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const x = useControls("Monolith", {
    positionX: {
      value: 0,
      min: -10,
      max: 10,
    },
    positionY: {
      value: -3,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: -5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 0.2,
      min: 0.1,
      max: 10,
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3 z-10 relative">
        <div className="flex justify-center">
          <div
            className="flip-card"
            style={{
              perspective: "1000px",
              width: "200px",
              height: "60px",
            }}
          >
            <div
              className={`flip-card-inner ${isFlipping ? "flip" : ""}`}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                textAlign: "center",
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="flip-card-front absolute w-full h-full flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="sm:text-8xl text-3xl text-blue-700 font-carrois glow-text">
                  {currentText}
                </p>
              </div>
              <div
                className="flip-card-back absolute w-full h-full flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <p className="sm:text-4xl text-3xl font-light text-blue-700">
                  {texts[(texts.indexOf(currentText) + 1) % texts.length]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="sm:text-3xl text-2xl text-center font-bold text-gray-600 m-14">
          You've come to the right place
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* Conditionally render Leva based on isLevaVisible state */}
        {isLevaVisible && <Leva />}
        <Suspense fallback={<CanvasLoader />}>
          <Scene
            position={[x.positionX, x.positionY, x.positionZ]}
            rotation={[x.rotationX, x.rotationY, x.rotationZ]}
            scale={[x.scale, x.scale, x.scale]}
          />
        </Suspense>
      </div>

      <style>
        {`
          .flip-card {
            perspective: 1000px;
            width: 200px;
            height: 60px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .flip-card-back {
            transform: rotateX(180deg);
          }

          .flip-card-inner.flip {
            transform: rotateX(180deg);
          }

          .glow-text {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.6), 0 0 10px rgba(59, 130, 246, 0.6), 0 0 15px rgba(59, 130, 246, 0.6);
          }

          .gradient-text {
            background: linear-gradient(45deg, #3b82f6, #9333ea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .shadow-text {
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
