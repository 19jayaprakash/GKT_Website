// "use client"
// import Image from "next/image";
// import Header from "../Components/Header/Header";
// import { useRouter } from "next/navigation";
// import Footer from "../Components/Footer/Footer";

// export default function CoursePage() {
//     const router = useRouter();
//   return (
//     <>
//     <Header activeSection={""}/>
//      <main className="w-full mx-auto px-10 py-28 text-gray-800 bg-[#F6F6F9]">
//       <nav className="text-xs text-gray-500 mb-4">
//        <span className="cursor-pointer" onClick={()=>router.push('/')}> Home </span>/ Courses / <span className="text-black">Advanced AI</span>
//       </nav>

//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="w-full lg:w-2/3">
//           <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
//             <Image
//               src="/Service_images/Enterprice.png"
//               alt="3D Course"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-xl"
//             />
//           </div>
//           <div className="flex items-center gap-3 mt-4">
//             <Image
//               src="/Service_images/Enterprice.png"
//               alt="Instructor"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <span className="text-sm text-gray-600">A course by GKT</span>
//           </div>

//           <h1 className="text-2xl md:text-4xl font-semibold mt-3">Advanced AI</h1>

//           <p className="mt-4 text-gray-600">
//             Embark on a creative journey and master the art of crafting your unique 3D character using Blender. Dive into the fascinating
//             process of bringing your imaginative ideas to life as you explore the intricate features of Blender.
//           </p>

//           <p className="mt-3 text-gray-600">
//             Unleash your creativity as you learn to meticulously model, enhance details, and skillfully manipulate light and color.
//           </p>

//           <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-2">Course Table of Contents</h2>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <details open className="mb-2">
//                 <summary className="cursor-pointer font-medium">Introduction</summary>
//               </details>
//               <details>
//                 <summary className="cursor-pointer font-medium">Preparing the character</summary>
//                 <p className="mt-2 text-sm text-gray-600">
//                   You will dive deep into the essential techniques and workflows required to effectively prepare a character model for
//                   advanced 3D modelling...
//                 </p>
//               </details>
//             </div>
//           </div>
//         </div>

//         <aside className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
//           <h2 className="text-2xl font-semibold">2000 <span className="text-sm">RS</span></h2>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <div>
//               <div className="text-gray-500">Lessons</div>
//               <div>12</div>
//             </div>
//             <div>
//               <div className="text-gray-500">Difficulty</div>
//               <div>Moderate</div>
//             </div>
//             {/* <div className="col-span-2">
//               <div className="text-gray-500">Students</div>
//               <div>3,215</div>
//             </div> */}
//             <div className="col-span-2">
//               <div className="text-gray-500">Language</div>
//               <div>English</div>
//             </div>
//             {/* <div className="col-span-2">
//               <div className="text-gray-500">Subtitles</div>
//               <div>English, Spanish, French, Italian, Russian, Polish, Dutch, German</div>
//             </div> */}
//             <div className="col-span-2">
//               <div className="text-gray-500">Additional resources</div>
//               <div>12 files</div>
//             </div>
//             <div className="col-span-2">
//               <div className="text-gray-500">Duration</div>
//               <div>8h 23m</div>
//             </div>
//             <div className="col-span-2">
//               <div className="text-gray-500">Critique session</div>
//               <div>Individual recordings</div>
//             </div>
//             <div className="col-span-2">
//               <div className="text-gray-500">Certificate</div>
//               <div>Upon completion of the course</div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 bg-black text-white rounded-xl py-2 hover:scale-105 transform duration-700">
//             <button className="w-full cursor-pointer">Enroll a course</button>
//           </div>

//           <div className="text-sm text-gray-600 mt-6">
//             <h3 className="font-medium mb-1">Assignment</h3>
//             <p>Plan to dedicate 1-2 hours per day for lectures, Q&As, and assignments.</p>

//             <h3 className="font-medium mt-4 mb-1">Prerequisites</h3>
//             <p>Basic Blender UI, SOPs, and mathematical concepts are recommended.</p>

//             <h3 className="font-medium mt-4 mb-1">Materials</h3>
//             <p>Blender 2.93+, 8-core processor, 32GB RAM. Free version available online.</p>
//           </div>
//         </aside>
//       </div>
//     </main>
//     <Footer/>
//     </>

