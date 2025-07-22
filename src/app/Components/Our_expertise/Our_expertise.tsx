// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import LearningEdge from "./LearningEdge";
// import Products from "./Products";
// import Consulting from "./Consulting";
// import TextReveal from "../Animation/Animation";

// const sections = [
//   { title: "GKT Learning Edge" },
//   { title: "Consulting & Outsourcing" },
//   { title: "Products" },
// ];

// export default function ExpertiseScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const index = sectionRefs.current.findIndex((el) => {
//         const rect = el?.getBoundingClientRect();
//         return rect && rect.top >= 0 && rect.top < window.innerHeight / 2;
//       });
//       if (index !== -1) setActiveIndex(index);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//     const [isMobile, setIsMobile] = useState(false);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setIsMobile(window.innerWidth < 768);
//       };
  
//       handleResize();
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
    

//  return (
//   <div className="relative flex flex-col md:flex-row min-h-screen  w-full bg-[#F6F6F9] rounded-t-4xl">
// <div
//   className={`
//     ${isMobile ? "w-full px-4 pt-6 flex flex-col" : "flex-col p-14 w-[26%] h-screen"}
//     flex sticky top-0 bg-[#F6F6F9] z-30 rounded-t-4xl
//   `}
// >

//   <div className="w-full text-center mb-4 md:mb-5 mt-4">
//     <p className="text-2xl md:text-3xl text-center md:text-start font-bold text-[#004781]">
//       Our <br/>Expertise
//     </p>
//   </div>

//   {isMobile ? (
//     <div className="flex  justify-center items-center w-full gap-2 overflow-x-auto pb-4">
//       {sections.map((item, index) => (
//         <button
//           key={index}
//           className={`flex-shrink-0 px-2 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
//             activeIndex === index
//               ? "bg-black text-white"
//               : "bg-gray-100 text-gray-500"
//           }`}
//         >
//           {item.title}
//         </button>
//       ))}
//     </div>
//   ) : (
//     <>
//       {sections.map((item, index) => (
//         <div key={index} className="mb-6 transition-all w-full">
//           <div
//             className={`text-5xl font-medium ${
//               activeIndex === index ? "text-black" : "text-gray-300"
//             }`}
//           >
//             <TextReveal>{index + 1}</TextReveal>
//           </div>
//           <div
//             className={`text-base font-semibold whitespace-nowrap ${
//               activeIndex === index ? "text-black" : "text-gray-400"
//             }`}
//           >
//             <TextReveal>{item.title}</TextReveal>
//           </div>
//           <div
//             className={`text-sm ${
//               activeIndex === index ? "text-gray-600" : "text-gray-300"
//             }`}
//           >
//             <TextReveal>
//               Empower students with cutting-edge skills for career
//             </TextReveal>
//           </div>
//         </div>
//       ))}
//     </>
//   )}
// </div>


//     <div className="w-full md:w-[75%] ">
//       <div
//         ref={(el) => {
//           sectionRefs.current[0] = el;
//         }}
//         className="flex items-center justify-center w-full p-3 md:p-10 space-y-20"
//       >
//         <LearningEdge />
//       </div>
//       <div
//         ref={(el) => {
//           sectionRefs.current[1] = el;
//         }}
//         className="h-auto flex items-center justify-center mb-10"
//       >
//         <Consulting />
//       </div>
//       <div
//         ref={(el) => {
//           sectionRefs.current[2] = el;
//         }}
//         className="h-auto flex items-center justify-center"
//       >
//         <Products />
//       </div>
//     </div>
//   </div>
// );

// }










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
  const scrollLock = useRef(false); // to prevent rapid scrolling
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
 
