"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Consulting: React.FC = () => {
  const contentList = [
    "End-to-end application development using Agile methodologies",
    "Custom app development and legacy system modernization",
    "Infrastructure support including system administration and migrations",
    "Quality assurance, testing, and post-deployment maintenance",
    "Expertise in AI, cloud integration, ERP, cybersecurity, and multiple industries",
    "Skilled in technologies like OKTA, SAP, ReactJS, Python, IBM WatsonX, and more",
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto  overflow-visible">
      <div className="absolute -top-1 left-4 w-[90%] h-[105%] md:h-[105%] xl:h-96 z-0 overflow-hidden shadow-xl">
        <Image
          src="/Consulting/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 ml-10 -mt-5 bg-black/50 backdrop-blur-2xl p-12 shadow-lg text-white w-[90%]">
        <h2 className="text-xl md:text-3xl xl:text-3xl font-bold text-[#94ACFF] mb-6">
          Consulting & Outsourcing
        </h2>

        <div className="space-y-4">
          {contentList.map((content, index) => (
            <div
              key={index}
              className="flex items-start text-sm md:text-md xl:text-md"
            >
              <Check
                className="text-[#94ACFF] mt-1 mr-3 flex-shrink-0"
                size={20}
              />
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
