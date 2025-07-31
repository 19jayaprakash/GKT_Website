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
       <section className="bg-black text-white py-32 flex flex-col min-h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full text-center">
        <h2 className="text-xl md:text-xl font-medium transition-all transform ease-in duration-700">
          {Contents[activeIndex].title}
        </h2>
        <p className="text-gray-400 text-base opacity-50 md:text-sm mt-2 w-8/12">
          {Contents[activeIndex].content}
        </p>
      </div>

      <div
        className="grid gap-6 w-auto"
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
              image.area !== "main" ? "hidden md:flex" : "flex mt-52"
            } justify-${image.justify} items-end mt-[2px] md:mt-[20px] xl:mt-[5px] w-60 md:w-60 xl:w-auto`}
            style={{ gridArea: image.area }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: `${image.area == "main" && isMobile ? image.width - 200 : image.width}px`,
                height: `${isMobile ? image.height +50 :image.height +10}px`,
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