// Intersection Observer to detect when component is in view
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Immediately scroll to first section and set active index
        setTimeout(() => {
          if (sectionRefs.current[0]) {
            sectionRefs.current[0].scrollIntoView({ behavior: "smooth" });
            setActiveIndex(0);
          }
        }, 100);
      } else {
        setIsInView(false);
      }
    },
    {
      threshold: 0.3, // Reduced threshold for earlier detection
      rootMargin: "0px" // Adjust margins
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
}, []);
 
 
 
 
 
  // Handle wheel scroll to jump to next/previous section
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollLock.current || !isInView) return; // Only work when component is in view
 
      scrollLock.current = true;
      console.log(e.deltaY);
     
 if (e.deltaY > 0 && activeIndex < sectionRefs.current.length - 1) {
 
     
        const nextIndex =  activeIndex+1;
        sectionRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth" });
        setActiveIndex(nextIndex);
       
 
      } else if(e.deltaY < 0 && activeIndex > 0) {
        // Scroll Up
        const prevIndex = activeIndex - 1;
        sectionRefs.current[prevIndex]?.scrollIntoView({ behavior: "smooth" });
        setActiveIndex(prevIndex);
      }
 
      // Debounce scroll
      setTimeout(() => {
        scrollLock.current = false;
      }, 1000); // Adjust timing as needed
    };
 
    window.addEventListener("wheel", handleWheel, { passive: false });
 
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, isInView]);
 
  // Mobile detection
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
          flex sticky top-0 bg-[#F6F6F9] z-30 rounded-t-4xl
        `}
      >
        <div className="w-full text-center mb-4 md:mb-5 mt-4">
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
 
      <div className="w-full md:w-[75%]">
        <div
          ref={(el) => {sectionRefs.current[0] = el}}
          className="flex items-center justify-center w-full p-3 md:p-10 space-y-20 min-h-screen"
        >
          <LearningEdge />
        </div>
        <div
          ref={(el) => {sectionRefs.current[1] = el}}
          className="h-auto flex items-center justify-center mb-10 min-h-screen"
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
 





//working code 



// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import LearningEdge from "./LearningEdge";
// import Products from "./Products";
// import Consulting from "./Consulting";
// import TextReveal from "../Animation/Animation";

// const sections = [
//   { title: "GKT Learning Edge" },
//   { title: "Consulting & Outsourcing" },
//   { title: "Products" },
// ];

// export default function ExpertiseScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const scrollLock = useRef(false);
//   const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const lastActiveIndex = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const wasInView = isInView;
//         setIsInView(entry.isIntersecting);
//         if (entry.isIntersecting && !wasInView) {
//           sectionRefs.current[lastActiveIndex.current]?.scrollIntoView({ behavior: "auto" });
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current);
//     };
//   }, [isInView]);

//   useEffect(() => {
//     lastActiveIndex.current = activeIndex;
//   }, [activeIndex]);

//   useEffect(() => {
//     if (!isInView) return;

//     const observers: IntersectionObserver[] = [];
//     const options = {
//       threshold: 0.8,
//       rootMargin: "0px"
//     };

//     sectionRefs.current.forEach((section, index) => {
//       if (!section) return;
//       const observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           setActiveIndex(index);
//         }
//       }, options);
//       observer.observe(section);
//       observers.push(observer);
//     });

//     return () => observers.forEach(obs => obs.disconnect());
//   }, [isInView]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (scrollLock.current || !isInView) return;
//       e.preventDefault();
//       scrollLock.current = true;

//       let newIndex = activeIndex;

//       if (e.deltaY > 0 && activeIndex < sections.length - 1) {
//         newIndex = activeIndex + 1;
//       } else if (e.deltaY < 0 && activeIndex > 0) {
//         newIndex = activeIndex - 1;
//       }

//       if (newIndex !== activeIndex) {
//         sectionRefs.current[newIndex]?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//         setActiveIndex(newIndex);
//       }

//       setTimeout(() => {
//         scrollLock.current = false;
//       }, 1000);
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [activeIndex, isInView]);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex flex-col md:flex-row min-h-screen w-full bg-[#F6F6F9] rounded-t-4xl"
//     >
//       <div
//         className={`${
//           isMobile ? "w-full px-4 pt-6" : "sticky top-0 w-[26%] p-14 h-screen"
//         } flex flex-col bg-[#F6F6F9] z-30 rounded-t-4xl`}
//       >
//         <div className="w-full text-center mb-4 md:mb-5 mt-4">
//           <p className="text-2xl md:text-3xl text-center md:text-start font-bold text-[#004781]">
//             Our <br />
//             Expertise
//           </p>
//         </div>

//         {isMobile ? (
//           <div className="flex justify-center items-center w-full gap-2 overflow-x-auto pb-4">
//             {sections.map((item, index) => (
//               <button
//                 key={index}
//                 className={`flex-shrink-0 px-2 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
//                   activeIndex === index
//                     ? "bg-black text-white"
//                     : "bg-gray-100 text-gray-500"
//                 }`}
//                 onClick={() => {
//                   sectionRefs.current[index]?.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                   setActiveIndex(index);
//                 }}
//               >
//                 {item.title}
//               </button>
//             ))}
//           </div>
//         ) : (
//           sections.map((item, index) => (
//             <div key={index} className="mb-6 transition-all w-full">
//               <div
//                 className={`text-5xl font-medium ${
//                   activeIndex === index ? "text-black" : "text-gray-300"
//                 }`}
//               >
//                 <TextReveal>{index + 1}</TextReveal>
//               </div>
//               <div
//                 className={`text-base font-semibold whitespace-nowrap ${
//                   activeIndex === index ? "text-black" : "text-gray-400"
//                 }`}
//               >
//                 <TextReveal>{item.title}</TextReveal>
//               </div>
//               <div
//                 className={`text-sm ${
//                   activeIndex === index ? "text-gray-600" : "text-gray-300"
//                 }`}
//               >
//                 <TextReveal>
//                   Empower students with cutting-edge skills for career
//                 </TextReveal>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div
//         className="w-full md:w-[74%] overflow-y-auto scroll-smooth"
//         style={{ scrollSnapType: "y mandatory" }}
//       >
//         <div
//           ref={(el) => {
//             sectionRefs.current[0] = el;
//           }}
//           className="flex items-center justify-center w-full p-3 md:p-10 space-y-20 min-h-screen"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <LearningEdge />
//         </div>
//         <div
//           ref={(el) => {
//             sectionRefs.current[1] = el;
//           }}
//           className="flex items-center justify-center mb-10 min-h-screen"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <Consulting />
//         </div>
//         <div
//           ref={(el) => {
//             sectionRefs.current[2] = el;
//           }}
//           className="flex items-center justify-center min-h-screen"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <Products />
//         </div>
//       </div>
//     </div>
//   );
// }






// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import LearningEdge from "./LearningEdge";
// import Products from "./Products";
// import Consulting from "./Consulting";
// import TextReveal from "../Animation/Animation";

// const sections = [
//   { title: "GKT Learning Edge" },
//   { title: "Consulting & Outsourcing" },
//   { title: "Products" },
// ];

// export default function ExpertiseScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const scrollLock = useRef(false);
//   const [isInView, setIsInView] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const lastActiveIndex = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const wasInView = isInView;
//         setIsInView(entry.isIntersecting);
//         if (entry.isIntersecting && !wasInView) {
//           sectionRefs.current[lastActiveIndex.current]?.scrollIntoView({ behavior: "auto" });
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current);
//     };
//   }, [isInView]);

//   useEffect(() => {
//     lastActiveIndex.current = activeIndex;
//   }, [activeIndex]);

//   useEffect(() => {
//     if (!isInView) return;

//     const observers: IntersectionObserver[] = [];
//     const options = {
//       threshold: 0.8,
//       rootMargin: "0px"
//     };

//     sectionRefs.current.forEach((section, index) => {
//       if (!section) return;
//       const observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           setActiveIndex(index);
//         }
//       }, options);
//       observer.observe(section);
//       observers.push(observer);
//     });

//     return () => observers.forEach(obs => obs.disconnect());
//   }, [isInView]);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (scrollLock.current || !isInView) return;
//       e.preventDefault();
//       scrollLock.current = true;

//       let newIndex = activeIndex;

//       if (e.deltaY > 0 && activeIndex < sections.length - 1) {
//         newIndex = activeIndex + 1;
//       } else if (e.deltaY < 0 && activeIndex > 0) {
//         newIndex = activeIndex - 1;
//       }

//       if (newIndex !== activeIndex) {
//         sectionRefs.current[newIndex]?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//         setActiveIndex(newIndex);
//       }

//       setTimeout(() => {
//         scrollLock.current = false;
//       }, 1000);
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [activeIndex, isInView]);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex flex-col md:flex-row min-h-screen w-full bg-[#F6F6F9] rounded-t-4xl"
//     >
//       <div
//         className={`${
//           isMobile ? "w-full px-4 pt-6" : "sticky top-0 w-[26%] p-14 h-screen"
//         } flex flex-col bg-[#F6F6F9] z-30 rounded-t-4xl`}
//       >
//         <div className="w-full text-center mb-4 md:mb-5 mt-4">
//           <p className="text-2xl md:text-3xl text-center md:text-start font-bold text-[#004781]">
//             Our <br />
//             Expertise
//           </p>
//         </div>

//         {isMobile ? (
//           <div className="flex justify-center items-center w-full gap-2 overflow-x-auto pb-4">
//             {sections.map((item, index) => (
//               <button
//                 key={index}
//                 className={`flex-shrink-0 px-2 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
//                   activeIndex === index
//                     ? "bg-black text-white"
//                     : "bg-gray-100 text-gray-500"
//                 }`}
//                 onClick={() => {
//                   sectionRefs.current[index]?.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                   setActiveIndex(index);
//                 }}
//               >
//                 {item.title}
//               </button>
//             ))}
//           </div>
//         ) : (
//           sections.map((item, index) => (
//             <div key={index} className="mb-6 transition-all w-full">
//               <div
//                 className={`text-5xl font-medium ${
//                   activeIndex === index ? "text-black" : "text-gray-300"
//                 }`}
//               >
//                 <TextReveal>{index + 1}</TextReveal>
//               </div>
//               <div
//                 className={`text-base font-semibold whitespace-nowrap ${
//                   activeIndex === index ? "text-black" : "text-gray-400"
//                 }`}
//               >
//                 <TextReveal>{item.title}</TextReveal>
//               </div>
//               <div
//                 className={`text-sm ${
//                   activeIndex === index ? "text-gray-600" : "text-gray-300"
//                 }`}
//               >
//                 <TextReveal>
//                   Empower students with cutting-edge skills for career
//                 </TextReveal>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div
//         className="w-full md:w-[74%] overflow-y-auto scroll-smooth"
//         style={{ scrollSnapType: "y mandatory" }}
//       >
//         <div
//           ref={(el) => {
//             sectionRefs.current[0] = el;
//           }}
//           className="flex items-center justify-center w-full p-3 md:p-10 space-y-20 min-h-screen"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <LearningEdge />
//         </div>
//         <div
//           ref={(el) => {
//             sectionRefs.current[1] = el;
//           }}
//           className="flex items-center justify-center mb-10 min-h-screen"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <Consulting />
//         </div>
//         <div
//           ref={(el) => {
//             sectionRefs.current[2] = el;
//           }}
//           className="flex items-center justify-center min-h-screen"
//           style={{ scrollSnapAlign: "start" }}
//         >
//           <Products />
//         </div>
//       </div>
//     </div>
//   );
// }
