// import React from 'react'

// const Spotlight = () => {
//   return (
//     <div className='min-h-screen flex justify-center items-center w-full bg-black text-white text-2xl'>Spotlight</div>
//   )
// }

// export default Spotlight

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import Header from "../Header/Header";

const images = [
  {
    src: "/spotlight/img1.png",
    area: "img1",
    height: 140,
    width: 150,
    justify: "end",
    value:"odd"
  },
  {
    src: "/spotlight/img2.png",
    area: "img2",
    height: 150,
    width: 220,
    justify: "start",
        value:"even"

  },
  {
    src: "/video/ai.mp4",
    area: "main",
    height: 300,
    width: 500,
    justify: "center",
        value:""
  },
  {
    src: "/spotlight/img3.png",
    area: "img4",
    height: 150,
    width: 270,
    justify: "end",
        value:"odd"

  },
  {
    src: "/spotlight/img4.png",
    area: "img5",
    height: 150,
    width: 150,
    justify: "start",
        value:"even"

  },
];


interface Content {
  title:string;
  content:string;
}


const Contents: Content[]=[
  {
    title:"Learning designed for you, success designed by you",
    content:"Get training tailored to YOU—level up fast, flex your skills, and turn your goals into straight-up wins. Prepared to succeed? Let's get started.",
  },
   {
    title:"Ready to Level Up? Join Expert-Led Training That Powers Your Growth!",
    content:"Learn straight from the pros, boost your skills, and turn every challenge into your next big win. Ready to unleash your abilities? Time to dive in!",
  },
   {
    title:"Learning That Keeps Pace with Change",
    content:"Our curriculum’s always updated with the latest tools, tech, and trends—so you’re never left behind. Ready to stay sharp and boss up? Let’s do this!",
  },
]

