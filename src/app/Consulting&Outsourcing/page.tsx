'use client'
import React from "react";
import Header from "../Components/Header/Header";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";
import OutsourcingServices from "../Components/Consulting/Consulting";
import SmoothScroll from "../Components/SmoothScroll";
import { motion, scale } from "framer-motion";

interface Service {
    title :string,
    description:string
}


const ConsultingOutsourcingPage: React.FC = () => {

  const services: Service[] = [
    {
      title: "Digital Transformation & IT Solutions",
      description: "Transform legacy systems and unlock operational excellence with forward-thinking IT consulting and innovative digital transformation strategies designed for sustained growth."
    },
    {
      title: "Cybersecurity & Risk Management",
      description: "Secure your business with reliable cybersecurity measures, detailed risk assessments, and proactive solutions to prevent potential threats."
    },
    {
      title: "Enterprise Solutions & Process Automation",
      description: "Boost productivity and streamline operations with smart automation tools, scalable ERP systems, and optimized business workflows."
    },
    {
      title: "Cloud Strategy & Deployment",
      description: "Empower your cloud journey with customized strategies, smooth integration processes, and comprehensive cloud lifecycle management."
    }
  ];

      const technologies = [
    { src: "/Consulting/Technology/meta.png", alt: "Meta" },
    { src: "/Consulting/Technology/rest_api.png", alt: "REST API" },
    { src: "/Consulting/Technology/java.png", alt: "Java" },
    { src: "/Consulting/Technology/Python.png", alt: "Python" },
    { src: "/Consulting/Technology/next.png", alt: "Next.js" },
    { src: "/Consulting/Technology/Mysql.png", alt: "MySQL" },
    { src: "/Consulting/Technology/sap.png", alt: "SAP" },
    { src: "/Consulting/Technology/watsonx.png", alt: "WatsonX" },
  ];

  const focusAreas = [
    { icon: "/Consulting/Focus/brain.svg", label: "Artificial Intelligence" },
    { icon: "/Consulting/Focus/bag.svg", label: "B2B Integration & Supply Chain" },
    { icon: "/Consulting/Focus/todo.svg", label: "Order Management Systems (OMS)" },
    { icon: "/Consulting/Focus/file.svg", label: "Managed File Transfer (MFT)" },
    { icon: "/Consulting/Focus/cloud.svg", label: "Cloud & Middleware" },
    { icon: "/Consulting/Focus/erp.svg", label: "ERP Solutions & Cloud Infrastructure" },
    { icon: "/Consulting/Focus/shield.svg", label: "ServiceNow & Cybersecurity" },
    { icon: "/Consulting/Focus/setting.svg", label: "Integration Technology" },
  ];

  return (
    <div className="font-[family-name:var(--font-poppins)] bg-[#F6F6F9] min-h-screen w-full">
      <Header activeSection="consulting" />

      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-24 gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-3xl text-black leading-snug">
            Ready to take your <br />
            transformation to the next level?
          </h2>
          <h3 className="mt-4 text-3xl sm:text-3xl font-bold text-black">
            Let’s build it together with <br /> expert IT solutions
          </h3>
          <p className="mt-6 text-gray-700 text-sm leading-relaxed">
            We provide full spectrum consulting and outsourcing solutions,
            enabling organizations to focus on growth while we take care of
            technology. From end-to-end application development to infrastructure
            management and cybersecurity and more, our team ensures reliable,
            scalable, and agile delivery aligned with your business needs.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/Consulting/consulting.png"
            alt="Consulting and Outsourcing"
            width={460}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <p className="text-[#001A75] text-lg font-semibold mb-6">Consulting</p>
      <div className= "mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service, index) => (
            <motion.div
            initial={{scale:0.9,y:100}}
            whileInView={{scale:1,y:0}}
            transition={{duration:1,stiffness:40}}
              key={index}
              className="bg-white w-64 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
      </div>
    </div>
      </div>

            <OutsourcingServices/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-xl font-semibold text-[#1A237E] mb-6">
          Technology Expertise
        </h2>
        <p className="text-gray-600 mb-8">
          We work with modern and enterprise-grade tools & platforms, including
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:shadow-lg transition-transform"
            >
              <Image src={tech.src} alt={tech.alt} width={90} height={50} />
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-[#1A237E] mb-6">
          Niche Focus Areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-gray-700 mt-6 mb-20">
          {focusAreas.map((area, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image src={area.icon} alt={area.label} width={24} height={24} />
              <span className="text-lg">{area.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-gray-50"></div> 
      <Footer activeSection={"Consulting"}/>
    </div>
  );
};

export default ConsultingOutsourcingPage;
