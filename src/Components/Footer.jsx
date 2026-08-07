'use client'
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { 
  FaStackOverflow, 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaWhatsapp 
} from 'react-icons/fa';

const PremiumFooter = () => {
  const canvasRef = useRef(null);
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    { 
      icon: <FaStackOverflow className="text-xl" />, 
      href: "https://stackoverflow.com/users/19056041/parvez-islam",
      color: "#F48024",
      name: "Stack Overflow"
    },
    { 
      icon: <FaGithub className="text-xl" />, 
      href: "https://github.com/parvezislam45",
      color: "#FFFFFF",
      name: "GitHub"
    },
    { 
      icon: <FaInstagram className="text-xl" />, 
      href: "https://www.instagram.com/aurthohinparvez/",
      color: "#E4405F",
      name: "Instagram"
    },
    { 
      icon: <FaLinkedin className="text-xl" />, 
      href: "https://www.linkedin.com/in/noor-hossain-parvez/",
      color: "#0077B5",
      name: "LinkedIn"
    },
    { 
      icon: <FaFacebook className="text-xl" />, 
      href: "https://www.facebook.com/parvez.islam.512480/",
      color: "#1877F2",
      name: "Facebook"
    },
    { 
      icon: <FaWhatsapp className="text-xl" />, 
      href: "https://wa.me/8801683338523",
      color: "#25D366",
      name: "WhatsApp"
    }
  ];

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

    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.8, 16, 16),
      new THREE.ConeGeometry(0.7, 1.5, 8),
      new THREE.OctahedronGeometry(0.9, 0)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0xA855F7, 
        transparent: true, 
        opacity: 0.08,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.08,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x7C3AED, 
        transparent: true, 
        opacity: 0.08,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x6D28D9, 
        transparent: true, 
        opacity: 0.08,
        wireframe: true 
      })
    ];

    const meshes = [];
    geometries.forEach((geometry, index) => {
      const material = materials[index];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 12;
      mesh.position.y = (Math.random() - 0.5) * 6 - 2;
      mesh.position.z = (Math.random() - 0.5) * 6;
      
      scene.add(mesh);
      meshes.push({
        mesh,
        speed: 0.2 + Math.random() * 0.3
      });
    });

    camera.position.z = 10;

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
    navigation: ['Home', 'About', 'Projects', 'Contact'],
    services: ['Web Development', 'Full Stack', 'UI/UX Design', 'Consulting'],
    resources: ['Blog', 'Portfolio', 'Testimonials', 'FAQ']
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#0A0A0F' }}>
      {/* Subtle 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(168,85,247,0.03), transparent 50%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 80% 70%, rgba(168,85,247,0.03), transparent 50%)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 nav rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#A855F7' }}>
                PI
              </div>
              <div>
                <h3 className="text-white font-semibold text-md head">Parvez Islam</h3>
                <p className="text-gray-300 text-sm text">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed mb-4 max-w-xs text">
              Creating elegant digital solutions with modern technology and clean design.
            </p>
            
            {/* Social Links - Only icons, no text */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(26,26,46,0.6)',
                    borderColor: 'rgba(255,255,255,0.05)',
                    color: '#9CA3AF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${social.color}20`;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(26,26,46,0.6)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#9CA3AF';
                  }}
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
            <h4 className="text-white font-semibold text-sm mb-3 head">Navigation</h4>
            <ul className="space-y-2">
              {links.navigation.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 3, color: '#A855F7' }}
                    className="text-gray-300 hover:text-purple-400 text-xs transition-colors duration-300 text"
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
            <h4 className="text-white font-semibold text-sm mb-3 head">Services</h4>
            <ul className="space-y-2">
              {links.services.map((service) => (
                <li key={service}>
                  <motion.a
                    href={`#${service.toLowerCase().replace(/ /g, '-')}`}
                    whileHover={{ x: 3, color: '#A855F7' }}
                    className="text-gray-300 hover:text-purple-400 text-xs transition-colors duration-300 text"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources - New Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-sm mb-3 head">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((resource) => (
                <li key={resource}>
                  <motion.a
                    href={`#${resource.toLowerCase()}`}
                    whileHover={{ x: 3, color: '#A855F7' }}
                    className="text-gray-300 hover:text-purple-400 text-xs transition-colors duration-300 text"
                  >
                    {resource}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-4 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-gray-200 text-xs head">
              © {currentYear} Parvez Islam. All rights reserved.
            </div>
            <div className="flex gap-4 text-xs">
              <motion.a
                href="#privacy"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-200 hover:text-purple-400 transition-colors duration-300 content"
              >
                Privacy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-200 hover:text-purple-400 transition-colors duration-300 content"
              >
                Terms
              </motion.a>
              <motion.a
                href="#sitemap"
                whileHover={{ color: '#A855F7' }}
                className="text-gray-200 hover:text-purple-400 transition-colors duration-300 content"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              backgroundColor: '#A855F7',
              opacity: 0.2,
              left: `${10 + i * 15}%`,
              bottom: `${5 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
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
    </footer>
  );
};

export default PremiumFooter;