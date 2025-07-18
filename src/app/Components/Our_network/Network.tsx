"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Logo {
  image: string;
}

const logos: Logo[] = [
  { image: "/Partners/Google.png" },
  { image: "/Partners/Ibm.png" },
  { image: "/Partners/MS.png" },
  { image: "/Partners/Mulesoft.png" },
  { image: "/Partners/Red_Hat.png" },
  { image: "/Partners/Tableau.png" },
  { image: "/Partners/TD.png" },
  { image: "/Partners/Block_chain.png" },
];

const ROTATION_INTERVAL = 3000;

const Network = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [rotationStep, setRotationStep] = useState(0);
  const [boxCount, setBoxCount] = useState(4);

  useEffect(() => {
    const updateBoxCount = () => {
      if (window.innerWidth < 768) {
        setBoxCount(2);
      } else {
        setBoxCount(4);
      }
    };

    updateBoxCount();
    window.addEventListener("resize", updateBoxCount);
    return () => window.removeEventListener("resize", updateBoxCount);
  }, []);

  const steps = Array.from({ length: Math.ceil(logos.length / boxCount) }, (_, i) => i * boxCount);
  const startIndex = steps[stepIndex % steps.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
      setRotationStep((prev) => prev + 1);
    }, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="bg-[#F6F6F9] w-full py-10 flex flex-col items-center text-[#003663]">
      <p className="text-2xl font-bold mb-10">Our Network</p>

      <div className="flex gap-8 justify-center items-center flex-wrap">
        {Array.from({ length: boxCount }).map((_, boxIndex) => {
          const baseIndex = (startIndex + boxIndex) % logos.length;
          const faces = Array.from({ length: 4 }).map(
            (_, i) => logos[(baseIndex + i) % logos.length]
          );

          return (
            <div
              key={boxIndex}
              className="relative w-[160px] h-[80px] perspective"
            >
              <div
                className="cube3d"
                style={{
                  transform: `rotateX(-${rotationStep * 90}deg)`,
                }}
              >
                {faces.map((logo, i) => (
                  <div
                    key={i}
                    className="face3d"
                    style={{
                      transform: `rotateX(${i * 90}deg) translateZ(40px)`,
                    }}
                  >
                    <Image
                      src={logo.image}
                      alt="logo"
                      width={100}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .cube3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 1s ease-in-out;
        }

        .face3d {
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Network;
