'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "The e-commerce platform developed exceeded our expectations. The performance optimization and seamless user experience resulted in a 200% increase in conversions.",
      rating: 5,
      project: "E-Commerce Platform",
      industry: "Technology",
      avatarColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, HealthCare Pro",
      content: "Their expertise in both frontend and backend technologies created a robust hospital management system that handles thousands of patients daily without issues.",
      rating: 5,
      project: "Hospital Management System",
      industry: "Healthcare",
      avatarColor: "from-emerald-500 to-green-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, DesignStudio",
      content: "Our portfolio website not only looks stunning but performs exceptionally well. The attention to detail and modern tech stack implementation is remarkable.",
      rating: 5,
      project: "Creative Portfolio",
      industry: "Design",
      avatarColor: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Operations Manager, RetailChain",
      content: "The inventory system revolutionized our supply chain management. Real-time analytics and intuitive interface made complex operations simple.",
      rating: 5,
      project: "Inventory System",
      industry: "Retail",
      avatarColor: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", change: "+5%" },
    { value: "200%", label: "Performance Boost", change: "Average" },
    { value: "50+", label: "Projects Completed", change: "and counting" },
    { value: "24/7", label: "Support Available", change: "Always On" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <div className="relative min-h-screen py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>
        
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                : 'linear-gradient(135deg, #10b981, #3b82f6)',
              animation: `float ${15 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 mb-8"
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-300 tracking-widest">TESTIMONIALS</span>
          </motion.div>
          <motion.h1
          initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="text-3xl md:text-4xl font-bold mb-6 nav">CLIENT SUCCESS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mt-2 mx-5">
              STORY
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover how innovative solutions and technical excellence transformed businesses across industries
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white mb-8">Impact Metrics</h3>
                
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 group-hover:border-gray-700 transition-all duration-500">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-blue-400 font-medium px-3 py-1 rounded-full bg-blue-500/10">
                          {stat.change}
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="lg:col-span-2">
            <div className="relative h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full">
                    {/* Testimonial Card */}
                    <div className="relative group h-full">
                      {/* Glow Effect */}
                      <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${testimonials[activeIndex].avatarColor} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`}></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-10 h-full flex flex-col">
                        {/* Top Section */}
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex items-center gap-6">
                            <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonials[activeIndex].avatarColor} flex items-center justify-center text-white text-2xl font-bold`}>
                              {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-ping-slow"></div>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {testimonials[activeIndex].name}
                              </h3>
                              <p className="text-gray-400">
                                {testimonials[activeIndex].position}
                              </p>
                            </div>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-2">
                            {renderStars(testimonials[activeIndex].rating)}
                          </div>
                        </div>
                        
                        {/* Quote */}
                        <div className="flex-1 mb-10">
                          <div className="text-6xl text-gray-700 mb-6">"</div>
                          <p className="text-xl text-gray-300 leading-relaxed">
                            {testimonials[activeIndex].content}
                          </p>
                        </div>
                        
                        {/* Bottom Section */}
                        <div className="flex items-center justify-between pt-8 border-t border-gray-800/50">
                          <div className="flex items-center gap-4">
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-gray-900 to-black text-gray-300 border border-gray-800">
                              {testimonials[activeIndex].project}
                            </span>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-gray-900 to-black text-gray-300 border border-gray-800">
                              {testimonials[activeIndex].industry}
                            </span>
                          </div>
                          
                          {/* Client Since */}
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Client Since</div>
                            <div className="text-lg font-bold text-white">2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between">
                {/* Dots */}
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                        index === activeIndex 
                          ? 'scale-125 bg-white' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {index === activeIndex && (
                        <div className="absolute inset-0 rounded-full bg-white animate-ping"></div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Arrows */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="p-4 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-50 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="p-4 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-50 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;