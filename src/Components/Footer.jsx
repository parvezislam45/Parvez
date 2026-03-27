'use client'
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const PremiumFooter = () => {
  const canvasRef = useRef(null);
  const [currentYear] = useState(new Date().getFullYear());

  // Minimal 3D Background
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

    // Simple floating geometry
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.8, 16, 16),
      new THREE.ConeGeometry(0.7, 1.5, 8),
      new THREE.OctahedronGeometry(0.9, 0)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xF59E0B, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      })
    ];

    const meshes = [];
    geometries.forEach((geometry, index) => {
      const material = materials[index];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 5 - 2;
      mesh.position.z = (Math.random() - 0.5) * 5;
      
      scene.add(mesh);
      meshes.push({
        mesh,
        speed: 0.2 + Math.random() * 0.3
      });
    });

    camera.position.z = 8;

    // Simple animation
    const animate = () => {
      requestAnimationFrame(animate);

      meshes.forEach((item, index) => {
        item.mesh.rotation.x += item.speed * 0.01;
        item.mesh.rotation.y += item.speed * 0.02;
        item.mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
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
    };
  }, []);

  const links = {
    navigation: ['Home', 'About', 'Services', 'Projects', 'Contact'],
    services: ['Web Development', 'Full Stack', '3D Experiences', 'Consulting'],
    connect: ['Email', 'LinkedIn', 'GitHub', 'Schedule Call']
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Email', url: 'mailto:parvezislam45@gmail.com', icon: '📧' }
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Subtle 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <div>
                <h3 className="text-white font-semibold">Parvez Islam</h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Creating elegant digital solutions with modern technology and clean design.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {links.navigation.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 3 }}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((service) => (
                <li key={service}>
                  <motion.a
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ x: 3 }}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {links.connect.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ x: 3 }}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 mb-12"
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            Ready to start your project?
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Let's work together to create something amazing.
          </p>
          <motion.a
            href="mailto:parvezislam45@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm font-medium"
          >
            <span>Get In Touch</span>
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Parvez Islam. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <motion.a
                href="#privacy"
                whileHover={{ color: "#3B82F6" }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ color: "#3B82F6" }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simple Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default PremiumFooter;