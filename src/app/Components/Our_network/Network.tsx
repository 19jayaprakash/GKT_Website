// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// interface Logo {
//   image: string;
// }

// const logos: Logo[] = [
//   { image: "/Partners/Google.png" },
//   { image: "/Partners/Ibm.png" },
//   { image: "/Partners/MS.png" },
//   { image: "/Partners/Mulesoft.png" },
//   { image: "/Partners/Red_Hat.png" },
//   { image: "/Partners/Tableau.png" },
//   { image: "/Partners/TD.png" },
//   { image: "/Partners/Block_chain.png" },
// ];

// const ROTATION_INTERVAL = 3000;
// const ROTATION_DURATION = 1000;

// const Network = () => {
//   const [stepIndex, setStepIndex] = useState(0);
//   const [rotationStep, setRotationStep] = useState(0);
//   const [boxCount, setBoxCount] = useState(4);
//   const [visibleLogos, setVisibleLogos] = useState<Logo[]>([]);

//   useEffect(() => {
//     const updateBoxCount = () => {
//       setBoxCount(window.innerWidth < 768 ? 2 : 4);
//     };
//     updateBoxCount();
//     window.addEventListener("resize", updateBoxCount);
//     return () => window.removeEventListener("resize", updateBoxCount);
//   }, []);

//   useEffect(() => {
//     setVisibleLogos(logos.slice(0, boxCount));
//   }, [boxCount]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotationStep((prev) => prev + 1);

//       setTimeout(() => {
//         setVisibleLogos((prev) =>
//           prev.map((_, idx) => logos[(stepIndex * boxCount + idx + boxCount) % logos.length])
//         );
//         setStepIndex((prev) => (prev + 1) % Math.ceil(logos.length / boxCount));
//       }, ROTATION_DURATION);
//     }, ROTATION_INTERVAL);
//     return () => clearInterval(interval);
//   }, [boxCount, stepIndex]);

//   return (
//     <div className="bg-[#F6F6F9] w-full py-10 flex flex-col items-center text-[#003663]">
//       <p className="text-2xl font-bold mb-10">Our Network</p>
//       <div className="flex gap-8 justify-center items-center flex-wrap">
//         {visibleLogos.map((logo, idx) => (
//           <div key={idx} className="relative w-[160px] h-[80px] perspective">
//             <div
//               className="cube3d"
//               style={{
//                 transform: `rotateX(-${rotationStep * 90}deg)`,
//               }}
//             >
//               {[0, 1, 2, 3].map((i) => (
//                 <div
//                   key={i}
//                   className="face3d"
//                   style={{
//                     transform: `rotateX(${i * 90}deg) translateZ(40px)`,
//                   }}
//                 >
//                   <Image
//                     src={logo.image}
//                     alt="logo"
//                     width={100}
//                     height={40}
//                     style={{ objectFit: "contain" }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }

//         .cube3d {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           transform-style: preserve-3d;
//           transition: transform ${ROTATION_DURATION}ms;
//         }

//         .face3d {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: white;
//           border-radius: 12px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//       `}</style>
//     </div>
//   );
// };


// export default Network;


"use client";
import Image from "next/image";
import React from "react";

interface Logo {
  image: string;
  alt: string;
}

const logos: Logo[] = [
  { image: "/Partners/Ibm.png", alt: "IBM" },
  { image: "/Partners/Google.png", alt: "Google" },
  { image: "/Partners/Mulesoft.png", alt: "MuleSoft" },
  { image: "/Partners/MS.png", alt: "Microsoft" },
  { image: "/Partners/Red_Hat.png", alt: "Red Hat" },
  { image: "/Partners/Tableau.png", alt: "Tableau" },
  { image: "/Partners/Block_chain.png", alt: "Blockchain" },
  { image: "/Partners/TD.png", alt: "TD Synnex" },
];

const Network = () => {
  return (
    <div className="bg-[#F6F6F9] w-full py-10 flex flex-col justify-center items-center text-[#003663] px-4">
      <p className="text-2xl font-bold mb-10">Our Network</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-18"
          >
            <div className="relative w-32 h-10">
              <Image
                src={logo.image}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
