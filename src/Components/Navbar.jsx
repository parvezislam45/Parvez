'use client'
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'clients', label: 'Clients' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled || isHovering
          ? 'bg-gradient-to-b from-gray-900/98 to-gray-900/95 backdrop-blur-2xl py-3 shadow-2xl border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Animated Background Glow */}
      <motion.div 
        animate={{
          opacity: scrolled ? 0.2 : 0.1,
          scale: scrolled ? 1 : 0.98
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative bg-[#1d1515]">
        <div className="flex justify-between items-center">
          {/* Premium Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                  boxShadow: scrolled 
                    ? '0 0 30px rgba(139, 92, 246, 0.3)' 
                    : '0 0 20px rgba(139, 92, 246, 0.15)'
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 0.5 }
                }}
                className="w-20 h-20"
              >
                
                <img src="https://i.postimg.cc/zfrm8yjn/Logo-removebg-preview.png" alt="" />
              </motion.div>
              
              {/* Pulsing dot */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-gray-900 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation with Animated Underlines */}
          <div className="hidden lg:flex items-center space-x-1 bg-[#1d1515] backdrop-blur-2xl rounded-2xl px-4 py-2 shadow-2xl">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-6 py-3 font-semibold transition-all duration-500 rounded-xl overflow-hidden group nav cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Animated background */}
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: activeSection === item.id ? 1 : 0,
                    scale: activeSection === item.id ? 1 : 0.8
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-xl"
                />
                
                {/* Text with gradient */}
                <span className="relative z-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
                  {item.label}
                </span>
                
                {/* Animated Underline - Hover Effect */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: (hoveredItem === item.id || activeSection === item.id) ? 1 : 0,
                    opacity: (hoveredItem === item.id || activeSection === item.id) ? 1 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30,
                    duration: 0.3 
                  }}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full origin-center"
                />
                
                {/* Active Section Pulse Effect */}
                {activeSection === item.id && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-[2px]"
                  />
                )}

                {/* Hover background effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl"
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div className="hidden md:block">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-400/20 relative overflow-hidden group"
            >
              {/* Animated background */}
              <motion.div
                initial={false}
                animate={{ 
                  background: [
                    'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                    'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                    'linear-gradient(45deg, #8B5CF6, #3B82F6)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0"
              />
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>

              {/* Hover underline effect */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-white/50 rounded-full origin-center"
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden flex flex-col items-center justify-center w-12 h-12 z-50 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg relative overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              animate={isOpen ? 
                { rotate: 45, y: 6, width: 24 } : 
                { rotate: 0, y: 0, width: 20 }
              }
              className="h-0.5 bg-white block rounded-full transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? 
                { opacity: 0, x: -10 } : 
                { opacity: 1, x: 0 }
              }
              className="h-0.5 w-16 bg-white block rounded-full mt-1.5 transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? 
                { rotate: -45, y: -6, width: 24 } : 
                { rotate: 0, y: 0, width: 16 }
              }
              className="h-0.5 bg-white block rounded-full mt-1.5 transition-all duration-300"
            />
          </motion.button>
        </div>

        {/* Premium Mobile Menu with Animated Underlines */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
            >
              {/* Menu background pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>
              
              <div className="p-4 space-y-2 relative">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-6 py-4 rounded-2xl font-medium transition-all duration-500 flex items-center justify-between group relative overflow-hidden ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Background effect */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: activeSection === item.id ? 1 : 0
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl"
                    />
                    
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Mobile Animated Underline */}
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ 
                        scaleX: activeSection === item.id ? 1 : 0,
                        opacity: activeSection === item.id ? 1 : 0
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 30 
                      }}
                      className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full origin-left"
                    />

                    {/* Hover background effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl"
                    />
                  </motion.button>
                ))}
                
                {/* Mobile CTA with Underline */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl mt-4 flex items-center justify-center space-x-3 relative overflow-hidden group"
                >
                  <motion.div
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                        'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                        'linear-gradient(45deg, #8B5CF6, #3B82F6)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0"
                  />
                  <span className="relative z-10">Get In Touch</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    →
                  </motion.span>

                  {/* CTA Underline */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-white/50 rounded-full origin-center"
                  />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;