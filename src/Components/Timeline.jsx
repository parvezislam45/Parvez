"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Torus, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiVercel,
  SiFirebase,
  SiNetlify,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiMongoose,
  SiPython,
  SiJavascript,
  SiTypescript
} from "react-icons/si";
import { 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaCode, 
  FaRocket,
  FaBolt,
  FaCogs,
  FaChartLine
} from "react-icons/fa";

// Enhanced tech stack with proper icons
const techStack = {
  frontend: [
    {
      name: "React",
      experience: "2 years",
      months: 24,
      icon: <SiReact />,
      level: 95,
      color: "#61DAFB",
      glowColor: "#61DAFB40",
      description: "Component-based UI library for modern web applications",
      proficiency: "Expert",
      projects: 15,
      projectsList: ["E-commerce Platform", "Real-time Dashboard", "Admin Panel"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "Next.js",
      experience: "1.5 years",
      months: 18,
      icon: <SiNextdotjs />,
      level: 95,
      color: "#000000",
      glowColor: "#00000040",
      description: "Full-stack React framework with SSR & static generation",
      proficiency: "Advanced",
      projects: 12,
      projectsList: ["Portfolio Website", "Blog Platform", "SAAS Application"],
      gradient: "from-gray-900 to-black"
    },
    {
      name: "Tailwind CSS",
      experience: "2 years",
      months: 24,
      icon: <SiTailwindcss />,
      level: 100,
      color: "#06B6D4",
      glowColor: "#06B6D440",
      description: "Utility-first CSS framework for rapid UI development",
      proficiency: "Expert",
      projects: 20,
      projectsList: ["Design Systems", "Responsive Layouts", "Custom Components"],
      gradient: "from-cyan-400 to-teal-500"
    },
    {
      name: "HTML5",
      experience: "2 years",
      months: 24,
      icon: <SiHtml5 />,
      level: 95,
      color: "#E34F26",
      glowColor: "#E34F2640",
      description: "Semantic markup for modern web applications",
      proficiency: "Expert",
      projects: 25,
      projectsList: ["Web Applications", "Landing Pages", "Email Templates"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "CSS3",
      experience: "2 years",
      months: 24,
      icon: <SiCss3 />,
      level: 92,
      color: "#1572B6",
      glowColor: "#1572B640",
      description: "Advanced styling, animations and responsive design",
      proficiency: "Expert",
      projects: 25,
      projectsList: ["Animations", "Flex/Grid Layouts", "Custom Components"],
      gradient: "from-blue-500 to-indigo-600"
    },
  ],
  backend: [
    {
      name: "Node.js",
      experience: "2 years",
      months: 24,
      icon: <SiNodedotjs />,
      level: 95,
      color: "#339933",
      glowColor: "#33993340",
      description: "JavaScript runtime for server-side applications",
      proficiency: "Advanced",
      projects: 10,
      projectsList: ["REST APIs", "WebSocket Servers", "Microservices"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Express.js",
      experience: "2 years",
      months: 24,
      icon: <SiExpress />,
      level: 95,
      color: "#000000",
      glowColor: "#00000040",
      description: "Minimalist web framework for Node.js applications",
      proficiency: "Advanced",
      projects: 10,
      projectsList: ["API Gateways", "Middleware Systems", "Server Architecture"],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "Django",
      experience: "1.5 years",
      months: 18,
      icon: <SiDjango />,
      level: 94,
      color: "#092E20",
      glowColor: "#092E2040",
      description: "High-level Python web framework for rapid development",
      proficiency: "Advanced",
      projects: 8,
      projectsList: ["Admin Panels", "CRM Systems", "Content Management"],
      gradient: "from-green-700 to-emerald-900"
    },
    {
      name: "Flask",
      experience: "1 year",
      months: 12,
      icon: <SiFlask />,
      level: 85,
      color: "#000000",
      glowColor: "#00000040",
      description: "Lightweight Python web framework for microservices",
      proficiency: "Proficient",
      projects: 6,
      projectsList: ["Prototypes", "Simple APIs", "Quick MVPs"],
      gradient: "from-gray-600 to-gray-800"
    },
  ],
  devops: [
    {
      name: "Vercel",
      experience: "2 years",
      months: 24,
      icon: <SiVercel />,
      level: 100,
      color: "#000000",
      glowColor: "#00000040",
      description: "Cloud platform for frontend frameworks and static sites",
      proficiency: "Expert",
      projects: 15,
      projectsList: ["Frontend Hosting", "Serverless Functions", "Edge Networks"],
      gradient: "from-black to-gray-900"
    },
    {
      name: "Firebase",
      experience: "1.5 years",
      months: 18,
      icon: <SiFirebase />,
      level: 100,
      color: "#FFCA28",
      glowColor: "#FFCA2840",
      description: "Backend-as-a-Service platform for web and mobile apps",
      proficiency: "Advanced",
      projects: 8,
      projectsList: ["Auth Systems", "Real-time DB", "Cloud Functions"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Render",
      experience: "2 years",
      months: 24,
      icon: <FaBolt />,
      level: 90,
      color: "#46E3B7",
      glowColor: "#46E3B740",
      description: "Unified cloud platform for modern applications",
      projects: 8,
      proficiency: "Advanced",
      projectsList: ["Backend Services", "Web Applications", "Database Hosting"],
      gradient: "from-teal-400 to-emerald-500"
    },
    {
      name: "Netlify",
      experience: "2 years",
      months: 24,
      icon: <SiNetlify />,
      level: 90,
      color: "#15847D",
      glowColor: "#15847D40",
      description: "All-in-one platform for automating web projects",
      proficiency: "Advanced",
      projects: 12,
      projectsList: ["Static Sites", "Form Handling", "CMS Integration"],
      gradient: "from-cyan-600 to-teal-700"
    },
  ],
  database: [
    {
      name: "MongoDB",
      experience: "2 years",
      months: 24,
      icon: <SiMongodb />,
      level: 95,
      color: "#47A248",
      glowColor: "#47A24840",
      description: "NoSQL document database for modern applications",
      proficiency: "Advanced",
      projects: 10,
      projectsList: ["User Data", "Content Storage", "Real-time Apps"],
      gradient: "from-green-400 to-lime-500"
    },
    {
      name: "MySQL",
      experience: "1.5 years",
      months: 18,
      icon: <SiMysql />,
      level: 85,
      color: "#4479A1",
      glowColor: "#4479A140",
      description: "Relational database management system",
      proficiency: "Proficient",
      projects: 7,
      projectsList: ["E-commerce", "Analytics", "User Management"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      name: "SQLite3",
      experience: "2 years",
      months: 24,
      icon: <SiSqlite />,
      level: 95,
      color: "#003B57",
      glowColor: "#003B5740",
      description: "Lightweight disk-based database engine",
      proficiency: "Advanced",
      projects: 8,
      projectsList: ["Mobile Apps", "Desktop Apps", "Prototypes"],
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      name: "Mongoose",
      experience: "2 years",
      months: 24,
      icon: <SiMongoose />,
      level: 75,
      color: "#880000",
      glowColor: "#88000040",
      description: "Elegant MongoDB object modeling for Node.js",
      proficiency: "Proficient",
      projects: 8,
      projectsList: ["Data Models", "Schema Design", "ODM Patterns"],
      gradient: "from-red-700 to-rose-800"
    },
  ],
};

// 3D Floating Tech Sphere Component
const FloatingTechSpheres = ({ activeCategory }) => {
  const groupRef = useRef();
  const spheresRef = useRef([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      
      spheresRef.current.forEach((sphere, index) => {
        if (sphere) {
          const time = state.clock.elapsedTime;
          const angle = (index / 5) * Math.PI * 2;
          sphere.position.y = Math.sin(time * 0.5 + angle) * 0.3;
          sphere.rotation.x += delta * 0.3;
          sphere.rotation.y += delta * 0.2;
        }
      });
    }
  });

  const colors = {
    frontend: ["#61DAFB", "#000000", "#06B6D4"],
    backend: ["#339933", "#000000", "#092E20"],
    devops: ["#000000", "#FFCA28", "#46E3B7"],
    database: ["#47A248", "#4479A1", "#003B57"]
  };

  return (
    <group ref={groupRef}>
      {colors[activeCategory].map((color, index) => {
        const angle = (index / colors[activeCategory].length) * Math.PI * 2;
        const radius = 2.5 + index * 0.5;
        const x = Math.cos(angle + groupRef.current?.rotation.y || 0) * radius;
        const z = Math.sin(angle + groupRef.current?.rotation.y || 0) * radius;
        
        return (
          <Sphere
            key={index}
            ref={el => spheresRef.current[index] = el}
            args={[0.6 + index * 0.1, 32, 32]}
            position={[x, 0, z]}
          >
            <meshStandardMaterial
              color={color}
              transparent
              opacity={0.3}
              roughness={0.1}
              metalness={0.9}
              emissive={color}
              emissiveIntensity={0.6}
            />
            <Torus
              args={[0.9 + index * 0.1, 0.05, 8, 32]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshStandardMaterial
                color={color}
                transparent
                opacity={0.2}
                emissive={color}
                emissiveIntensity={0.3}
              />
            </Torus>
          </Sphere>
        );
      })}
    </group>
  );
};

const Timeline = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [selectedTech, setSelectedTech] = useState(techStack.frontend[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return '🖥️';
      case 'backend': return '⚙️';
      case 'devops': return '🚀';
      case 'database': return '💾';
      default: return '✨';
    }
  };

  return (
    <div className="min-h-screen bg-[#1d1515] relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
        >
          <color attach="background" args={["#0a0a0f"]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#8B5CF6" />
          <pointLight position={[-10, -10, 5]} intensity={0.8} color="#06B6D4" />
          <FloatingTechSpheres activeCategory={activeCategory} />
        </Canvas>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(120,119,198,0.1)_1px,_transparent_0)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-8xl mx-auto"
        >
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16 relative"
            variants={cardVariants}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative inline-block">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 nav">Full Stack
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mt-2 mx-5">
              Development Skills
            </span>
          </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6" />
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium text">
                Expertise Across <span className="text-cyan-400 font-bold">4 Domains</span> with <span className="text-purple-400 font-bold">20+ Technologies</span> and <span className="text-blue-400 font-bold">100+ Projects</span>
              </p>
              
              {/* Quick Stats */}
              <div className="flex justify-center gap-6 mt-8">
                {Object.entries(techStack).map(([category, techs]) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-[#4a290363] backdrop-blur-lg rounded-full px-4 py-2 border border-white/10"
                  >
                    <span className="text-lg text">{getCategoryIcon(category)}</span>
                    <span className="text-sm text-gray-300 capitalize text">{category}</span>
                    <span className="text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-0.5 rounded-full text">
                      {techs.length}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid - Perfectly Aligned */}
          <div className="grid xl:grid-cols-3 gap-8 items-start">
            {/* Left Column - Tech Stack Cards */}
            <motion.div
              className="xl:col-span-2 space-y-8"
              variants={containerVariants}
            >
              {/* Category Navigation */}
              <motion.div
                className="relative"
                variants={cardVariants}
              >
                <div className="flex flex-wrap gap-2 mb-8 p-2 bg-[#4a290363] backdrop-blur-xl rounded-2xl border border-slate-700/50 text">
                  {Object.keys(techStack).map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setSelectedTech(techStack[category][0]);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-6 py-3 rounded-xl font-bold text-xs uppercase transition-all duration-300 flex items-center gap-2 ${
                        activeCategory === category
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {activeCategory === category && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="text-lg">
                          {getCategoryIcon(category)}
                        </span>
                        {category}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Tech Cards Grid - Enhanced Design */}
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="wait">
                  {techStack[activeCategory].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      layout
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={cardVariants}
                      whileHover="hover"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedTech(tech)}
                      custom={index}
                      className="relative group cursor-pointer"
                    >
                      {/* Card Container */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20, scale: 0.95 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { 
                              delay: index * 0.1,
                              duration: 0.6 
                            }
                          },
                          hover: {
                            y: -5,
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }
                        }}
                        className="relative bg-[#4a290363] backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 overflow-hidden h-full"
                      >
                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                        
                        {/* Tech Header */}
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-3">
                              <motion.div
                                variants={floatingVariants}
                                animate="float"
                                className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${tech.gradient} text-white`}
                              >
                                {tech.icon}
                              </motion.div>
                              <div>
                                <h3 className="text-lg nav font-bold text-white">
                                  {tech.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold text ${
                                    tech.proficiency === 'Expert' ? 'bg-green-500/20 text-green-400' :
                                    tech.proficiency === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                                    'bg-purple-500/20 text-purple-400 text'
                                  }`}>
                                    {tech.proficiency}
                                  </span>
                                  <span className="text-xs text-gray-400 text">
                                    {tech.experience}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              animate={{ 
                                scale: hoveredCard === index ? 1.2 : 1,
                                rotate: hoveredCard === index ? 360 : 0 
                              }}
                              transition={{ duration: 0.3 }}
                              className={`text-2xl font-black bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent text`}
                            >
                              {tech.level}%
                            </motion.div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="w-full bg-slate-700/30 rounded-full h-2 overflow-hidden relative">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.level}%` }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: index * 0.2,
                                  ease: "easeOut"
                                }}
                                className={`h-2 rounded-full bg-gradient-to-r ${tech.gradient}`}
                              />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 text-xs mb-4 line-clamp-2 text">
                            {tech.description}
                          </p>
                          
                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-xs text-gray-400 text">
                                {tech.projects}+ projects
                              </span>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="text-sm font-medium text-blue-400 flex items-center gap-1 blog"
                            >
                              View Details
                              <span className="text-lg">→</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Right Column - Tech Details & Timeline */}
            <motion.div className="space-y-8" variants={containerVariants}>
              {/* Selected Tech Spotlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#4a290363] backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/50 h-fit"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${selectedTech.gradient} text-white`}
                  >
                    {selectedTech.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-white nav">
                      {selectedTech.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-400 text">
                        {selectedTech.proficiency}
                      </span>
                      <span className="text-sm font-bold px-2 py-0.5 rounded-full bg-slate-700/50 text">
                        {selectedTech.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-950 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1 text">Mastery</div>
                    <div className={`text-2xl font-bold bg-gradient-to-r text ${selectedTech.gradient} bg-clip-text text-transparent`}>
                      {selectedTech.level}%
                    </div>
                  </div>
                  <div className="bg-orange-900 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1 text">Projects</div>
                    <div className="text-2xl font-bold text-white text">
                      {selectedTech.projects}+
                    </div>
                  </div>
                </div>

                {/* Project Samples */}
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-3 text">Project Examples</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.projectsList.map((project, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-lg text-xs bg-slate-800/50 text-gray-300 border border-slate-700/50 main head"
                      >
                        {project}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm content">
                  {selectedTech.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.4);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06B6D4, #8B5CF6);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Timeline;