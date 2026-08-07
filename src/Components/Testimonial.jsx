'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Maruf Noor",
      position: "CEO, Sky Data Soft",
      content: "The e-commerce platform developed exceeded our expectations. The performance optimization and seamless user experience resulted in a 200% increase in conversions.",
      rating: 5,
      project: {
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory",
        tech: ["Next.js", "Django", "Stripe"]
      },
      industry: "Technology",
      image: "/Images/noor.png",
      avatarColor: "#A855F7",
      bgColor: "#1A1033"
    },
    {
      id: 2,
      name: "Dr. Mahmudur Rahaman",
      position: "President, Mental Health Care Foundation",
      content: "Their expertise in both frontend and backend technologies created a robust NGO website system that handles thousands of patients daily without issues.",
      rating: 5,
      project: {
        name: "NGO Website for Mental Health",
        description: "Healthcare platform with patient management system",
        tech: ["Next.js", "Django", "PostgreSQL", "Firebase"]
      },
      industry: "Healthcare",
      image: "/Images/dr.png",
      avatarColor: "#A855F7",
      bgColor: "#1A1033"
    },
    {
      id: 3,
      name: "Mofazzol Fazzol",
      position: "Founder, Maerad",
      content: "Our social media platform not only looks stunning but performs exceptionally well. The attention to detail and modern tech stack implementation is remarkable.",
      rating: 5,
      project: {
        name: "Maerad Social Media",
        description: "Social media platform with real-time features",
        tech: ["Next.js", "Django", "Socket.io", "Redis"]
      },
      industry: "Social Media",
      image: "/Images/mosba.png",
      avatarColor: "#A855F7",
      bgColor: "#1A1033"
    },
    {
      id: 4,
      name: "Minhaz Bhuiya",
      position: "CEO, EZ Printers Ltd.",
      content: "The inventory system revolutionized our supply chain management. Real-time analytics and intuitive interface made complex operations simple.",
      rating: 5,
      project: {
        name: "Inventory System",
        description: "Real-time inventory management with analytics",
        tech: ["Next.js", "Express.js", "MySQL", "D3.js"]
      },
      industry: "Retail",
      image: "/Images/ez.png",
      avatarColor: "#A855F7",
      bgColor: "#1A1033"
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
      <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="relative py-8 px-4 overflow-hidden" style={{ backgroundColor: '#0A0A0F' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(168,85,247,0.06), transparent 50%)'
        }}></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 80% 70%, rgba(168,85,247,0.06), transparent 50%)'
        }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, rgba(168,85,247,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(168,85,247,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
  className="text-center mb-16 relative"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#06B6D4] opacity-10 rounded-full blur-3xl" />
  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#8B5CF6] opacity-10 rounded-full blur-3xl translate-x-40" />

  <div className="relative">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-8 py-4 backdrop-blur-2xl rounded-2xl border mb-8"
        style={{
          backgroundColor: "#1A1A2E",
          borderColor: "rgba(255,255,255,0.05)"
        }}>
        <div className="w-3 h-3 rounded-full mr-4 animate-pulse" style={{ backgroundColor: "#6366F1" }} />
        <h1 className="text-3xl md:text-4xl font-bold text-white nav">
          Happy Clients
        </h1>
        <div className="w-3 h-3 rounded-full ml-4 animate-pulse" style={{ backgroundColor: "#10B981" }} />
      </div>
      <p className="text-gray-200 text-sm max-w-4xl mx-auto mb-8 text">
        Discover how innovative solutions transformed businesses across industries
      </p>
    </div>
  </div>
</motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Left Column - Stats */}
          <div className="lg:col-span-1 order-2 lg:order-1 mt-6 lg:mt-0">
            <div className="lg:sticky lg:top-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2 md:space-y-3"
              >
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3 md:mb-4 hidden lg:block nav">Impact Metrics</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-2 md:gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative"
                    >
                      <div className="relative rounded-lg p-3 md:p-4 border transition-all duration-300 hover:border-purple-400/30" style={{
                        backgroundColor: '#1A1A2E',
                        borderColor: 'rgba(255,255,255,0.05)'
                      }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-base md:text-xl font-bold text-white text">{stat.value}</div>
                            <div className="text-[10px] md:text-xs text-gray-200 text">{stat.label}</div>
                          </div>
                          <div className="text-[10px] md:text-xs font-medium px-1.5 md:px-2 py-0.5 md:py-1 rounded-full" style={{
                            color: '#FFFFFF',
                            backgroundColor: 'rgba(168,85,247,0.1)'
                          }}>
                            {stat.change}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="relative">
                    {/* Glow Effect */}
                    <div
                      className="absolute -inset-2 md:-inset-3 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"
                      style={{ backgroundColor: '#A855F7' }}
                    ></div>

                    {/* Main Card */}
                    <div className="relative rounded-xl md:rounded-2xl border p-4 md:p-6" style={{
                      backgroundColor: '#1A1A2E',
                      borderColor: 'rgba(255,255,255,0.05)'
                    }}>
                      {/* Top Section */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 md:mb-4 gap-3 sm:gap-0">
                        <div className="flex items-center gap-2 md:gap-3">
                          {/* Avatar */}
                          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 border-2" style={{
                            borderColor: '#A855F7'
                          }}>
                            {testimonials[activeIndex].image ? (
                              <Image
                                src={testimonials[activeIndex].image}
                                alt={testimonials[activeIndex].name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-white text-xs md:text-sm font-bold" style={{
                                backgroundColor: '#A855F7'
                              }}>
                                {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm md:text-base font-bold text-white truncate head">
                              {testimonials[activeIndex].name}
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-300 truncate text">
                              {testimonials[activeIndex].position}
                            </p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          {renderStars(testimonials[activeIndex].rating)}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mb-3 md:mb-4">
                        <div className="text-2xl md:text-3xl mb-1 md:mb-2" style={{ color: '#A855F7' }}>"</div>
                        <p className="text-xs md:text-sm text-gray-200 leading-relaxed line-clamp-4 md:line-clamp-3">
                          {testimonials[activeIndex].content}
                        </p>
                      </div>

                      {/* Project Details */}
                      <div className="border-t pt-3 md:pt-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="mb-2 md:mb-3">
                          <h4 className="text-[10px] md:text-xs font-semibold text-purple-400 uppercase tracking-wider mb-0.5 md:mb-1">Project</h4>
                          <p className="text-sm md:text-base text-white font-medium blog">{testimonials[activeIndex].project.name}</p>
                          <p className="text-[10px] md:text-xs text-gray-300 mt-0.5 line-clamp-1 text">{testimonials[activeIndex].project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-1 md:gap-1.5">
                          {testimonials[activeIndex].project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-1.5 md:px-2.5 py-0.5 rounded-full text-[8px] md:text-[10px] font-medium"
                              style={{
                                backgroundColor: 'rgba(168,85,247,0.15)',
                                color: '#FFFFFF'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation - Below Card */}
              <div className="flex items-center justify-between mt-4 md:mt-6 px-1">
                {/* Dots */}
                <div className="flex gap-1.5 md:gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`relative w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-500 ${index === activeIndex ? 'scale-125' : 'hover:opacity-80'
                        }`}
                      style={{
                        backgroundColor: index === activeIndex ? '#A855F7' : 'rgba(168,85,247,0.3)'
                      }}
                    >
                      {index === activeIndex && (
                        <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: '#A855F7' }}></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-1.5 md:gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="p-1.5 md:p-2 rounded-full border transition-all duration-300 disabled:opacity-50 hover:border-purple-400/50"
                    style={{
                      backgroundColor: '#1A1A2E',
                      borderColor: 'rgba(255,255,255,0.05)',
                      color: '#9CA3AF'
                    }}
                  >
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="p-1.5 md:p-2 rounded-full border transition-all duration-300 disabled:opacity-50 hover:border-purple-400/50"
                    style={{
                      backgroundColor: '#1A1A2E',
                      borderColor: 'rgba(255,255,255,0.05)',
                      color: '#9CA3AF'
                    }}
                  >
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .line-clamp-4 {
            -webkit-line-clamp: 3;
          }
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(26, 26, 46, 0.4);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #A855F7;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8B5CF6;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;