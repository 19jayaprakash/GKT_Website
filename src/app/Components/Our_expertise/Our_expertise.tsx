"use client";
import React, { useEffect, useRef, useState } from "react";
import LearningEdge from "./LearningEdge";
import Products from "./Products";
import Consulting from "./Consulting";
import TextReveal from "../Animation/Animation";

const sections = [
  { title: "GKT Learning Edge" },
  { title: "Consulting & Outsourcing" },
  { title: "Products" },
];

export default function ExpertiseScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const index = sectionRefs.current.findIndex((el) => {
        const rect = el?.getBoundingClientRect();
        return rect && rect.top >= 0 && rect.top < window.innerHeight / 2;
      });
      if (index !== -1) setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    

 return (
  <div className="relative flex flex-col md:flex-row min-h-screen  w-full bg-[#F6F6F9] rounded-t-4xl">
<div
  className={`
    ${isMobile ? "w-full px-4 pt-6 flex flex-col" : "flex-col p-14 w-[26%] h-screen"}
    flex sticky top-0 bg-[#F6F6F9] z-30 rounded-t-4xl
  `}
>

  <div className="w-full text-center mb-4 md:mb-5 mt-4">
    <p className="text-2xl md:text-3xl text-center md:text-start font-bold text-[#004781]">
      Our <br/>Expertise
    </p>
  </div>

  {isMobile ? (
    <div className="flex  justify-center items-center w-full gap-2 overflow-x-auto pb-4">
      {sections.map((item, index) => (
        <button
          key={index}
          className={`flex-shrink-0 px-2 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
            activeIndex === index
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  ) : (
    <>
      {sections.map((item, index) => (
        <div key={index} className="mb-6 transition-all w-full">
          <div
            className={`text-5xl font-medium ${
              activeIndex === index ? "text-black" : "text-gray-300"
            }`}
          >
            <TextReveal>{index + 1}</TextReveal>
          </div>
          <div
            className={`text-base font-semibold whitespace-nowrap ${
              activeIndex === index ? "text-black" : "text-gray-400"
            }`}
          >
            <TextReveal>{item.title}</TextReveal>
          </div>
          <div
            className={`text-sm ${
              activeIndex === index ? "text-gray-600" : "text-gray-300"
            }`}
          >
            <TextReveal>
              Empower students with cutting-edge skills for career
            </TextReveal>
          </div>
        </div>
      ))}
    </>
  )}
</div>


    <div className="w-full md:w-[75%] ">
      <div
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="flex items-center justify-center w-full p-3 md:p-10 space-y-20"
      >
        <LearningEdge />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="h-auto flex items-center justify-center mb-10"
      >
        <Consulting />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="h-auto flex items-center justify-center"
      >
        <Products />
      </div>
    </div>
  </div>
);

}
