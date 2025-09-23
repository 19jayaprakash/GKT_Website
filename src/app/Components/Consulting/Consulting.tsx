'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const OutsourcingServices = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      id: 1,
      title: "Specialist Resource Support",
      description: "Strengthen your team with top-tier IT professionals tailored to your project needs. Our flexible resource augmentation services help bridge skill gaps, handle peak workloads, and infuse specialized expertise into your initiatives.",
      detail: "We ensure a perfect fit by aligning our experts with your unique requirements, enabling smooth integration and instant value delivery.",
      image: "/Consulting/background.png",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "End-to-End IT Support",
      description: "Focus on your business priorities while we take full ownership of your IT environment. Our managed services deliver continuous oversight and expert care for your infrastructure, software, and operational processes.",
      detail: "With proactive monitoring, routine maintenance, and swift issue resolution, we ensure your systems remain secure, efficient, and reliable, eliminating downtime and reducing risks. Partner with us to transform your IT from a cost centre into a strategic asset.",
      image: "/Consulting/consulting.png",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  // Transform values for animations
  const imageRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, -400]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(latest => {
      const newIndex = Math.floor(latest * services.length);
      setActiveIndex(Math.min(newIndex, services.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress, services.length]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Outsourcing</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Left Content - Scrollable */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content Side */}
            <div className="space-y-32 py-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <div className="space-y-4">
                    <motion.h2 
                      className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-lg text-gray-700 leading-relaxed"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    <motion.p 
                      className="text-base text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {service.detail}
                    </motion.p>
                  </div>

                </motion.div>
              ))}
            </div>

            <div className="relative lg:block hidden">
              <div className="sticky top-32 h-96">
                <div className="relative w-full h-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    {services.map((service, index) => (
                      activeIndex === index && (
                        <motion.div
                          key={service.id}
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            rotate: 0,
                            x: 0
                          }}
                          exit={{ 
                            opacity: 0, 
                            scale: 0.6, 
                            rotate: 180,
                            x: -200
                          }}
                          transition={{ 
                            duration: 0.8, 
                            ease: [0.23, 1, 0.320, 1]
                          }}
                        >
                          {/* Main Image Container */}
                          <motion.div
                            className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                              rotate: imageRotation,
                              x: imageX,
                              scale: imageScale
                            }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                            
                            {/* Service Illustration */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                              {index === 0 ? (
                                // Specialist Resource Support Illustration
                                <div className="relative w-full h-full">
                                  <svg viewBox="0 0 400 300" className="w-full h-full">
                                    {/* Cloud Background */}
                                    <motion.ellipse
                                      cx="200" cy="80" rx="60" ry="25"
                                      fill="#ffffff" opacity="0.8"
                                      animate={{ scale: [1, 1.1, 1] }}
                                      transition={{ duration: 3, repeat: Infinity }}
                                    />
                                    
                                    {/* Support Icons */}
                                    <motion.circle
                                      cx="150" cy="120" r="20"
                                      fill="#ff6b6b"
                                      animate={{ y: [-2, 2, -2] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.circle
                                      cx="250" cy="120" r="20"
                                      fill="#4ecdc4"
                                      animate={{ y: [2, -2, 2] }}
                                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    />
                                    
                                    {/* People Figures */}
                                    <motion.g
                                      animate={{ rotate: [0, 5, -5, 0] }}
                                      transition={{ duration: 4, repeat: Infinity }}
                                    >
                                      <circle cx="120" cy="200" r="15" fill="#6c5ce7" />
                                      <rect x="110" y="215" width="20" height="40" rx="10" fill="#74b9ff" />
                                    </motion.g>
                                    
                                    <motion.g
                                      animate={{ rotate: [0, -5, 5, 0] }}
                                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                    >
                                      <circle cx="280" cy="200" r="15" fill="#fd79a8" />
                                      <rect x="270" y="215" width="20" height="40" rx="10" fill="#fdcb6e" />
                                    </motion.g>
                                    
                                    {/* Connection Lines */}
                                    <motion.line
                                      x1="135" y1="200" x2="165" y2="140"
                                      stroke="#6c5ce7" strokeWidth="3" strokeDasharray="5,5"
                                      animate={{ strokeDashoffset: [0, -10] }}
                                      transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    <motion.line
                                      x1="265" y1="200" x2="235" y2="140"
                                      stroke="#fd79a8" strokeWidth="3" strokeDasharray="5,5"
                                      animate={{ strokeDashoffset: [0, -10] }}
                                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                                    />
                                  </svg>
                                </div>
                              ) : (
                                // End-to-End IT Support Illustration
                                <div className="relative w-full h-full">
                                  <svg viewBox="0 0 400 300" className="w-full h-full">
                                    {/* Server Racks */}
                                    <motion.rect
                                      x="50" y="100" width="80" height="120" rx="8"
                                      fill="#74b9ff" opacity="0.8"
                                      animate={{ scale: [1, 1.02, 1] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.rect
                                      x="270" y="100" width="80" height="120" rx="8"
                                      fill="#6c5ce7" opacity="0.8"
                                      animate={{ scale: [1, 1.02, 1] }}
                                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    />
                                    
                                    {/* Central Monitor */}
                                    <motion.rect
                                      x="150" y="80" width="100" height="80" rx="8"
                                      fill="#00b894" opacity="0.9"
                                    //   animate={{ glow: [0, 10, 0] }}
                                      transition={{ duration: 3, repeat: Infinity }}
                                    />
                                    
                                    {/* "END TO END" Text */}
                                    <text x="200" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                                      END TO END
                                    </text>
                                    
                                    {/* Data Flow Lines */}
                                    <motion.path
                                      d="M 130 140 Q 150 120 170 140"
                                      stroke="#ff7675" strokeWidth="3" fill="none"
                                      animate={{ pathLength: [0, 1, 0] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.path
                                      d="M 230 140 Q 250 120 270 140"
                                      stroke="#fd79a8" strokeWidth="3" fill="none"
                                      animate={{ pathLength: [0, 1, 0] }}
                                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    />
                                    
                                    {/* Support Person */}
                                    <motion.g
                                      animate={{ y: [-2, 2, -2] }}
                                      transition={{ duration: 3, repeat: Infinity }}
                                    >
                                      <circle cx="200" cy="220" r="20" fill="#2d3436" />
                                      <rect x="185" y="240" width="30" height="50" rx="15" fill="#636e72" />
                                    </motion.g>
                                    
                                    {/* Floating Elements */}
                                    <motion.circle
                                      cx="80" cy="60" r="8" fill="#fdcb6e"
                                      animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 2.5, repeat: Infinity }}
                                    />
                                    <motion.circle
                                      cx="320" cy="60" r="8" fill="#e84393"
                                      animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                            
                            {/* Service Badge */}
                            <div className="absolute top-4 left-4">
                              <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold`}>
                                Service {index + 1}
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
                  <div className="flex space-x-2">
                    {services.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-64" />
    </div>
  );
};

export default OutsourcingServices;