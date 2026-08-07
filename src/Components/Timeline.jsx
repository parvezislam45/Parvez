"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
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
  SiHostinger,
  SiCpanel,
} from "react-icons/si";
import { FaBolt } from "react-icons/fa";

// Enhanced tech stack with solid colors - Black replaced with highlighted colors
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
      projectsList: ["E-commerce Platform", "Real-time Dashboard", "Admin Panel"],
      bgColor: "#61DAFB",
      textColor: "#0A0A0F",
      borderColor: "#61DAFB"
    },
    {
      name: "Next.js",
      experience: "1.5 years",
      months: 18,
      icon: <SiNextdotjs />,
      level: 95,
      color: "#FFFFFF",
      glowColor: "#FFFFFF40",
      description: "Full-stack React framework with SSR & static generation",
      proficiency: "Advanced",
      projectsList: ["Portfolio Website", "Blog Platform", "SAAS Application"],
      bgColor: "#0070F3", // Vercel Blue
      textColor: "#FFFFFF",
      borderColor: "#0070F3"
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
      bgColor: "#06B6D4",
      textColor: "#0A0A0F",
      borderColor: "#06B6D4"
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
      bgColor: "#E34F26",
      textColor: "#FFFFFF",
      borderColor: "#E34F26"
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
      bgColor: "#1572B6",
      textColor: "#FFFFFF",
      borderColor: "#1572B6"
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
      bgColor: "#339933",
      textColor: "#FFFFFF",
      borderColor: "#339933"
    },
    {
      name: "Express.js",
      experience: "2 years",
      months: 24,
      icon: <SiExpress />,
      level: 95,
      color: "#FFFFFF",
      glowColor: "#FFFFFF40",
      description: "Minimalist web framework for Node.js applications",
      proficiency: "Advanced",
      projects: 10,
      projectsList: ["API Gateways", "Middleware Systems", "Server Architecture"],
      bgColor: "#404040", // Dark Gray
      textColor: "#FFFFFF",
      borderColor: "#808080"
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
      bgColor: "#44B78B", // Django Green
      textColor: "#FFFFFF",
      borderColor: "#44B78B"
    },
    {
      name: "Flask",
      experience: "1 year",
      months: 12,
      icon: <SiFlask />,
      level: 85,
      color: "#FFFFFF",
      glowColor: "#FFFFFF40",
      description: "Lightweight Python web framework for microservices",
      proficiency: "Proficient",
      projects: 6,
      projectsList: ["Prototypes", "Simple APIs", "Quick MVPs"],
      bgColor: "#E34F26", // Orange-Red
      textColor: "#FFFFFF",
      borderColor: "#E34F26"
    },
  ],
  devops: [
    {
      name: "Hostinger",
      experience: "2 years",
      months: 24,
      icon: <SiHostinger />,
      level: 100,
      color: "#673DE6",
      glowColor: "#673DE640",
      description: "Web hosting platform with integrated deployment tools",
      proficiency: "Expert",
      projects: 15,
      projectsList: ["Web Hosting", "Domain Management", "Deployment Automation"],
      bgColor: "#673DE6",
      textColor: "#FFFFFF",
      borderColor: "#673DE6"
    },
    {
      name: "cPanel",
      experience: "2 years",
      months: 24,
      icon: <SiCpanel />,
      level: 100,
      color: "#FF6C2C",
      glowColor: "#FF6C2C40",
      description: "Web hosting control panel for server management",
      proficiency: "Expert",
      projects: 15,
      projectsList: ["Server Management", "Domain Configuration", "Email Setup"],
      bgColor: "#FF6C2C",
      textColor: "#FFFFFF",
      borderColor: "#FF6C2C"
    },
    {
      name: "Vercel",
      experience: "2 years",
      months: 24,
      icon: <SiVercel />,
      level: 100,
      color: "#FFFFFF",
      glowColor: "#FFFFFF40",
      description: "Cloud platform for frontend frameworks and static sites",
      proficiency: "Expert",
      projects: 15,
      projectsList: ["Frontend Hosting", "Serverless Functions", "Edge Networks"],
      bgColor: "#0070F3", // Vercel Blue
      textColor: "#FFFFFF",
      borderColor: "#0070F3"
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
      bgColor: "#FFCA28",
      textColor: "#0A0A0F",
      borderColor: "#FFCA28"
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
      bgColor: "#46E3B7",
      textColor: "#0A0A0F",
      borderColor: "#46E3B7"
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
      bgColor: "#15847D",
      textColor: "#FFFFFF",
      borderColor: "#15847D"
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
      bgColor: "#47A248",
      textColor: "#FFFFFF",
      borderColor: "#47A248"
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
      bgColor: "#4479A1",
      textColor: "#FFFFFF",
      borderColor: "#4479A1"
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
      bgColor: "#003B57",
      textColor: "#FFFFFF",
      borderColor: "#003B57"
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
      bgColor: "#880000",
      textColor: "#FFFFFF",
      borderColor: "#880000"
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
    frontend: ["#61DAFB", "#0070F3", "#06B6D4"],
    backend: ["#339933", "#404040", "#44B78B"],
    devops: ["#0070F3", "#FFCA28", "#46E3B7"],
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
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#06B6D4_0%,_transparent_50%)] opacity-10" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_#8B5CF6_0%,_transparent_50%)] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_#06B6D4_0%,_transparent_70%)] opacity-5 blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(120,119,198,0.08)_1px,_transparent_0)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
        >
          <color attach="background" args={["#0A0A0F"]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#8B5CF6" />
          <pointLight position={[-10, -10, 5]} intensity={0.8} color="#06B6D4" />
          <FloatingTechSpheres activeCategory={activeCategory} />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-8xl mx-auto"
        >
          {/* Premium Header */}
          <motion.div
            className="text-center mb-16 relative"
            variants={cardVariants}
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
            <h1 className="text-4xl md:text-5xl font-bold text-white nav">
              Skills
            </h1>
            <div className="w-3 h-3 rounded-full ml-4 animate-pulse" style={{ backgroundColor: "#10B981" }} />
          </div>
          <p className="text-gray-200 text-sm max-w-4xl mx-auto mb-8 text">
                Explore my comprehensive technology stack across frontend, backend, 
                DevOps, and database technologies.
              </p>
        </div>
              
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(techStack).map(([category, techs]) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 bg-[#1A1A2E]/80 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/5 hover:border-[#06B6D4]/30 transition-all duration-300 group"
                  >
                    <span className="text-xl">{getCategoryIcon(category)}</span>
                    <div className="text-left">
                      <span className="text-sm text-gray-200 capitalize content">{category}</span>
                      <span className="block text-md font-bold text-white head">
                        {techs.length} {techs.length === 1 ? 'Tech' : 'Technologies'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid xl:grid-cols-3 gap-8 items-start">
            {/* Left Column - Tech Stack Cards */}
            <motion.div
              className="xl:col-span-2 space-y-8"
              variants={containerVariants}
            >
              {/* Category Navigation - Premium Tabs */}
              <motion.div
                className="relative"
                variants={cardVariants}
              >
                <div className="flex flex-wrap gap-2 p-1.5 bg-[#1A1A2E]/80 backdrop-blur-xl rounded-2xl border border-white/5">
                  {Object.keys(techStack).map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setSelectedTech(techStack[category][0]);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                        activeCategory === category
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {activeCategory === category && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 bg-[#06B6D4]/20 rounded-xl border border-[#06B6D4]/30"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2 blog">
                        <span className="text-base">
                          {getCategoryIcon(category)}
                        </span>
                        {category}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60">
                          {techStack[category].length}
                        </span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Tech Cards Grid - Premium Design with Solid Colors */}
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
                      whileHover={{ y: -4 }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedTech(tech)}
                      custom={index}
                      className="relative group cursor-pointer"
                    >
                      <motion.div
                        className="relative bg-[#1A1A2E] backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-opacity-100 overflow-hidden h-full transition-all duration-300"
                        style={{
                          borderColor: hoveredCard === index ? tech.borderColor : 'rgba(255,255,255,0.05)',
                          boxShadow: hoveredCard === index ? `0 8px 32px ${tech.borderColor}20` : 'none'
                        }}
                      >
                        {/* Hover Glow Effect */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                          style={{ backgroundColor: tech.bgColor }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-3">
                              <motion.div
                                variants={floatingVariants}
                                animate="float"
                                className="text-3xl p-3 rounded-xl"
                                style={{ 
                                  backgroundColor: tech.bgColor,
                                  color: tech.textColor
                                }}
                              >
                                {tech.icon}
                              </motion.div>
                              <div>
                                <h3 className="text-lg font-bold text-white head">
                                  {tech.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span 
                                    className="px-2 py-0.5 rounded-full text-xs font-bold"
                                    style={{
                                      backgroundColor: `${tech.bgColor}20`,
                                      color: tech.bgColor
                                    }}
                                  >
                                    {tech.proficiency}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {tech.experience}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              animate={{ 
                                scale: hoveredCard === index ? 1.1 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                              className="text-2xl font-black text"
                              style={{ color: tech.bgColor }}
                            >
                              {tech.level}%
                            </motion.div>
                          </div>

                          {/* Progress Bar - Solid Color */}
                          <div className="mb-4">
                            <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.level}%` }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: index * 0.2,
                                  ease: "easeOut"
                                }}
                                className="h-2 rounded-full"
                                style={{ backgroundColor: tech.bgColor }}
                              />
                            </div>
                          </div>

                          <p className="text-gray-300 text-xs mb-4 line-clamp-2">
                            {tech.description}
                          </p>

                          {/* Project Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {tech.projectsList.slice(0, 2).map((project, i) => (
                              <span 
                                key={i}
                                className="px-2 py-0.5 rounded text-[10px]"
                                style={{
                                  backgroundColor: `${tech.bgColor}15`,
                                  color: tech.bgColor
                                }}
                              >
                                {project}
                              </span>
                            ))}
                            {tech.projectsList.length > 2 && (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-gray-400">
                                +{tech.projectsList.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Right Column - Tech Details */}
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1A1A2E]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 sticky top-4"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="text-4xl p-4 rounded-xl"
                    style={{ 
                      backgroundColor: selectedTech.bgColor,
                      color: selectedTech.textColor
                    }}
                  >
                    {selectedTech.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white blog">
                      {selectedTech.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span 
                        className="text-sm px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${selectedTech.bgColor}20`,
                          color: selectedTech.bgColor
                        }}
                      >
                        {selectedTech.proficiency}
                      </span>
                      <span className="text-sm text-gray-400">
                        {selectedTech.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Mastery Level</div>
                    <div 
                      className="text-2xl font-bold nav"
                      style={{ color: selectedTech.bgColor }}
                    >
                      {selectedTech.level}%
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Experience</div>
                    <div className="text-2xl font-bold text-white text">
                      {selectedTech.months}Month
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-3">Project Examples</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.projectsList.map((project, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-lg text-xs border transition-all duration-300"
                        style={{
                          backgroundColor: `${selectedTech.bgColor}10`,
                          borderColor: `${selectedTech.bgColor}30`,
                          color: selectedTech.bgColor
                        }}
                      >
                        {project}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedTech.description}
                </p>

                {/* Tech Highlights */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedTech.bgColor }} />
                    <span>Click on any tech card to explore details</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(26, 26, 46, 0.4);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #06B6D4;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8B5CF6;
        }
      `}</style>
    </div>
  );
};

export default Timeline;