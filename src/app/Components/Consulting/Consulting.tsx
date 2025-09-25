"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Specialist Resource Support",
    description:
      "Strengthen your team with top-tier IT professionals tailored to your project needs. Our flexible resource augmentation services help bridge skill gaps, handle peak workloads, and infuse specialized expertise into your initiatives.",
    detail:
      "We ensure a perfect fit by aligning our experts with your unique requirements, enabling smooth integration and instant value delivery.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "End-to-End IT Support",
    description:
      "Focus on your business priorities while we take full ownership of your IT environment. Our managed services deliver continuous oversight and expert care for your infrastructure, software, and operational processes.",
    detail:
      "With proactive monitoring, routine maintenance, and swift issue resolution, we ensure your systems remain secure, efficient, and reliable, eliminating downtime and reducing risks. Partner with us to transform your IT from a cost centre into a strategic asset.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    title: "Adaptive Workforce Solutions",
    description:
      "Stay agile in a dynamic business environment with our customizable staffing options. From short-term contracts and contract-to-hire arrangements to permanent hires",
    detail:
      "we deliver the precise talent your organization needs. Whether you're scaling for a project or strengthening your core team, our flexible approach ensures you get the right professionals exactly when you need them.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    title: "Industry-Leading Expertise",
    description:
      "Tap into a curated network of IT specialists across diverse fields such as cloud computing, cybersecurity, DevOps, data analytics, artificial intelligence, networking, and beyond.",
    detail:
      "Our professionals continuously upgrade their skills and certifications to stay ahead of industry advancements, delivering innovative solutions and deep domain knowledge that empower your business to thrive.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 5,
    title: "Affordable Talent Solutions",
    description:
      "Maximize your budget while accessing top-tier talent through our economical outsourcing options. Designed to deliver exceptional value",
    detail:
      "our flexible pricing and engagement structures let you adjust team size effortlessly to align with your project demands and financial goals, eliminating the pressure of fixed, long-term expenses.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    title: "Global Talent Footprint",
    description:
      "Stay agile in a dynamic business environment with our customizable staffing options. From short-term contracts and contract-to-hire arrangements to permanent hires",
    detail:
      "we deliver the precise talent your organization needs. Whether you're scaling for a project or strengthening your core team, our flexible approach ensures you get the right professionals exactly when you need them.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 7,
    title: "Talent on Demand",
    description:
      "Seize opportunities without delay through our swift resource deployment services. Designed for speed and precision, we quickly match you with skilled professionals who are ready to contribute from day one.",
    detail:
      "Our agile approach and efficient onboarding processes help you maintain project momentum and meet tight timelines with confidence.",
    image: "/Consulting/outsourcing/support.png",
    color: "from-cyan-500 to-blue-600",
  },
];
const ConsultingServices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);

  // ---- tweak here ----
  const radius = 380;          // how far spokes extend
  const arcDegrees = 300;      // span of the arc
  const startAngle = -50;      // starting angle in degrees (top-left)
  // ---------------------

  const angleStep = arcDegrees / (services.length - 1);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, -100]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveIndex(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevIndex = activeIndex > 0 ? activeIndex - 1 : null;
  const nextIndex = activeIndex < services.length - 1 ? activeIndex + 1 : null;

  return (
    <div ref={containerRef}>
      <p className="text-[#001A75] text-2xl px-4 sm:px-6 font-semibold lg:pl-24">
        Outsourcing
      </p>

      <div className="relative flex w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:pl-20">
        <div className="w-1/2 px-8 py-10 space-y-24 flex flex-col justify-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold text-black mb-3">
                {service.title}
              </h2>
              <p className="mt-4 mb-3 text-lg text-gray-700">
                {service.description}
              </p>
              <p className="mt-2 text-lg text-gray-700">{service.detail}</p>
            </div>
          ))}
        </div>

        <div className="w-1/2 sticky top-30 h-[400px] flex items-start justify-center overflow-hidden ">
          {/* <motion.div className="relative flex items-end  w-[600px] h-[400px]">
            {services.map((service, index) => {
              console.log(translateY);

              const offsetY = useTransform(translateY, (v) => v + index * 400);
              const rotateY = useTransform(rotate, (v) => v - index * 16);

              console.log(offsetY);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute"
                  style={{ rotate: rotateY, x: translateX, y: offsetY }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={350}
                    className="object-contain"
                  />
                </motion.div>
              );
            })}
          </motion.div> */}
              <motion.div
        style={{
          rotate: wheelRotate,
          position: "absolute",
          right: -radius,      // push circle center outside right edge
          top: "50%",          // vertical center
          width: radius * 2,
          height: radius * 2,
          marginTop: -radius,  // center vertically
          pointerEvents: "none",
translateX:translateX,
y:translateY
  } as any}
      >
        {services.map((s, i) => {
          const angle = startAngle + i * angleStep; // deg
          const tileW = 500;
          const tileH = 150;

          return (
            <div
              key={s.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: `${tileW}px`,
                height: `${tileH}px`,
                transform: `rotate(${angle}deg) translate(${radius}px)`,
                transformOrigin: "center center",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                width={tileW}
                height={tileH}
                className="object-cover rounded-sm shadow-md scale-y-[-1] scale-x-[-1]"
                unoptimized
              />
            </div>
          );
        })}
      </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;


// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// const services = [
//   { id: 1, title: "Specialist Resource Support", image: "/Consulting/outsourcing/support.png" },
//   { id: 2, title: "End-to-End IT Support", image: "/Consulting/outsourcing/support.png" },
//   { id: 3, title: "Adaptive Workforce Solutions", image: "/Consulting/outsourcing/support.png" },
//   { id: 4, title: "Industry-Leading Expertise", image: "/Consulting/outsourcing/support.png" },
//   { id: 5, title: "Affordable Talent Solutions", image: "/Consulting/outsourcing/support.png" },
//   { id: 6, title: "Global Talent Footprint", image: "/Consulting/outsourcing/support.png" },
//   { id: 7, title: "Talent on Demand", image: "/Consulting/outsourcing/support.png" },
// ];

// const ConsultingServices: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // rotate whole wheel subtly on scroll
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

//   // ---- tweak here ----
//   const radius = 380;          // how far spokes extend
//   const arcDegrees = 240;      // span of the arc
//   const startAngle = 90;      // starting angle in degrees (top-left)
//   // ---------------------

//   const angleStep = arcDegrees / (services.length - 1);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-[500px] overflow-hidden  flex items-center"
//     >
//       <p className="absolute top-4 left-6 text-[#001A75] text-2xl font-semibold">
//         Outsourcing
//       </p>

//       {/* wheel center pushed to right side */}
//       <motion.div
//         style={{
//           rotate: wheelRotate,
//           position: "absolute",
//           right: -radius,      // push circle center outside right edge
//           top: "50%",          // vertical center
//           width: radius * 2,
//           height: radius * 2,
//           marginTop: -radius,  // center vertically
//           pointerEvents: "none",
//         } as any}
//       >
//         {services.map((s, i) => {
//           const angle = startAngle + i * angleStep; // deg
//           const tileW = 300;
//           const tileH = 120;

//           return (
//             <div
//               key={s.id}
//               style={{
//                 position: "absolute",
//                 left: "50%",
//                 top: "50%",
//                 width: `${tileW}px`,
//                 height: `${tileH}px`,
//                 transform: `rotate(${angle}deg) translate(${radius}px)`,
//                 transformOrigin: "center center",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Image
//                 src={s.image}
//                 alt={s.title}
//                 width={tileW}
//                 height={tileH}
//                 className="object-cover rounded-sm shadow-md scale-x-[-1] scale-y-[-1]"
//                 unoptimized
//               />
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default ConsultingServices;






