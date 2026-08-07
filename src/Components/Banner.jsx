"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaStackOverflow,
  FaInstagram,
  FaRocket,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

const Banner = () => {
  const socialLinks = [
  { 
    icon: <FaStackOverflow className="text-2xl text-[#F48024]" />, 
    href: "https://stackoverflow.com/users/19056041/parvez-islam",
    app: "stackoverflow://", 
    color: "hover:text-[#F48024]",
    name: "Stack Overflow"
  },
  { 
    icon: <FaGithub className="text-2xl text-[#9b9797]" />, 
    href: "https://github.com/parvezislam45",
    app: "github://", 
    color: "hover:text-black",
    name: "GitHub"
  },
  { 
    icon: <FaInstagram className="text-2xl text-[#E4405F]" />, 
    href: "https://www.instagram.com/aurthohinparvez/",
    app: "instagram://user?username=aurthohinparvez", 
    color: "hover:text-[#E4405F]",
    name: "Instagram"
  },
  { 
    icon: <FaLinkedin className="text-2xl text-[#0077B5]" />, 
    href: "https://www.linkedin.com/in/noor-hossain-parvez/",
    app: "linkedin://profile", 
    color: "hover:text-[#0077B5]",
    name: "LinkedIn"
  },
  { 
    icon: <FaFacebook className="text-2xl text-[#1877F2]" />, 
    href: "https://www.facebook.com/parvez.islam.512480/",
    app: "fb://profile/", 
    color: "hover:text-[#1877F2]",
    name: "Facebook"
  },
  { 
    icon: <FaWhatsapp className="text-2xl text-[#25D366]" />, 
    href: "https://wa.me/8801683338523",
    app: "whatsapp://send?phone=8801683338523", 
    color: "hover:text-[#25D366]",
    name: "WhatsApp"
  }
];


  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-[80vh] bg-[#0A0A0F] relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 bg-[#0A0A0F]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-400 font-mono text-sm border border-purple-400/50 px-4 py-2 rounded-full bg-purple-400/10">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-amber-500 to-orange-500 bg-clip-text text-transparent head">
                Parvez Islam
              </h1>
            </motion.div>
            <motion.div className="relative" variants={textVariants}>
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-300 text">
                Full Stack Web Developer
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-300 leading-relaxed max-w-lg font-bold text"
            >
              Building modern web applications with Python, Django, Node.js,
              Express.js, Next.js & React.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {[
                "Python",
                "Django",
                "Node.js",
                "Express.js",
                "Next.js",
                "React",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm font-bold text"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold flex items-center gap-2 nav text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                View Portfolio
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500/10 transition-colors nav text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 pt-6"
            >
              <span className="text-gray-400 text-sm text">Follow me:</span>
              <div className="flex gap-5">
  {socialLinks.map((social, index) => (
    <motion.a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ${social.color}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 + index * 0.1 }}
      onClick={() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile && social.app) {
          window.location.href = social.app; 
        }
      }}
    >
      {social.icon}
    </motion.a>
  ))}
</div>

            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-96 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  className="w-full h-full"
                  src="Images/my.png"
                  alt=""
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMaskComposite: "xor",
                    padding: "2px",
                  }}
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl px-3 py-2 shadow-lg"
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-black text-sm font-bold text">3+ Years</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl px-3 py-2 shadow-lg text"
                animate={{
                  y: [8, -8, 8],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white text-sm font-bold">
                  20+ Projects
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
