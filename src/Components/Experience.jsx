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

    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
      groupRef.current.rotation.y = Math.cos(time * 0.1) * 0.05;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.08;
      particlesRef.current.rotation.x = Math.sin(time * 0.15) * 0.15;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.15;
      torusRef.current.rotation.y = time * 0.08;
      torusRef.current.position.y = Math.sin(time * 0.4) * 0.4;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[-4, 1, -6]}>
            <icosahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial
              color="#6366F1"
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
              color="#10B981"
              transparent
              opacity={0.08}
              wireframe
            />
          </mesh>
        </Float>
      </group>

      <mesh ref={torusRef} position={[0, -2, -10]}>
        <torusKnotGeometry args={[1.5, 0.3, 200, 32]} />
        <meshStandardMaterial
          color="#8B5CF6"
          transparent
          opacity={0.04}
          wireframe
        />
      </mesh>

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
          color="#6366F1"
          size={0.02}
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 6]} intensity={0.6} color="#6366F1" />
      <pointLight position={[-6, -6, 4]} intensity={0.4} color="#10B981" />
      <pointLight position={[0, 8, 2]} intensity={0.3} color="#8B5CF6" />

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

// Premium Card Component with Solid Colors
const PremiumCard = ({ item, type, index }) => {
  const cardRef = useRef();

  const getCardColors = () => {
    if (type === "experience") {
      return {
        border: "#6366F1",
        borderLight: "#818CF8",
        bg: "#1E1B4B",
        text: "#C7D2FE",
        accent: "#6366F1"
      };
    } else {
      return {
        border: "#10B981",
        borderLight: "#34D399",
        bg: "#064E3B",
        text: "#A7F3D0",
        accent: "#10B981"
      };
    }
  };

  const colors = getCardColors();

  return (
    <div
      ref={cardRef}
      className="relative group"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      {/* Solid Glow Effect */}
      <div 
        className="absolute inset-0 rounded-3xl blur-xl transition-all duration-700 opacity-0 group-hover:opacity-20"
        style={{ backgroundColor: colors.border }}
      />
      
      {/* Main Card */}
      <div 
        className="relative p-8 backdrop-blur-2xl rounded-2xl border transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl"
        style={{
          backgroundColor: "#1A1A2E",
          borderColor: "rgba(255,255,255,0.05)",
        }}
      >
        {/* Corner Accents */}
        <div 
          className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderColor: colors.border }}
        />
        <div 
          className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderColor: colors.border }}
        />

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-all duration-500 nav">
              {type === "experience" ? item.title : item.degree}
            </h3>
            {item.href ? (
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-md transition-colors duration-300 flex items-center gap-2 mt-1 font-semibold"
                style={{ color: colors.border }}
              >
                {item.company}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <p className="text-sm font-semibold mt-1 text-gray-300 text">
                {item.company || item.school}
              </p>
            )}
            {item.address && (
              <p className="text-sm text-gray-400 mt-1 flex items-center text">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.address}
              </p>
            )}
          </div>
          <span 
            className="text-sm font-semibold px-4 py-2 rounded-full border backdrop-blur-sm mt-3 lg:mt-0"
            style={{
              color: colors.border,
              backgroundColor: `${colors.border}20`,
              borderColor: `${colors.border}30`
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Tech Stack / Grade */}
        <div className="flex flex-wrap gap-3 mt-6">
          {(type === "experience" ? item.tech : [item.grade]).map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 nav rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105"
              style={{
                color: colors.text,
                backgroundColor: `${colors.border}15`,
                borderColor: `${colors.border}30`
              }}
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
      tech: ["Next.js", "React", "Django", "Node.js", "Express Js", "Tailwind"],
    },
    {
      title: "Junior Developer",
      company: "My Next Flim Ltd",
      address: "Delhi, India",
      period: "2023 - 2024",
      tech: ["React", "Django", "Firebase", "Tailwind Css"],
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
    <section className="relative min-h-screen py-20 bg-[#0A0A0F]">
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
          <div className="inline-flex items-center px-8 py-4 backdrop-blur-2xl rounded-2xl border mb-8"
          style={{
            backgroundColor: "#1A1A2E",
            borderColor: "rgba(255,255,255,0.05)"
          }}>
            <div className="w-3 h-3 rounded-full mr-4 animate-pulse" style={{ backgroundColor: "#6366F1" }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white nav">
              Professional Journey
            </h1>
            <div className="w-3 h-3 rounded-full ml-4 animate-pulse" style={{ backgroundColor: "#10B981" }} />
          </div>
          <p className="text-md font-semibold text-gray-300 max-w-3xl mx-auto leading-relaxed text">
            Building digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Experience Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 backdrop-blur-xl rounded-2xl border mb-6"
              style={{
                backgroundColor: "#1E1B4B",
                borderColor: "#6366F130"
              }}>
                <div className="w-3 h-3 rounded-full mr-3 animate-pulse" style={{ backgroundColor: "#6366F1" }} />
                <h2 className="text-3xl font-bold nav" style={{ color: "#C7D2FE" }}>
                  Work Experience
                </h2>
              </div>
              <p className="text-gray-400 text-md font-semibold text">
                3+ Years of Crafting Digital Solutions
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
              <div className="inline-flex items-center px-6 py-3 backdrop-blur-xl rounded-2xl border mb-6"
              style={{
                backgroundColor: "#064E3B",
                borderColor: "#10B98130"
              }}>
                <div className="w-3 h-3 rounded-full mr-3 animate-pulse" style={{ backgroundColor: "#10B981" }} />
                <h2 className="text-3xl font-bold nav" style={{ color: "#A7F3D0" }}>
                  Education
                </h2>
              </div>
              <p className="text-gray-400 text-md font-semibold text">
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

      {/* Custom Styles */}
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

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(26, 26, 46, 0.4);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #6366F1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8B5CF6;
        }
      `}</style>
    </section>
  );
};

export default Experience;