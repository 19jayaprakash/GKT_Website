// import Image from "next/image";
// import React, { useState } from "react";
// import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

// interface Product {
//   title: string;
//   content: string;
//   image: string;
// }

// const products: Product[] = [
//   {
//     title: "PHC",
//     content: "hello",
//     image: "/Products/phc.png",
//   },
//   {
//     title: "VivaahAI",
//     content: "hello",
//     image: "/Products/phc.png",
//   },
// ];

// const Products: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextCard = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === products.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevCard = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="flex flex-col items-center text-black w-full px-4 md:px-10 mb-10">
//       <p className="text-center text-2xl md:text-3xl font-semibold mb-4">
//         {products[activeIndex].title}
//       </p>

//       <div className="flex flex-row justify-center items-center gap-4 w-full">
//         <button
//           onClick={prevCard}
//           className="cursor-pointer text-gray-600 hover:text-black"
//         >
//           <CiCircleChevLeft size={32} />
//         </button>

//         <div className="w-full sm:w-[80%] md:w-[100%] max-w-[700px] aspect-video relative overflow-hidden">
//           <Image
//             key={activeIndex}
//             src={products[activeIndex].image}
//             alt={"image"}
//             fill
//             className="object-contain"
//           />
//         </div>

//         <button
//           onClick={nextCard}
//           className="cursor-pointer text-gray-600 hover:text-black"
//         >
//           <CiCircleChevRight size={32} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

interface Product {
  title: string;
  content: string;
  image: string;
}

const products: Product[] = [
  {
    title: "PHC",
    content: "hello",
    image: "/Products/phc.png",
  },
  {
    title: "VivaahAI",
    content: "hello",
    image: "/Products/vivaahai_bg.jpg",
  },
  {
    title: "Stu",
    content: "hello",
    image: "/Products/phc.png",
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const Products: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetProgressBar = () => {
    const progress = progressRef.current;
    if (progress) {
      progress.classList.remove("animate-progress");
      void progress.offsetWidth; // trigger reflow
      progress.classList.add("animate-progress");
    }
  };

  const nextCard = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    resetProgressBar();
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    resetProgressBar();
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextCard();
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-black w-full px-4 md:px-10 mb-10">
      <p className="text-center text-2xl md:text-3xl font-semibold mb-4">
        {products[activeIndex].title}
      </p>

      <div className="flex flex-row justify-center items-center gap-4 w-full">
        <button
          onClick={prevCard}
          className="cursor-pointer text-gray-600 hover:text-black"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="w-full sm:w-[80%] md:w-[100%] max-w-[700px] aspect-video relative overflow-hidden rounded-xl shadow-md transition-all duration-700 ease-in-out">
          <Image
            key={activeIndex}
            src={products[activeIndex].image}
            alt={"image"}
            fill
            className="object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        <button
          onClick={nextCard}
          className="cursor-pointer text-gray-600 hover:text-black"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4 w-full max-w-[200px]">
        {products.map((_, index) => (
          <div
            key={index}
            className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden"
          >
            {index === activeIndex && (
              <div className="absolute h-full bg-[#043244] animate-progress w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