const Spotlight:React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex , setActiveIndex]=useState(0);

   

     useEffect(() => {    
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) =>
            prevIndex === Contents.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);


      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


  return (
    <>
      {/* <Header/> */}
       <section className="bg-black text-white py-32 flex flex-col min-h-screen overflow-hidden justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <h2 className="text-xl md:text-xl font-medium transition-all transform ease-in duration-700">
          {Contents[activeIndex].title}
        </h2>
        <p className="text-gray-200 text-base opacity-50 md:text-sm mt-2 w-10/12 md:w-8/12 ">
          {Contents[activeIndex].content}
        </p>
      </div>
      <div
   className="grid gap-6 w-auto "
        style={{
          display: "grid",
          gridTemplateAreas: `
            "img1  main img2"
            "img4 main img5"
          `,
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`${
              image.area !== "main" ? "hidden md:flex" : "flex mt-52 w-[80%] mx-auto"
            } justify-${image.justify} items-end mt-[2px] md:mt-[20px] xl:mt-[5px] w-60 md:w-60 xl:w-auto hover:scale-105 transition duration-400 cursor-pointer`}
            style={{ gridArea: image.area }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: `${image.area == "main" && isMobile ? image.width - 100 : image.width}px`,
                height: `${isMobile ? image.height + 150 :image.height + 10}px`,
                position: "relative",
                marginTop:`${isMobile ? "40px":""}`
              }}
            >
              {
                image.area =="main" ? (
                  <video
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  className="rounded-2xl absolute z-20 shadow-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                ) : (
                     <Image
                src={image.src}
                alt={`AI Image ${index + 1}`}
                objectFit="contain"
                width={image.width}
                height={image.height}
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`,
                }}
                // className={`rounded-2xl absolute z-10 ${image.value == "even" ? "-ml-10" : "ml-10"}`}
                 className={`rounded-2xl`}

              />
                )
              }
           
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
   
  );
};

export default Spotlight;

// "use client";
 
// import React, { useState, useEffect, useRef } from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import Image from "next/image";
 
// const services = [
//   {
//     id: 1,
//     title: "Specialist Resource Support",
//     description:
//       "Strengthen your team with top-tier IT professionals tailored to your project needs. Our flexible resource augmentation services help bridge skill gaps, handle peak workloads, and infuse specialized expertise into your initiatives.",
//     detail:
//       "We ensure a perfect fit by aligning our experts with your unique requirements, enabling smooth integration and instant value delivery.",
//     image: "/Consulting/outsourcing/support1.png",
//     color: "from-blue-500 to-purple-600",
//     anglevalue:180,
//   },
//   {
//     id: 2,
//     title: "End-to-End IT Support",
//     description:
//       "Focus on your business priorities while we take full ownership of your IT environment. Our managed services deliver continuous oversight and expert care for your infrastructure, software, and operational processes.",
//     detail:
//       "With proactive monitoring, routine maintenance, and swift issue resolution, we ensure your systems remain secure, efficient, and reliable, eliminating downtime and reducing risks. Partner with us to transform your IT from a cost centre into a strategic asset.",
//     image: "/Consulting/outsourcing/end1.png",
//     color: "from-cyan-500 to-blue-600",
//         anglevalue:130,

//   },
//   {
//     id: 3,
//     title: "Adaptive Workforce Solutions",
//     description:
//       "Stay agile in a dynamic business environment with our customizable staffing options. From short-term contracts and contract-to-hire arrangements to permanent hires",
//     detail:
//       "We deliver the precise talent your organization needs. Whether you're scaling for a project or strengthening your core team, our flexible approach ensures you get the right professionals exactly when you need them.",
//     image: "/Consulting/outsourcing/workforce1.png",
//     color: "from-cyan-500 to-blue-600",
//         anglevalue:80,

//   },
// ];

// const Spotlight: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const wheelControls = useAnimation();

//   // Auto-rotation interval (5 seconds per card)
//   const ROTATION_INTERVAL = 3000;

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Continuous windmill rotation
//   useEffect(() => {
//     wheelControls.start({
//       rotate: [0,100],
//        y: [0, -130, -190],
//       transition: {
//         duration: 9,
//         ease: "linear",
//         repeat: Infinity,
//       }
//     });
//   }, [wheelControls]);

//   // Auto-advance to next card
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % services.length);
//     }, ROTATION_INTERVAL);

//     return () => clearInterval(timer);
//   }, []);

//   if (isMobile) {
//     return (
//       <div className="relative w-full bg-white py-10">
//         <div className="px-4 mb-8">
//           <p className="text-[#001A75] text-xl font-semibold">Outsourcing</p>
//         </div>

//         <div className="relative flex flex-col items-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="w-[90%] bg-white rounded-lg border border-gray-100 mb-8 p-4"
//             >
//               <img
//                 src={services[activeIndex].image}
//                 alt={services[activeIndex].title}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-lg text-center font-semibold text-gray-900 mb-2">
//                 {services[activeIndex].title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-2 text-justify">
//                 {services[activeIndex].description}
//               </p>
//               <p className="text-gray-600 text-sm text-justify">
//                 {services[activeIndex].detail}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Progress indicators */}
//           <div className="flex gap-2 mt-4">
//             {services.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`h-2 rounded-full transition-all ${
//                   idx === activeIndex ? "w-8 bg-[#001A75]" : "w-2 bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const radius = 400;
//   const startAngle = 100; // Start from top
//   const angleStep = 100 / (services.length - 1) ; 
//   return (
//     <div className="relative w-full min-h-screen py-10 bg-white">
//       <div className="relative flex w-full min-h-screen">
//         {/* Left content panel */}
//         <div className="w-3/4 px-20 py-20 bg-white flex flex-col justify-center">
//           <p className="text-[#001A75] text-2xl font-semibold mb-8">
//             Outsourcing
//           </p>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 30 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="flex flex-col justify-center w-full"
//             >
//               <h2 className="text-4xl font-bold text-black mb-3">
//                 {services[activeIndex].title}
//               </h2>
//               <p className="mt-4 mb-3 text-lg text-gray-700">
//                 {services[activeIndex].description}
//               </p>
//               <p className="mt-2 text-lg text-gray-700">
//                 {services[activeIndex].detail}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation dots */}
//           <div className="flex gap-3 mt-8">
//             {services.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`h-3 rounded-full transition-all ${
//                   idx === activeIndex ? "w-10 bg-[#001A75]" : "w-3 bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right image wheel */}
//         <div className="w-1/2  sticky top-20 h-[510px] flex items-start justify-center overflow-hidden">
//             <motion.div
//             animate={wheelControls}
//         style={{
//           // rotate:100,
//           position: "absolute",
//           right: -radius,
//           top: "50%",
//           width: radius * 2,
//           height: radius * 2,
//           marginTop: -radius,
//           pointerEvents: "none",
// y:-130
//         }}
//       >
//               {services.toReversed().map((s, i) => {
               
//                 const angle = startAngle + i * angleStep // deg
//                 const tileW = 480;
//                 const tileH = 120;
       
//                 return (
//                   <motion.div
//                     key={s.id}
//                     style={{
//                       position: "absolute",
//                       left: "50%",
//                       top: "50%",
//                       width: `${tileW}px`,
//                       height: `${tileH}px`,
// transform: `rotate(${s.anglevalue}deg) translate(${radius}px)  `,
//                       transformOrigin: "center center",
//                       display: "flex",
//                       alignItems: "start",
//                       justifyContent: "center",
//                     //  x:-400
//                     }}
                   
//         // animate={{
//         //   opacity: activeIndex === 6 - i ? 1 : 0.1, // smooth transition
//         // }}
//         transition={{
//           duration: 0.8, // duration in seconds
//           ease: "easeInOut",
//         }}
//                   >
//                     <Image
//                       src={s.image}
//                       alt={s.title}
//                       width={tileW}
//                       height={tileH}
//                       className="object-cover  rounded-sm scale-y-[-1] scale-x-[-1]"
//                       unoptimized  
                      
//                     />
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//               </div>
//       </div>
//     </div>
//   );
// };

// export default Spotlight;