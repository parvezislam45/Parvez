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
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isHovering
          ? 'py-3 shadow-2xl border-b'
          : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled || isHovering ? '#0A0A0F' : 'transparent',
        borderColor: scrolled || isHovering ? 'rgba(168,85,247,0.15)' : 'transparent'
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Glow - Solid Purple */}
      <motion.div 
        animate={{
          opacity: scrolled ? 0.2 : 0.05,
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.08), transparent 70%)'
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center gap-3">
              <div>
                <motion.h1 
                  className="text-xl font-bold head"
                  style={{ color: '#FFFFFF' }}
                >
                  Parvez
                </motion.h1>
                <motion.p 
                  className="text-[8px] text-white tracking-wider uppercase text"
                >
                  Full Stack Developer
                </motion.p>
              </div>
              
              {/* Decorative Line */}
              <div className="hidden md:block w-px h-8" style={{ backgroundColor: 'rgba(168,85,247,0.2)' }} />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-2xl" style={{
            backgroundColor: 'rgba(26,26,46,0.5)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl nav cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {/* Active Background */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: 'rgba(168,85,247,0.15)' }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className="relative z-10">
                  {item.label}
                </span>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: (hoveredItem === item.id || activeSection === item.id) ? 1 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30
                  }}
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 rounded-full origin-center"
                  style={{ backgroundColor: '#A855F7' }}
                />
                
                {/* Active Pulse Effect */}
                {activeSection === item.id && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 rounded-full blur-sm"
                    style={{ backgroundColor: '#A855F7' }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button with Animation */}
          <motion.div className="hidden md:block">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(168,85,247,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 text-white font-medium rounded-xl transition-all duration-300 text-sm relative overflow-hidden"
              style={{ backgroundColor: '#A855F7' }}
            >
              {/* Button Shine Effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  transform: 'skewX(-20deg)'
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2 nav">
                <span>Open For Work</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl z-50 relative"
            style={{
              backgroundColor: 'rgba(26,26,46,0.5)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              animate={isOpen ? 
                { rotate: 45, y: 5, width: 18 } : 
                { rotate: 0, y: 0, width: 16 }
              }
              className="h-0.5 block rounded-full transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <motion.span
              animate={isOpen ? 
                { opacity: 0, x: -10 } : 
                { opacity: 1, x: 0 }
              }
              className="h-0.5 w-5 block rounded-full my-1.5 transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <motion.span
              animate={isOpen ? 
                { rotate: -45, y: -5, width: 18 } : 
                { rotate: 0, y: 0, width: 12 }
              }
              className="h-0.5 block rounded-full transition-all duration-300"
              style={{ backgroundColor: '#FFFFFF' }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="lg:hidden absolute top-full left-4 right-4 mt-3 rounded-2xl shadow-2xl overflow-hidden"
              style={{
                backgroundColor: '#1A1A2E',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div className="p-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-between ${
                      activeSection === item.id 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? 'rgba(168,85,247,0.1)' : 'transparent'
                    }}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#A855F7' }}
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="w-full px-4 py-3 text-white font-medium rounded-xl mt-2 text-sm relative overflow-hidden"
                  style={{ backgroundColor: '#A855F7' }}
                >
                  {/* Mobile Button Shine */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                      transform: 'skewX(-20deg)'
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Hire Me</span>
                    <span>→</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
    </motion.nav>
  );
};

export default Navbar;