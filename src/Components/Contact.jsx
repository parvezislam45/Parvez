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

    // Simulate form submission - you can replace this with your preferred method
    try {
      // Method 1: Formspree (free service)
      const response = await fetch('https://formspree.io/f/mpzvqjqg', { // Replace with your Formspree ID
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
      // Fallback: Open default email client
      const mailtoLink = `mailto:parvezislam45@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.description}`)}`;
      window.location.href = mailtoLink;
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Advanced 3D Background with Floating Forms
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

    // Create floating communication elements
    const createCommunicationElement = (type, color) => {
      let geometry;
      switch(type) {
        case 'message':
          geometry = new THREE.PlaneGeometry(2, 1);
          break;
        case 'email':
          geometry = new THREE.BoxGeometry(1.5, 1, 0.3);
          break;
        case 'connection':
          geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
          break;
        case 'send':
          geometry = new THREE.ConeGeometry(0.8, 1.5, 8);
          break;
        default:
          geometry = new THREE.SphereGeometry(0.8, 16, 16);
      }

      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        transparent: true,
        opacity: 0.8,
        metalness: 0.7,
        roughness: 0.1,
        transmission: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        emissive: color,
        emissiveIntensity: 0.3
      });

      return new THREE.Mesh(geometry, material);
    };

    const communicationElements = [];
    const colors = [0x3B82F6, 0x10B981, 0x8B5CF6, 0xF59E0B];
    const types = ['message', 'email', 'connection', 'send'];
    
    types.forEach((type, index) => {
      const element = createCommunicationElement(type, colors[index]);
      
      const angle = (index / types.length) * Math.PI * 2;
      const radius = 10;
      
      element.position.x = Math.cos(angle) * radius;
      element.position.y = Math.sin(angle) * 3;
      element.position.z = (Math.random() - 0.5) * 6;
      
      element.rotation.x = Math.random() * 0.5;
      element.rotation.y = Math.random() * 0.5;
      
      scene.add(element);
      
      communicationElements.push({
        mesh: element,
        type: type,
        originalPosition: element.position.clone(),
        speed: 0.3 + Math.random() * 0.4,
        floatHeight: 1 + Math.random() * 2
      });
    });

    // Connection network
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2
    });

    const lines = [];
    for (let i = 0; i < communicationElements.length; i++) {
      for (let j = i + 1; j < communicationElements.length; j++) {
        if (Math.random() > 0.5) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            communicationElements[i].mesh.position,
            communicationElements[j].mesh.position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
          lines.push({ line, start: i, end: j });
        }
      }
    }

    // Data flow particles
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 40;
      colorArray[i] = Math.random() * 0.5 + 0.5;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Advanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x3B82F6, 1.5);
    directionalLight1.position.set(10, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x8B5CF6, 1);
    directionalLight2.position.set(-10, -5, 5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x10B981, 0.8, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    camera.position.z = 18;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Animate communication elements
      communicationElements.forEach((element, index) => {
        element.mesh.position.y = element.originalPosition.y + 
          Math.sin(elapsedTime * element.speed + index) * element.floatHeight;
        element.mesh.position.x = element.originalPosition.x + 
          Math.cos(elapsedTime * element.speed * 0.7 + index) * 0.5;
        element.mesh.rotation.x += element.speed * 0.01;
        element.mesh.rotation.y += element.speed * 0.02;
        
        // Pulsing emission
        element.mesh.material.emissiveIntensity = 0.3 + Math.sin(elapsedTime * 2 + index) * 0.2;
      });

      // Update connection lines
      lines.forEach(({ line, start, end }) => {
        line.geometry.setFromPoints([
          communicationElements[start].mesh.position,
          communicationElements[end].mesh.position
        ]);
      });

      // Animate particles
      particleSystem.rotation.x = elapsedTime * 0.02;
      particleSystem.rotation.y = elapsedTime * 0.03;

      // Dynamic camera movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 3;
      camera.position.y = Math.cos(elapsedTime * 0.1) * 2;
      camera.lookAt(0, 0, 0);

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
      scale: 1.02,
      y: -2,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      borderColor: "#3B82F6",
      background: "rgba(0, 0, 0, 0.4)"
    },
    blur: {
      scale: 1,
      y: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      background: "rgba(0, 0, 0, 0.3)"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Advanced 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
            >
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-sm font-medium text-gray-300">LET'S CONNECT & CREATE</span>
            </motion.div>
            
            <h1 className="text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? Let's discuss your ideas and bring them to life together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus="focus"
                  whileHover="focus"
                  initial="blur"
                  variants={inputVariants}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-black/30 backdrop-blur-lg rounded-2xl border-2 border-white/10 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>

                <motion.div
                  whileFocus="focus"
                  whileHover="focus"
                  initial="blur"
                  variants={inputVariants}
                  className="relative"
                >
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-black/30 backdrop-blur-lg rounded-2xl border-2 border-white/10 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                    placeholder="Project discussion / Collaboration"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div
                whileFocus="focus"
                whileHover="focus"
                initial="blur"
                variants={inputVariants}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-lg rounded-2xl border-2 border-white/10 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>

              {/* Description Field */}
              <motion.div
                whileFocus="focus"
                whileHover="focus"
                initial="blur"
                variants={inputVariants}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-lg rounded-2xl border-2 border-white/10 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      Sending Your Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message & Start Conversation
                    </span>
                  )}
                </span>
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-400 text-center"
                  >
                    ✅ Message sent successfully! I'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'fallback' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-blue-500/20 border border-blue-400/30 rounded-2xl text-blue-400 text-center"
                  >
                    📧 Opening your email client... Please send the pre-filled message.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/20 border border-red-400/30 rounded-2xl text-red-400 text-center"
                  >
                    ❌ Failed to send message. Please email me directly at parvezislam45@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Direct Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <motion.a
              href="mailto:parvezislam45@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 text-gray-300 hover:text-white hover:border-blue-400/30 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div className="text-center">
                <div className="font-semibold">Email Directly</div>
                <div className="text-sm opacity-75">parvezislam45@gmail.com</div>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1"/>
              </svg>
              <div className="text-center">
                <div className="font-semibold">Response Time</div>
                <div className="text-sm opacity-75">Within 24 Hours</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <div className="text-center">
                <div className="font-semibold">Secure</div>
                <div className="text-sm opacity-75">Encrypted Connection</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Communication Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {['💌', '📮', '🚀', '💫', '✨', '🌟'].map((symbol, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/10 text-4xl"
            style={{
              left: `${15 + index * 12}%`,
              top: `${15 + Math.cos(index) * 70}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 18 + index * 3,
              repeat: Infinity,
              delay: index * 2,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PremiumContact;