'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FiGithub, FiExternalLink, FiCode, FiZap, FiUsers, FiGlobe, FiStar, FiClock, FiAward } from 'react-icons/fi';
import { FaHospital, FaMosque } from 'react-icons/fa';
import { MdRestaurant, MdInventory, MdStore, MdTrendingUp, MdGames } from 'react-icons/md';
import { BsBank, BsChatDots } from 'react-icons/bs';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { RiExternalLinkLine } from "react-icons/ri";

const Projects = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const canvasRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '✦', count: 16 },
    { id: 'fullstack', name: 'Full Stack', icon: '◈', count: 6 },
    { id: 'nextjs', name: 'Next.js', icon: '▣', count: 4 },
    { id: 'react', name: 'React', icon: '◉', count: 3 },
    { id: 'nodejs', name: 'Node.js', icon: '⬡', count: 2 },
    { id: 'django', name: 'Django', icon: '◆', count: 4 },
  ];

  const projectThumbnails = {
    1: 'Images/restureant.png',
    2: 'Images/mujjain.png',
    3: 'Images/mollah.png',
    4: 'Images/lumx.png',
    5: 'Images/stock.png',
    6: 'Images/visa.png',
    7: 'Images/detower.png',
    8: 'Images/redux.png',
    9: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop',
    10: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
    11: 'Images/gadget.png',
    12: 'Images/bank.png',
    13: 'Images/mhcf.png',
    14: 'Images/hospital.png',
    15: 'Images/metro.png',
    16: 'Images/blaze.png',
  };

  const allProjects = [
    {
      id: 1,
      title: "Online Restaurant Management System",
      shortDescription: "Complete food ordering, payment, and table reservation platform",
      description: `A sophisticated restaurant management system featuring real-time food ordering, secure payment processing, and intelligent table reservations.`,
      fullDescription: `Full feature list with food discovery, smart cart, secure payments, table reservations, admin dashboard, and customer experience tools.`,
      category: "nextjs",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://foodorder-kw5q.vercel.app/",
      githubUrl: "https://github.com/parvezislam45/foodorder",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <MdRestaurant className="text-[#b78aff]" />,
    },
    {
      id: 2,
      title: "Mosque Management System",
      shortDescription: "Advanced Mosque & Prayer Time with multi-role access",
      description: `Enterprise-grade Mosque & Prayer Time management with role-based access, live prayer times, and Islamic content.`,
      fullDescription: `Features include role-based access, live clock, daily prayer times, Quran Ayat display, and mosque registration.`,
      category: "fullstack",
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://www.muajjin.com/",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <FaMosque className="text-[#8ad4e6]" />,
      privateRepo: true,
    },
    {
      id: 3,
      title: "Inventory Management System",
      shortDescription: "Advanced inventory control with multi-role access",
      description: `Enterprise-grade inventory management with role-based access, real-time tracking, automated reordering, and multi-warehouse support.`,
      fullDescription: `Features include role-based access, real-time stock monitoring, batch tracking, order processing, supplier management, and analytics.`,
      category: "fullstack",
      technologies: ["Next.js", "Django", "DBSqlite"],
      liveUrl: "http://mollahmart.top/",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <MdInventory className="text-[#f5c27b]" />,
      privateRepo: true,
    },
    {
      id: 4,
      title: "Multi-Vendor E-Commerce Platform",
      shortDescription: "Complete marketplace for multiple sellers and buyers",
      description: `Comprehensive e-commerce marketplace enabling multiple vendors to sell products through a unified platform.`,
      fullDescription: `Features include vendor management, product catalog, order processing, payment system, and admin analytics.`,
      category: "django",
      technologies: ["Django", "Next.js", "Celery", "DBSqlite"],
      liveUrl: "http://lumxus.com/",
      githubUrl: "#",
      featured: false,
      status: "Live",
      completion: "100%",
      icon: <MdStore className="text-[#8ad4e6]" />,
      privateRepo: true,
    },
    {
      id: 5,
      title: "Wizard Stock Exchange",
      shortDescription: "Real-time stock trading platform with live market data",
      description: `Sophisticated stock trading simulation with real-time data, virtual trading, portfolio management, and educational resources.`,
      fullDescription: `Features include real-time trading, market data, learning resources, portfolio management, social features, and admin tools.`,
      category: "fullstack",
      technologies: ["Django", "React", "WebSocket", "Chart.js", "Redis"],
      liveUrl: "https://wizard-stock-exchange-7a44d.web.app/",
      githubUrl: "https://github.com/parvezislam45/Wizard-Stock-Exchange",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <MdTrendingUp className="text-[#f3a0b5]" />,
    },
    {
      id: 6,
      title: "Visa Management System",
      shortDescription: "Complete visa application processing platform",
      description: `Streamlined visa application system automating the entire process from submission to approval.`,
      fullDescription: `Features include application management, document processing, payment integration, communication system, analytics, and admin dashboard.`,
      category: "react",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://david-visa-management.netlify.app/",
      githubUrl: "https://github.com/parvezislam45/visaManagement",
      featured: false,
      status: "Live",
      completion: "100%",
      icon: <FiGlobe className="text-[#8ad4e6]" />,
    },
    {
      id: 7,
      title: "De Tower - Building Management",
      shortDescription: "Comprehensive building and tenant management system",
      description: `Advanced property management software for residential and commercial buildings with tenant management and maintenance tracking.`,
      fullDescription: `Features include tenant management, financial management, maintenance system, facility management, communication tools, and analytics.`,
      category: "fullstack",
      technologies: ["Next.js", "PHP", "MySQL", "Firebase", "Stripe"],
      liveUrl: "https://detowers.com/",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <TbBuildingSkyscraper className="text-[#b78aff]" />,
      privateRepo: true,
    },
    {
      id: 8,
      title: "Redux Todo Application",
      shortDescription: "Modern task management with Redux state management",
      description: `Clean, efficient todo application demonstrating modern React Redux patterns with task categorization and productivity analytics.`,
      fullDescription: `Features include task management, productivity tools, organization, collaboration, analytics, and user experience enhancements.`,
      category: "react",
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://redux-todo-app-phi.vercel.app/",
      githubUrl: "https://github.com/parvezislam45/Redux-Todo-App",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <FiCode className="text-[#f5c27b]" />,
    },
    {
      id: 9,
      title: "Job Portal Management API",
      shortDescription: "RESTful API for comprehensive job portal system",
      description: `Backend API for a full-featured job portal with authentication, job listings, applications, and employer management.`,
      fullDescription: `Features include job seeker profiles, employer management, job management, authentication, notification system, and analytics.`,
      category: "nodejs",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      liveUrl: "#",
      githubUrl: "https://github.com/parvezislam45/job-portal-management-system-api",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <FiUsers className="text-[#f3a0b5]" />,
      backendOnly: true,
    },
    {
      id: 10,
      title: "Tour Management API",
      shortDescription: "Backend API for tour and travel management",
      description: `Complete API for managing tour packages, bookings, payments, and customer relationships in the travel industry.`,
      fullDescription: `Features include tour management, booking system, customer management, payment processing, reporting, and integrations.`,
      category: "nodejs",
      technologies: ["Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/parvezislam45/mongoose-tour-management-api",
      featured: false,
      status: "Live",
      completion: "100%",
      icon: <FiGlobe className="text-[#8ad4e6]" />,
      backendOnly: true,
    },
    {
      id: 11,
      title: "Gear & Gadget Mania",
      shortDescription: "E-commerce platform for electronics and gadgets",
      description: `Specialized e-commerce platform for electronics, gadgets, and tech accessories with reviews and comparison tools.`,
      fullDescription: `Features include product catalog, shopping experience, customer support, content management, analytics, and mobile app.`,
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Firebase"],
      liveUrl: "https://geargagdet.firebaseapp.com/",
      githubUrl: "https://github.com/parvezislam45/gadget-gear-server",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <MdStore className="text-[#f5c27b]" />,
    },
    {
      id: 12,
      title: "Bank Management System",
      shortDescription: "Complete banking operations management platform",
      description: `Comprehensive banking system for managing customer accounts, transactions, loans, and financial services.`,
      fullDescription: `Features include account management, transaction processing, loan management, security features, customer service, and admin dashboard.`,
      category: "django",
      technologies: ["Django", "DBSqlite", "HTML-5", "Tailwind CSS", "Render"],
      liveUrl: "https://bankmanagement.onrender.com/",
      githubUrl: "https://github.com/parvezislam45/banking_website",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <BsBank className="text-[#8ad4e6]" />,
    },
    {
      id: 13,
      title: "NGO Mental Health Care Foundation",
      shortDescription: "Modern NGO Website for mental health awareness",
      description: `Non-profit NGO website for Mental Health Care Foundation with modern web technologies for seamless user experience.`,
      fullDescription: `Features include user profiles, content sharing, communication, community features, content discovery, and moderation tools.`,
      category: "fullstack",
      technologies: ["Next.js", "Django"],
      liveUrl: "http://mentalhealthcf.org/",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <BsChatDots className="text-[#f3a0b5]" />,
      privateRepo: true,
    },
    {
      id: 14,
      title: "Hospital Management App",
      shortDescription: "Healthcare management and patient care platform",
      description: `Comprehensive hospital management system integrating patient care, appointment scheduling, medical records, and administrative functions.`,
      fullDescription: `Features include patient management, clinical management, appointment system, administrative features, telemedicine, and analytics.`,
      category: "nextjs",
      technologies: ["Next.js", "Django", "DBSqlite", "Vercel"],
      liveUrl: "https://hospital-psi-eight.vercel.app/",
      githubUrl: "https://github.com/parvezislam45/hospital",
      featured: true,
      status: "Development",
      completion: "75%",
      icon: <FaHospital className="text-[#f3a0b5]" />,
    },
    {
      id: 15,
      title: "Metro Solver",
      shortDescription: "Public transportation route optimization",
      description: `Intelligent transportation system for optimizing metro routes, schedules, and passenger flow with real-time tracking.`,
      fullDescription: `Features include route planning, real-time information, ticketing system, passenger information, analytics, and admin dashboard.`,
      category: "nextjs",
      technologies: ["Next.js", "TypeScript"],
      liveUrl: "https://metro-gamma-liard.vercel.app/",
      githubUrl: "https://github.com/parvezislam45/metro",
      featured: true,
      status: "Development",
      completion: "60%",
      icon: <FiGlobe className="text-[#8ad4e6]" />,
    },
    {
      id: 16,
      title: "Online Play Games",
      shortDescription: "Multiplayer online gaming platform",
      description: `Interactive gaming platform featuring multiple game types, real-time multiplayer capabilities, and competitive leaderboards.`,
      fullDescription: `Features include game library, multiplayer system, user features, social features, monetization, and admin tools.`,
      category: "react",
      technologies: ["React", "WebSocket", "Node.js", "MongoDB"],
      liveUrl: "https://blaze-ecru.vercel.app/",
      githubUrl: "https://github.com/parvezislam45/animated",
      featured: true,
      status: "Live",
      completion: "100%",
      icon: <MdGames className="text-[#f5c27b]" />,
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const isPrivateRepo = project.githubUrl === '#' || project.githubUrl === '' || project.privateRepo === true;
    const isBackendOnly = project.liveUrl === '#' || project.liveUrl === '' || project.backendOnly === true;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0d0d] rounded-3xl border border-[#2a2424] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 p-6 bg-[#0f0d0d]/95 backdrop-blur-sm border-b border-[#2a2424]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#1a1616] border border-[#2a2424]">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-700/30' :
                      project.status === 'Beta' ? 'bg-amber-900/40 text-amber-300 border border-amber-700/30' :
                      project.status === 'Development' ? 'bg-blue-900/40 text-blue-300 border border-blue-700/30' :
                      'bg-gray-800/40 text-gray-300 border border-gray-700/30'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1.5 bg-[#1a1616] rounded-xl text-xs text-[#9a8f8f] border border-[#2a2424]">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#2a2424] rounded-full transition-colors"
              >
                <span className="text-2xl text-[#9a8f8f] hover:text-white">×</span>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img
                src={projectThumbnails[project.id]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0d] via-transparent to-transparent"></div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#b78aff] uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-[#c4b8b8] leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#b78aff] uppercase tracking-wider mb-3">Key Features</h4>
              <div className="bg-[#1a1616] p-4 rounded-2xl border border-[#2a2424]">
                <pre className="whitespace-pre-wrap font-sans text-[#c4b8b8] text-sm leading-relaxed">
                  {project.fullDescription}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#b78aff] uppercase tracking-wider mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1a1616] rounded-xl text-[#d4cccc] border border-[#2a2424] text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-[#2a2424]">
              {!isBackendOnly ? (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#6d4aff] text-white py-3.5 rounded-2xl font-semibold hover:bg-[#5a3ddb] transition-all duration-300"
                >
                  <FiExternalLink />
                  Live Demo
                </motion.a>
              ) : (
                <div className="flex-1 flex items-center justify-center gap-2 bg-[#1a1616] text-[#9a8f8f] py-3.5 rounded-2xl font-semibold border border-[#2a2424]">
                  <FiExternalLink />
                  Backend API Only
                </div>
              )}
              
              {!isPrivateRepo ? (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1a1616] text-[#d4cccc] py-3.5 rounded-2xl font-semibold border border-[#2a2424] hover:border-[#6d4aff] hover:text-white transition-all duration-300"
                >
                  <FiGithub />
                  Source Code
                </motion.a>
              ) : (
                <div className="flex-1 flex items-center justify-center gap-2 bg-[#1a1616] text-[#9a8f8f] py-3.5 rounded-2xl font-semibold border border-[#2a2424]">
                  <FiGithub />
                  Private Repository
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(1, 0)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.08, specular: 0xffffff, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x6366f1, transparent: true, opacity: 0.06, specular: 0xffffff, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xec4899, transparent: true, opacity: 0.05, specular: 0xffffff, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.06, specular: 0xffffff, shininess: 100 })
    ];

    const objects = [];
    const objectCount = 12;

    for (let i = 0; i < objectCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 30;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 30 - 20;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      const scale = 0.5 + Math.random() * 1.5;
      mesh.scale.set(scale, scale, scale);

      mesh.userData = {
        speed: {
          x: (Math.random() - 0.5) * 0.003,
          y: (Math.random() - 0.5) * 0.003,
          z: (Math.random() - 0.5) * 0.002
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01
        }
      };

      scene.add(mesh);
      objects.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 25;

    const animate = () => {
      requestAnimationFrame(animate);

      objects.forEach(obj => {
        obj.position.x += obj.userData.speed.x;
        obj.position.y += obj.userData.speed.y;
        obj.position.z += obj.userData.speed.z;

        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;

        if (Math.abs(obj.position.x) > 20) {
          obj.userData.speed.x *= -1;
          obj.position.x = Math.sign(obj.position.x) * 20;
        }
        if (Math.abs(obj.position.y) > 15) {
          obj.userData.speed.y *= -1;
          obj.position.y = Math.sign(obj.position.y) * 15;
        }
        if (obj.position.z > 5 || obj.position.z < -40) {
          obj.userData.speed.z *= -1;
          obj.position.z = obj.position.z > 0 ? 5 : -40;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#0a0909] relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Premium Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute -inset-6 bg-[#6d4aff] blur-3xl opacity-10"></div>
                <div className="relative">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6d4aff]"></div>
                    <span className="text-[#6d4aff] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6d4aff]"></div>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="text-white">Featured</span>
                    <span className="text-[#b78aff] ml-4">Projects</span>
                  </h2>
                  <p className="text-[#9a8f8f] mt-4 text-lg">
                    {allProjects.length} innovative solutions • {filteredProjects.length} currently showing
                  </p>
                </div>
              </div>
            </div>

            {/* View Mode Toggle */}
            <motion.div 
              className="inline-flex items-center bg-[#141212] rounded-2xl p-1.5 border border-[#2a2424] mb-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                  viewMode === 'grid' 
                    ? 'bg-[#6d4aff] text-white shadow-lg' 
                    : 'text-[#9a8f8f] hover:text-white hover:bg-[#2a2424]'
                }`}
              >
                <FiCode className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                  viewMode === 'detailed' 
                    ? 'bg-[#6d4aff] text-white shadow-lg' 
                    : 'text-[#9a8f8f] hover:text-white hover:bg-[#2a2424]'
                }`}
              >
                <FiZap className="w-4 h-4" />
                Detailed
              </button>
            </motion.div>
          </motion.div>
          
          {/* Category Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-5 py-2.5 rounded-xl transition-all duration-300 font-medium flex items-center gap-2.5 text-sm ${
                  activeCategory === category.id
                    ? 'bg-[#6d4aff] text-white shadow-lg shadow-[#6d4aff]/20'
                    : 'bg-[#141212] text-[#9a8f8f] hover:bg-[#2a2424] hover:text-white border border-[#2a2424]'
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-[#2a2424] text-[#6a5f5f]'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid ${viewMode === 'detailed' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-5`}
            >
              {filteredProjects.map((project, index) => {
                const isPrivateRepo = project.githubUrl === '#' || project.githubUrl === '' || project.privateRepo === true;
                const isBackendOnly = project.liveUrl === '#' || project.liveUrl === '' || project.backendOnly === true;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Premium Card - New Pattern */}
                    <div className="relative bg-[#111010] rounded-2xl border border-[#2a2424] overflow-hidden transition-all duration-500 hover:border-[#6d4aff]/40 hover:shadow-2xl hover:shadow-[#6d4aff]/5">
                      
                      {/* Top Gradient Line */}
                      <div className="h-0.5 w-full bg-gradient-to-r from-[#6d4aff] via-[#b78aff] to-[#6d4aff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Image with Overlay Pattern */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={projectThumbnails[project.id]}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-sm border ${
                            project.status === 'Live' ? 'bg-emerald-900/60 text-emerald-300 border-emerald-700/30' :
                            project.status === 'Beta' ? 'bg-amber-900/60 text-amber-300 border-amber-700/30' :
                            project.status === 'Development' ? 'bg-blue-900/60 text-blue-300 border-blue-700/30' :
                            'bg-gray-800/60 text-gray-300 border-gray-700/30'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute bottom-4 left-4">
                          <div className="p-2.5 bg-[#111010]/90 backdrop-blur-sm rounded-xl border border-[#2a2424]">
                            {project.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-[#b78aff] transition-colors duration-300 line-clamp-1 tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-3.5">
                          {project.shortDescription}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-3.5">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-[#1a1616] rounded-lg text-xs text-[#d4cccc] border border-[#2a2424]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2.5 py-1 bg-[#1a1616] rounded-lg text-xs text-[#6a5f5f] border border-[#2a2424]">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        
                        {/* Stats with Icons */}
                        {project.stats && (
                          <div className="flex items-center gap-4 mb-3.5 text-xs">
                            {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                              <div key={key} className="flex items-center gap-1.5">
                                <span className="text-[#6d4aff] font-semibold">{value}</span>
                                <span className="text-[#6a5f5f] capitalize">{key}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Progress */}
                        <div className="mb-3.5">
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-gray-50">Completion</span>
                            <span className="font-semibold text-white">{project.completion}</span>
                          </div>
                          <div className="w-full h-1 bg-[#1a1616] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: project.completion }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-[#6d4aff] to-[#b78aff]"
                            ></motion.div>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="flex-1 bg-[#6d4aff] text-white py-2.5 rounded-xl font-medium text-sm hover:bg-[#5a3ddb] transition-all duration-300"
                          >
                            Explore
                          </motion.button>
                          
                          {!isBackendOnly ? (
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center justify-center w-10 h-10 bg-[#1a1616] text-[#d4cccc] rounded-xl border border-[#2a2424] hover:border-[#6d4aff] hover:text-white transition-all duration-300"
                            >
                              <RiExternalLinkLine className="w-4 h-4" />
                            </motion.a>
                          ) : (
                            <div className="flex items-center justify-center w-10 h-10 bg-[#1a1616] text-[#4a3f3f] rounded-xl border border-[#2a2424] cursor-default">
                              <RiExternalLinkLine className="w-4 h-4" />
                            </div>
                          )}
                          
                          {!isPrivateRepo ? (
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center justify-center w-10 h-10 bg-[#1a1616] text-[#d4cccc] rounded-xl border border-[#2a2424] hover:border-[#6d4aff] hover:text-white transition-all duration-300"
                            >
                              <FiGithub className="w-4 h-4" />
                            </motion.a>
                          ) : (
                            <div className="flex items-center justify-center w-10 h-10 bg-[#1a1616] text-[#4a3f3f] rounded-xl border border-[#2a2424] cursor-default">
                              <FiGithub className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#6d4aff]/20 rounded-tl-2xl"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#b78aff]/20 rounded-br-2xl"></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-[#141212] rounded-full flex items-center justify-center border border-[#2a2424]">
                <div className="text-6xl">✦</div>
              </div>
              <h3 className="text-3xl font-bold text-[#d4cccc] mb-4">No Projects Found</h3>
              <p className="text-[#9a8f8f] mb-8 max-w-md mx-auto">
                No projects match your selected category. Try adjusting your filter.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory('all')}
                className="px-8 py-3 bg-[#6d4aff] rounded-2xl font-semibold text-white shadow-lg hover:bg-[#5a3ddb] transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;