'use client'
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

// Enhanced Live 3D Animation Background
const Live3DBackground = () => {
  const groupRef = useRef();
  const particlesRef = useRef();
  const torusRef = useRef();

  // Create particle system
  const particlesCount = 150;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Animate main group
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
      groupRef.current.rotation.y = Math.cos(time * 0.1) * 0.05;
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.08;
      particlesRef.current.rotation.x = Math.sin(time * 0.15) * 0.15;
    }

    // Animate torus knot
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.15;
      torusRef.current.rotation.y = time * 0.08;
      torusRef.current.position.y = Math.sin(time * 0.4) * 0.4;
    }
  });

  return (
    <>
      {/* Main floating shapes */}
      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[-4, 1, -6]}>
            <icosahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial
              color="#6366f1"
              transparent
              opacity={0.08}
              wireframe
            />
          </mesh>
        </Float>

        <Float speed={2.5} rotationIntensity={1.8} floatIntensity={1.8}>
          <mesh position={[4, -1, -8]}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#10b981"
              transparent
              opacity={0.08}
              wireframe
            />
          </mesh>
        </Float>
      </group>

      {/* Animated Torus Knot */}
      <mesh ref={torusRef} position={[0, -2, -10]}>
        <torusKnotGeometry args={[1.5, 0.3, 200, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.04}
          wireframe
        />
      </mesh>

      {/* Enhanced Particle System */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#6366f1"
          size={0.02}
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Enhanced Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 6]} intensity={0.6} color="#6366f1" />
      <pointLight position={[-6, -6, 4]} intensity={0.4} color="#10b981" />
      <pointLight position={[0, 8, 2]} intensity={0.3} color="#8b5cf6" />

      {/* Subtle camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
};

// Premium Animated Card Component
const PremiumCard = ({ item, type, index }) => {
  const cardRef = useRef();

  return (
    <div
      ref={cardRef}
      className="relative group"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
      
      {/* Main Card */}
      <div className="relative p-8 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-2xl rounded-2xl border border-gray-700/30 hover:border-indigo-500/40 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
        
        {/* Corner Accents */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-indigo-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-500 nav">
              {type === "experience" ? item.title : item.degree}
            </h3>
            {item.href ? (
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-md text-cyan-300 hover:text-cyan-200 transition-colors duration-300 flex items-center gap-2 mt-1 font-semibold text"
              >
                {item.company}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <p className="text-sm text-gray-200 font-semibold mt-1 text">
                {item.company || item.school}
              </p>
            )}
            {item.address && (
              <p className="text-sm main text-gray-400 mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.address}
              </p>
            )}
          </div>
          <span className={`text-sm font-semibold text px-4 py-2 rounded-full border backdrop-blur-sm mt-3 lg:mt-0 ${
            type === "experience" 
              ? "text-indigo-300 bg-indigo-500/20 border-indigo-500/30" 
              : "text-emerald-300 bg-emerald-500/20 border-emerald-500/30"
          }`}>
            {item.period}
          </span>
        </div>

        {/* Tech Stack / Grade */}
        <div className="flex flex-wrap gap-3 mt-6">
          {(type === "experience" ? item.tech : [item.grade]).map((tech, i) => (
            <span
              key={i}
              className={`px-4 py-2 nav rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                type === "experience"
                  ? "text-indigo-200 bg-indigo-500/15 border-indigo-500/30 hover:bg-indigo-500/25 hover:border-indigo-400/50"
                  : "text-emerald-200 bg-emerald-500/15 border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-400/50"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experience = [
    {
      title: "Full Stack Web Developer",
      company: "EZ Printers",
      href: "https://ezprinters.co.uk/",
      address: "London, England",
      period: "2024 - Present",
      tech: ["Next.js", "React", "Django", "Node.js","Express Js", "Tailwind"],
    },
    {
      title: "Junior Developer",
      company: "My Next Flim Ltd",
      address: "Delhi, India",
      period: "2023 - 2024",
      tech: ["React", "Django", "Firebase","Tailwind Css"],
    },
  ];

  const education = [
    {
      degree: "BSC Mechanical Engineering",
      school: "International University of Business Agriculture & Technology",
      period: "2016 - 2020",
      grade: "3.4 GPA With 4.00 Scale",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 bg-[#1d1515]">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Live3DBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-2xl rounded-2xl border border-gray-700/30 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent nav">
              Professional Journey
            </h1>
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full ml-4 animate-pulse" />
          </div>
          <p className="text-md font-semibold text-gray-300 max-w-3xl mx-auto leading-relaxed text">
            Building digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Enhanced Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Experience Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-indigo-500/30 mb-6">
                <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3 animate-pulse" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent nav">
                  Work Experience
                </h2>
              </div>
              <p className="text-gray-400 text-md text font-semibold">
                2 Years of Crafting Digital Solutions
              </p>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <PremiumCard item={exp} type="experience" index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Education Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl border border-emerald-500/30 mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent nav">
                  Education
                </h2>
              </div>
              <p className="text-gray-400 text-md text font-semibold">
                Academic foundation and continuous learning
              </p>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                  <PremiumCard item={edu} type="education" index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Experience;