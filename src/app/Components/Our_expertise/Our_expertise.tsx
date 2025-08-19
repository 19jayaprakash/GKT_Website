"use client";
import React, { useEffect, useRef, useState } from "react";
import LearningEdge from "./LearningEdge";
import Products from "./Products";
import Consulting from "./Consulting";
import TextReveal from "../Animation/Animation";
 
const sections = [
  { title: "GKT Learning Edge",content:"Empowering Growth, Innovation, Resilience" },
  { title: "Consulting & Outsourcing",content:"Unlocking Growth with Future-Ready IT Solutions" },
  { title: "Products",content:"Your Edge in a Rapidly Evolving Digital World" },
];
 
export default function ExpertiseScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollLock = useRef(false); 
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false); 
 
 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
       
        setIsInView(true);
        if(!hasInitialized.current){
        setTimeout(() => {
          if (sectionRefs.current[0]) {
            sectionRefs.current[0].scrollIntoView({ behavior: "smooth" });
            setActiveIndex(0);
            hasInitialized.current=true;
          }
        }, 100);
      }
      } else {
        setIsInView(false);
      }
    },
   {
  threshold: 1,
  rootMargin: "1000px" 
}
 
  );
 
  if (containerRef.current) {
    observer.observe(containerRef.current);
  }
 
  return () => {
    if (containerRef.current) {
      observer.unobserve(containerRef.current);
    }
  };
},[]);

useEffect(() => {
const handleWheel = (e: WheelEvent) => {

      if (scrollLock.current || !isInView) return; 
 
      scrollLock.current = true;
     
 if (e.deltaY > 0 && activeIndex < sectionRefs.current.length - 1) {
 
     
        const nextIndex =  activeIndex+1;
        sectionRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth" });
        setActiveIndex(nextIndex);
       
      } else if(e.deltaY < 0 && activeIndex > 0) {
        const prevIndex = activeIndex - 1;
        sectionRefs.current[prevIndex]?.scrollIntoView({ behavior: "smooth" });
        setActiveIndex(prevIndex);
      }
 
      setTimeout(() => {
        scrollLock.current = false;
      }, 1000); 
    };
 
    window.addEventListener("wheel", handleWheel, { passive: false });
 
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, isInView]);
 
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
    <div
      ref={containerRef}
      className="relative flex flex-col md:flex-row min-h-screen w-full bg-[#F6F6F9] rounded-t-4xl"
    >
      <div
        className={`
          ${isMobile ? "w-full px-4 pt-6 flex flex-col" : "flex-col p-14 w-[26%] h-screen"}
          flex sticky top-6 bg-[#F6F6F9] z-30 rounded-t-4xl
        `}
      >
        <div className="w-full text-center mb-4 md:mb-10 mt-4">
          <p className="text-2xl md:text-3xl text-center md:text-start font-bold text-[#004781]">
            Our <br />
            Expertise
          </p>
        </div>
 
        {isMobile ? (
          <div className="flex justify-center items-center w-full gap-2 overflow-x-auto pb-4">
            {sections.map((item, index) => (
              <button
                key={index}
                className={`flex-shrink-0 px-2 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                  activeIndex === index
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-500"
                }`}               
                onClick={() => {
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setActiveIndex(index);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        ) : (
          <>
            {sections.map((item, index) => (
              <div key={index} className="mb-5 transition-all w-full">
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
                  className={`text-xs ${
                    activeIndex === index ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <TextReveal>
                    {/* Empower students with cutting-edge skills for career */}
                    {item.content}
                  </TextReveal>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
 
      <div className="w-full md:w-[75%]">
        <div
          ref={(el) => {sectionRefs.current[0] = el}}
          className="flex items-center justify-center p-4 min-h-screen"
        >
          <LearningEdge />
        </div>
        <div
          ref={(el) => {sectionRefs.current[1] = el}}
          className="h-auto flex items-center justify-center  min-h-screen"
        >
          <Consulting />
        </div>
        <div
          ref={(el) => {sectionRefs.current[2] = el}}
          className="h-auto flex items-center justify-center min-h-screen"
        >
          <Products />
        </div>
      </div>
    </div>
  );
}
 
 
 
 
 
 
 