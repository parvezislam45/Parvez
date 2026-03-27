'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const blogPosts = [
    {
      id: 1,
      title: "Next.js 14 App Router Deep Dive",
      excerpt: "Master the new App Router with advanced patterns and best practices",
      category: "Next.js",
      readTime: "8 min",
      date: "Apr 10",
      views: "2.4k",
      likes: "128",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "TypeScript Advanced Patterns",
      excerpt: "Conditional types, generics, and utility types explained",
      category: "TypeScript",
      readTime: "6 min",
      date: "Apr 8",
      views: "1.8k",
      likes: "94",
      color: "from-purple-500 to-pink-500"
    },
    
    {
      id: 4,
      title: "Python Django REST Framework",
      excerpt: "Building robust APIs with authentication and permissions",
      category: "Python",
      readTime: "7 min",
      date: "Apr 4",
      views: "1.2k",
      likes: "65",
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 5,
      title: "Node.js Microservices Architecture",
      excerpt: "Design patterns for scalable microservices",
      category: "Node.js",
      readTime: "9 min",
      date: "Apr 2",
      views: "1.1k",
      likes: "58",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 7,
      title: "Tailwind CSS Advanced Techniques",
      excerpt: "Custom configurations and design system patterns",
      category: "CSS",
      readTime: "4 min",
      date: "Mar 28",
      views: "850",
      likes: "47",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "WebSocket Real-time Applications",
      excerpt: "Building real-time features with Socket.io",
      category: "Real-time",
      readTime: "6 min",
      date: "Mar 26",
      views: "720",
      likes: "41",
      color: "from-indigo-500 to-blue-500"
    },
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeFilter);

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        </div>
        
        {/* Gradient Spots */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-gray-900 to-black border border-gray-800 mb-8">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm font-medium text-gray-300 tracking-widest">TECH BLOG</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 nav">DEVELOPER
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mt-2 mx-5">
              INSIGHTS
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Concise technical articles, tutorials, and best practices for modern web development
          </p>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${post.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 h-full group-hover:border-gray-700 transition-all duration-300">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${post.color}`}></div>
                        <span className="text-xs font-medium text-gray-300">{post.category}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-100 transition-all duration-300">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;