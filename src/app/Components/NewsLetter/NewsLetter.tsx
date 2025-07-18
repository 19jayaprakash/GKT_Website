"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const Newsletter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.45]);
  const abstractopacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const width = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["100%", `${isMobile ? "90%" : "70%"}`]
  );
  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "30%"]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["0%", `${isMobile ? "0%" : "20%"}`]
  );
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 20 });
  const smoothwidth = useSpring(width, { stiffness: 120, damping: 20 });
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });
  const images = [
    "/NewsLetter/main.png",
    "/NewsLetter/image1.png",
    "/NewsLetter/image2.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrollComplete, setIsScrollComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.99 && !isScrollComplete) {
      setIsScrollComplete(true);
    } else if (value < 0.99 && isScrollComplete) {
      setIsScrollComplete(false);
      setCurrentImageIndex(0);
    }
  });

  useEffect(() => {
    if (isScrollComplete) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isScrollComplete]);

  return (
    <section
      ref={containerRef}
      className="min-h-[200vh] w-full relative bg-[#F6F6F9] rounded-b-4xl "
    >
      <div className="absolute bottom-20 w-1/2 z-20 flex flex-col items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center p-2"
        >
          <Image src="/algo4hi.svg" alt="algo4hi" height={120} width={120} />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-md text-black font-normal text-start md:text-center p-5 w-[80%] "

        >
          Receive expert insights and practical tools that help you leverage AI
          for success, delivered directly to your mail Algo4hi supports your
          journey toward innovation and competitive advantage
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-fit flex  flex-row  justify-center items-center border-[#707070] border-1 m-auto px-2 py-1 rounded-4xl gap-1"
        >
          {!isMobile && (
            <Image src="/emailicon.png" alt="email" width={20} height={20} className="ml-3"/>
          )}
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            className=" placeholder:text-[#707070] text-black outline-none rounded-3xl  relative  p-2 "
          />
          <button className="bg-black text-white rounded-4xl p-2  w-32 cursor-pointer">
            subscribe
          </button>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-md text-black font-normal md:text-center  p-2"
        >
          Subscribe today and accelerate your AI knowledge
        </motion.div>
      </div>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10">
        <motion.div
          style={
            {
              scale: smoothScale,
              x: smoothX,
              y: smoothY,
              width: smoothwidth,
            } as any
          }
          className={`relative  h-screen origin-center rounded-4xl `}
        >
          {!isMobile && (
            <motion.div
              className="w-fit"
              style={{ opacity: abstractopacity } as any}
            >
              <Image
                src="/abstract.svg"
                className={`absolute -left-40 -top-25`}
                alt="email"
                width={520}
                height={520}
              />
              <a
                href="https://algo4hi.com/"
                target="_blank"
                className="z-20 -left-60 top-55 absolute text-4xl -rotate-90 px-4 py-2 bg-black"
              >
                www.algo4hi.com
              </a>
            </motion.div>
          )}

          <Image
            src={images[currentImageIndex]}
            alt="Newsletter Visual"
            fill
            className={`object-cover  rounded-4xl transition-opacity duration-700 ease-in-out`}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
