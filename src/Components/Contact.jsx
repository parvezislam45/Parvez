'use client'
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumContact = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mpzvqjqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          message: formData.description,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', subject: '', email: '', description: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      const mailtoLink = `mailto:parvezislam45@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.description}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Simplified 3D Background
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

    // Create floating shapes
    const shapes = [];
    const colors = [0xA855F7, 0x8B5CF6, 0x7C3AED, 0x6D28D9];
    
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.15 + Math.random() * 0.25, 0);
      const material = new THREE.MeshPhysicalMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.2,
        metalness: 0.5,
        roughness: 0.5,
        emissive: colors[Math.floor(Math.random() * colors.length)],
        emissiveIntensity: 0.15
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 12;
      mesh.position.z = (Math.random() - 0.5) * 15;
      
      scene.add(mesh);
      shapes.push({
        mesh,
        speed: 0.2 + Math.random() * 0.3,
        rotSpeed: 0.01 + Math.random() * 0.02
      });
    }

    // Particle system
    const particleCount = 800;
    const particles = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xA855F7,
      size: 0.015,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xA855F7, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8B5CF6, 0.6, 40);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    camera.position.z = 10;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      shapes.forEach((shape, index) => {
        shape.mesh.position.y += Math.sin(elapsedTime * shape.speed + index) * 0.004;
        shape.mesh.rotation.x += shape.rotSpeed;
        shape.mesh.rotation.y += shape.rotSpeed;
        shape.mesh.material.emissiveIntensity = 0.15 + Math.sin(elapsedTime * 2 + index) * 0.1;
      });

      particleSystem.rotation.y = elapsedTime * 0.015;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

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
    };
  }, []);

  const inputVariants = {
    focus: {
      scale: 1.01,
      borderColor: "#A855F7",
      backgroundColor: "rgba(168,85,247,0.05)"
    },
    blur: {
      scale: 1,
      borderColor: "rgba(255,255,255,0.08)",
      backgroundColor: "rgba(0,0,0,0.15)"
    }
  };

  return (
    <div className="relative py-6 md:py-8 lg:mt-10 overflow-hidden" style={{ backgroundColor: '#0A0A0F', minHeight: 'auto' }}>
      {/* 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      
      {/* Overlays */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(168,85,247,0.04), transparent 50%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 80% 70%, rgba(168,85,247,0.04), transparent 50%)'
      }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(168,85,247,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(168,85,247,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header - Minimal */}
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
                    Get in Touch
                  </h1>
                  <div className="w-3 h-3 rounded-full ml-4 animate-pulse" style={{ backgroundColor: "#10B981" }} />
                </div>
                <p className="text-gray-200 text-sm max-w-4xl mx-auto mb-8 text">
                  Let's discuss your project and bring your ideas to life
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-xl border p-4 md:p-5  md:mt-10"
            style={{
              backgroundColor: 'rgba(26,26,46,0.7)',
              borderColor: 'rgba(255,255,255,0.05)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                  className="relative"
                >
                  <label className="block head text-[15px] font-medium text-gray-50 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text rounded-lg border text-white placeholder-gray-200 focus:outline-none transition-all duration-300 text-xs"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.15)',
                      borderColor: 'rgba(255,255,255,0.08)'
                    }}
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                  className="relative"
                >
                  <label className="block text-[15px] head font-medium text-gray-50 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full text px-3 py-2 rounded-lg border text-white placeholder-gray-200 focus:outline-none transition-all duration-300 text-xs"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.15)',
                      borderColor: 'rgba(255,255,255,0.08)'
                    }}
                    placeholder="Project Discussion"
                  />
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div
                whileFocus="focus"
                initial="blur"
                variants={inputVariants}
                className="relative"
              >
                <label className="block text-[15px] head font-medium text-gray-50 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text rounded-lg border text-white placeholder-gray-200 focus:outline-none transition-all duration-300 text-xs"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.15)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                  placeholder="parvez@example.com"
                />
              </motion.div>

              {/* Description Field */}
              <motion.div
                whileFocus="focus"
                initial="blur"
                variants={inputVariants}
                className="relative"
              >
                <label className="block text-[15px] head font-medium text-gray-50 mb-1">
                  Message *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border text text-white placeholder-gray-200 focus:outline-none transition-all duration-300 resize-none text-xs"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.15)',
                    borderColor: 'rgba(255,255,255,0.08)'
                  }}
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 font-semibold rounded-lg transition-all duration-300 text-sm"
                style={{
                  backgroundColor: '#A855F7',
                  color: '#FFFFFF'
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center head">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </span>
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-2 rounded-lg text-center text-xs"
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.1)',
                      borderColor: 'rgba(16,185,129,0.2)',
                      color: '#34D399'
                    }}
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === 'fallback' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-2 rounded-lg text-center text-xs"
                    style={{
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      borderColor: 'rgba(59,130,246,0.2)',
                      color: '#60A5FA'
                    }}
                  >
                    📧 Opening email client...
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Quick Contact Options - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-3 gap-2 mt-3"
          >
            <motion.a
              href="mailto:parvezislam45@gmail.com"
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg border text-xs transition-all duration-300"
              style={{
                backgroundColor: 'rgba(26,26,46,0.5)',
                borderColor: 'rgba(255,255,255,0.05)',
                color: '#9CA3AF'
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="hidden sm:inline text-[10px] text">Email</span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg border text-xs"
              style={{
                backgroundColor: 'rgba(26,26,46,0.5)',
                borderColor: 'rgba(255,255,255,0.05)',
                color: '#9CA3AF'
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1"/>
              </svg>
              <span className="hidden sm:inline text-[10px] text">24hr Response</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg border text-xs"
              style={{
                backgroundColor: 'rgba(26,26,46,0.5)',
                borderColor: 'rgba(255,255,255,0.05)',
                color: '#9CA3AF'
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span className="hidden sm:inline text-[10px] text">Secure</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
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

export default PremiumContact;