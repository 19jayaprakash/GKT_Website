import React, { useState, useEffect } from "react";
import Image from "next/image";
import course1 from "../../../../public/Courses/course1.png";
import course2 from "../../../../public/Courses/course2.png";
import course3 from "../../../../public/Courses/course3.png";
import course4 from "../../../../public/Courses/course4.png";

export default function Prolearn() {
  const [coursecard, setcoursecard] = useState([
    {
      Title: "Prompt Engineering for GEN AI",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course1,
    },
    {
      Title: "Building AI Application With Large Language Model",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course2,
    },
    {
      Title: "Langchain for Business",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course3,
    },
    {
      Title: "Empowering Semantic Search with LLM",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course4,
    },
    {
      Title: "Building AI Application With Large Language Model",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course2,
    },
    {
      Title: "Prompt Engineering for GEN AI",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course1,
    },
    {
      Title: "Empowering Semantic Search with LLM",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course4,
    },
    
    {
      Title: "Langchain for Business",
      Code: "GKT012",
      Duration: "6 hrs",
      Imageurl: course3,
    },
  ]);
  useEffect(() => {
    console.log(coursecard);
  }, []);
  return (
    <div className="relative  w-full bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccc_0px,transparent_1px),linear-gradient(to_bottom,#ccc_0px,transparent_1px)] bg-[size:32px_32px] opacity-50 pointer-events-none z-0" />
      <div className="relative flex flex-col justify-center items-center z-10 p-5">
        <h1 className="text-[#003663] text-4xl font-bold w-full text-center mb-2">
          Pro Learn
        </h1>
        <p className="text-center w-full text-xs text-black opacity-80">
          Master skills your way, anytime, anywhere.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3 px-10">
          {coursecard.map((card, i) => (
            <div
              key={i}
              className="flex w-48 flex-col items-center bg-white  rounded shadow-lg hover:shadow-xl transform duration-700 hover:scale-105 cursor-pointer transition"
            >
              <div className="w-full h-24 relative">
                <Image
                  src={card.Imageurl}
                  alt={card.Title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex justify-between w-full p-3 text-[10px] text-gray-700">
                <span>{card.Code}</span>
                <span className="flex gap-1">
                  <Image
                    src="/duration.svg"
                    height={10}
                    width={16}
                    alt="duration_icon"
                  />
                  {card.Duration}
                </span>
              </div>
              <div className="text-start  w-full pl-3 pt-1 pb-3 pr-3 text-black text-[10px]">
                {card.Title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