//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { motion, AnimatePresence } from "framer-motion";

import {
  AwardIcon,
  BadgeCheck,
  Calendar,
  Calendar1,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Code,
  Code2,
  Computer,
  ComputerIcon,
  Download,
  Globe,
  GrabIcon,
  GraduationCap,
  LanguagesIcon,
  Newspaper,
  Play,
  Tv,
  Video,
  VideoIcon,
} from "lucide-react";
import FAQSection from "../Components/Course/Faq/Faq";

interface Lecture {
  id: string;
  title: string;
  duration: string;
  completed?: boolean;
}

interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
  lectureCount: number;
  totalDuration: string;
  isExpanded?: boolean;
}

interface Images {
  image: String[];
}

const CoursePage = () => {
  const [showAll, setShowAll] = useState(false);

  const learningPoints = [
    "You will learn how to use data science and machine learning with Python.",
    "You will create data pipeline workflows to analyze, visualize, and gain insights from data.",
    "You will build a portfolio of data science projects with real world data.",
    "Master critical data science skills.",
    "You will be able to analyze your own data sets and gain insights through data science.",
    "Understand Machine Learning from top to bottom.",
  ];

  const [showAllSections, setShowAllSections] = useState(false);

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["1.0"])
  );

  const Img = [
    "/Partners/Google.png",
    "/Partners/MS.png",
    "/Partners/Mulesoft.png",
    "/Partners/TD.png",
  ];

  const Topics = ["Deep Learning", "Python", "Machine Learning"];

  const sections: Section[] = [
    {
      id: "1.0",
      title: "Introduction to course",
      lectureCount: 5,
      totalDuration: "29 Min",
      lectures: [
        { id: "1.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "1.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "1.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "1.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "1.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "2.0",
      title: "OPTIONAL: Python Crash Course",
      lectureCount: 6,
      totalDuration: "51 Min",
      lectures: [
        { id: "2.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "2.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "2.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "2.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "2.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "3.0",
      title: "OPTIONAL: Python Crash Course",
      lectureCount: 6,
      totalDuration: "51 Min",
      lectures: [
        { id: "3.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "3.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "3.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "3.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "3.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "4.0",
      title: "Introduction to course",
      lectureCount: 5,
      totalDuration: "29 Min",
      lectures: [
        { id: "4.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "4.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "4.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "4.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "4.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "5.0",
      title: "OPTIONAL: Python Crash Course",
      lectureCount: 6,
      totalDuration: "51 Min",
      lectures: [
        { id: "5.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "5.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "5.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "5.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "5.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "6.0",
      title: "Introduction to course",
      lectureCount: 5,
      totalDuration: "29 Min",
      lectures: [
        { id: "6.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "6.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "6.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "6.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "6.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "7.0",
      title: "OPTIONAL: Python Crash Course",
      lectureCount: 6,
      totalDuration: "51 Min",
      lectures: [
        { id: "7.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "7.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "7.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "7.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "7.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
    {
      id: "8.0",
      title: "Introduction to course",
      lectureCount: 5,
      totalDuration: "29 Min",
      lectures: [
        { id: "8.1", title: "Welcome to the Course!", duration: "00:56" },
        {
          id: "8.2",
          title: "COURSE OVERVIEW LECTURE - PLEASE DO NOT SKIP!",
          duration: "04:17",
        },
        {
          id: "8.3",
          title: "Anaconda Python and Jupyter Install and Setup",
          duration: "13:49",
        },
        {
          id: "8.4",
          title: "Note on Environment Setup - Please read me!",
          duration: "00:34",
        },
        { id: "8.5", title: "Environment Setup", duration: "09:08" },
      ],
    },
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="bg-[#F6F6F9] min-h-screen w-full font-sans text-gray-800">
      <Header activeSection={""} />
      <section className="text-center pt-28 pb-10 px-6">
        <motion.div
         initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
        className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-4xl w-2xl font-semibold text-purple-800">
            Prompt Engineering for GEN AI
          </h2>
          <p className="text-md w-xl text-gray-600 mt-4 leading-relaxed">
            Elevate your tech and AI career with our cutting-edge Prompt
            Engineering for Generative AI Course.
          </p>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex justify-center items-center mt-4 text-base text-gray-500">
          <div className="flex gap-5 w-xl border-t border-dashed border-b justify-center items-center">
            <span className="m-2">⭐ 4.6 (135k ratings)</span>
            <span className="m-2 flex justify-center items-center gap-2">
              <Calendar size={20} color="black" />2 Months
            </span>
            <span className="m-2 flex justify-center items-center gap-2">
              <Globe size={20} color="black" /> English
            </span>
          </div>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex justify-center items-center mt-10">
          <div className="relative  h-52 w-2/4 lg:h-96 overflow-hidden border-2 rounded-3xl">
            <Image
              src="/Service_images/Enterprice.png"
              alt="3D Course"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </section>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-8">
        <div className="w-full lg:w-2/3 space-y-10">
          <div className="max-w-4xl mx-10 px-4 py-5 space-y-10 ">
            <motion.div
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                What you’ll learn?
              </h2>
              <ul className="space-y-3 text-gray-800 ">
                {learningPoints
                  .slice(0, showAll ? learningPoints.length : 4)
                  .map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-purple-600">
                        <BadgeCheck size={20} />
                      </span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                {!showAll ? (
                  <li
                    className="text-purple-500 cursor-pointer flex justify-center items-center gap-1 text-sm"
                    onClick={() => setShowAll(true)}
                  >
                    Show more <ChevronDown size={16} />
                  </li>
                ) : (
                  <li
                    className="text-purple-500 cursor-pointer flex justify-center items-center gap-1 text-sm"
                    onClick={() => setShowAll(false)}
                  >
                    Show less <ChevronUp size={16} />
                  </li>
                )}
              </ul>
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-2xl bg-gradient-to-br from-[#c084fc] to-[#a855f7] text-white p-6 shadow-xl w-full max-w-3xl">
              <h3 className="text-xl font-semibold mb-6">
                This course includes
              </h3>
              <div className="grid grid-cols-2 divide-x divide-y divide-white/80 border border-white/80 rounded-xl overflow-hidden text-sm ">
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">
                    <Video size={20} />
                  </span>
                  44 hours on-demand video
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">
                    <Download size={20} />
                  </span>
                  33 downloadable resources
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">
                    <Computer size={20} />
                  </span>
                  Access on mobile and TV
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">
                    <GraduationCap size={20} />
                  </span>
                  Certificate of completion
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">
                    <Code2 size={20} />
                  </span>
                  4 coding exercises
                </div>
                <div className="flex items-center gap-2 p-4">
                  <span className="text-lg">
                    <Newspaper size={20} />
                  </span>
                  6 articles
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" rounded-2xl  p-3 max-w-2xl w-full mx-10"
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Learning Goals
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Our program equips you with the skills to generate precise and
              contextually relevant responses using Prompt Engineering and Gen
              AI. Dive into real-world case studies that showcase the profound
              impact of Prompt Engineering, empowering you with practical
              knowledge to tackle any scenario. Embark on a journey that will
              skyrocket your proficiency and open doors to new opportunities in
              the tech and AI fields.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-600">
                  <BadgeCheck size={20} />
                </span>
                <span className="text-sm text-gray-800 leading-relaxed">
                  Learn how to use prompt engineering to build better
                  applications.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-600">
                  <BadgeCheck size={20} />
                </span>
                <span className="text-sm text-gray-800 leading-relaxed">
                  Discover the endless possibilities of LLMs and learn how to
                  create your own personalized chatbot.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-1 text-purple-600">
                  <BadgeCheck size={20} />
                </span>
                <span className="text-sm text-gray-800 leading-relaxed">
                  Learn how to write and refine prompts using the OpenAI API.
                </span>
              </li>
            </ul>
          </motion.div>
          <div className="h-auto overflow-hidden">
            <div className=" flex gap-6 max-w-4xl mx-10">
              <div className="flex-1 rounded-2xl border border-white/20 overflow-hidden max-w-3xl">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Course content
                  </h2>
                  <p className="text-gray-600 text-sm">
                    8 sections • 40 lectures • 24h 4m
                  </p>
                </div>
                <AnimatePresence initial={false}>
                  {(showAllSections ? sections : sections.slice(0, 4)).map(
                    (section) => (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden border-b border-gray-100 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full p-4 flex items-center cursor-pointer justify-between hover:bg-gray-50/80 transition-colors duration-200"
                        >
                          <div className="flex items-center  gap-3">
                            {expandedSections.has(section.id) ? (
                              <ChevronDown className="w-4 h-4 text-gray-600" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-600" />
                            )}
                            <span className="font-medium text-gray-800 text-left">
                              {section.id} {section.title}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {section.lectureCount} Lectures •{" "}
                            {section.totalDuration}
                          </div>
                        </button>

                        {expandedSections.has(section.id) &&
                          section.lectures.length > 0 && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="bg-gray-50/50"
                            >
                              {section.lectures.map((lecture) => (
                                <div
                                  key={lecture.id}
                                  className="flex items-center gap-3 p-4 pl-12 hover:bg-white/60 transition-colors duration-200 cursor-pointer"
                                >
                                  <Play className="w-4 h-4 text-purple-600" />
                                  <span className="flex-1 text-gray-700 text-sm">
                                    {lecture.title}
                                  </span>
                                  <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {lecture.duration}
                                  </span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                      </motion.div>
                    )
                  )}
                </AnimatePresence>

                <motion.button
                  layout
                  onClick={() => setShowAllSections(!showAllSections)}
                  className="text-purple-600 cursor-pointer hover:text-purple-700 font-medium text-sm transition-colors duration-200 flex items-center gap-2 mx-auto mt-4"
                >
                  {showAllSections ? (
                    <>
                      Show less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show more <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
          <motion.div
           initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-3xl mx-10 px-4 pt-10 pb-10 space-y-5">
            <p className="text-xl font-bold w-lg font-sans text-purple-700">
              Top companies offer this course to <br />
              their employees
            </p>
            <p className="text-black opacity-70 leading-relaxed text-sm w-xl">
              This course was selected for our collection of top-rated courses
              trusted by business worldwide.{" "}
              <span className="underline">Learn More</span>
            </p>
            <div className="flex gap-10 items-center">
              {Img.map((image, index) => (
                <div key={index}>
                  <Image src={image} alt="image" width={100} height={100} />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-xl font-bold font-sans text-purple-700">
                Explore related topics
              </p>
              <div className="flex gap-5 mt-4">
                {Topics.map((topic, index) => (
                  <div
                    key={index}
                    className="border border-gray-500 p-2 rounded-3xl shadow-sm"
                  >
                    <p>{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="sticky top-24  rounded-3xl shadow-md  bg-gradient-to-br from-[#c084fc] to-[#a855f7] pt-6 pl-2 pr-2 pb-2">
            <div className="text-xl font-semibold ml-4 mb-4 text-white animate-pulse">
              <p>Offer %</p>
            </div>
            <div className="bg-white p-4 rounded-3xl">
              <p>
                <span className="text-3xl">₹1999</span>{" "}
                <span className="text-sm line-through">4999</span>
              </p>
              <button className="bg-black hover:scale-105 transform duration-700 cursor-pointer mt-2 text-white px-6 py-3 rounded-lg font-semibold w-full">
                Enroll Now
              </button>
              <p className="mt-4 text-purple-700 text-lg">
                This course include
              </p>
              <p className="flex gap-2 mt-4 text-md items-center">
                <Calendar1 size={20} />
                <span>2 Months</span>
              </p>
              <p className="flex gap-2 mt-4 text-md items-center">
                <LanguagesIcon size={20} />
                <span>English</span>
              </p>
              <p className="flex gap-2 mt-4 text-md items-center">
                <VideoIcon size={20} />
                <span>26 video lesson</span>
              </p>
              <p className="flex gap-2 mt-4 text-md items-center">
                <ComputerIcon size={20} />
                <span>Access in desktop, tablet and mobile</span>
              </p>
              <p className="flex gap-2 mt-4 text-md items-center">
                <AwardIcon size={20} />
                <span>Certificate of completion</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-10 max-w-6xl">
        <FAQSection />
      </div>

      <Footer />
    </div>
  );
};

export default CoursePage;
