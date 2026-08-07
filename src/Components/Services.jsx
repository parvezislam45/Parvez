'use client'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Next.js Development",
      description: "Building high-performance, SEO-optimized applications with server-side rendering and modern React patterns.",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Full-Stack Solutions",
      description: "End-to-end development from frontend to backend using React, Node.js, and Python frameworks.",
      icon: "🔗",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "API Development",
      description: "Creating robust RESTful APIs and GraphQL endpoints with Node.js, Express, and Django.",
      icon: "⚙️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Cloud Deployment",
      description: "Deploying and managing applications on Hoistinger,C-Panel, AWS, Vercel, and other cloud platforms with CI/CD pipelines.",
      icon: "☁️",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden bg-black" id="services">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
         <div
            className="text-center mb-16 relative"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white nav">
              Professional Services
            </h1>
            <div className="w-3 h-3 rounded-full ml-4 animate-pulse" style={{ backgroundColor: "#10B981" }} />
          </div>
          <p className="text-gray-200 text-sm max-w-4xl mx-auto mb-8 text">
                Transforming Your Vision Into High-Performance Digital Solutions with Cutting-Edge Technologies
              </p>
        </div>
            </div>
          </div>
        {/* Redesigned Header */}
        <div className="mb-20 text-center">
          <div className="flex flex-wrap justify-center gap-8 mt-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-white nav">20+</div>
              <div className="text-sm text-gray-200 text">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white nav">100%</div>
              <div className="text-sm text-gray-200 text">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white nav">24/7</div>
              <div className="text-sm text-gray-200 text">Support Available</div>
            </div>
          </div>
        </div>

        {/* Services - Circular Design */}
        <div className="relative">
          {/* Central Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-purple-500/30 animate-spin-slow"></div>
            </div>
          </div>

          {/* Service Cards - Circular Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative ${index === 0 || index === 2 ? 'md:mt-0' : 'md:mt-24'}`}
              >
                {/* Card */}
                <div className="relative group">
                  {/* Background Glow */}
                  <div 
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                    style={{ background: service.gradient }}
                  ></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Icon Circle */}
                    <div className="relative mb-8">
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                        style={{ background: service.gradient }}
                      >
                        {service.icon}
                      </div>
                      {/* Ring Animation */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 animate-ping-slow"></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 blog">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-200 mb-6 text text-sm">
                      {service.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.title.includes("Next.js") && (
                        <>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30">React</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-300 border border-blue-700/30">TypeScript</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">SSR/SSG</span>
                        </>
                      )}
                      {service.title.includes("Full-Stack") && (
                        <>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-900/30 text-pink-300 border border-pink-700/30">Node.js</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-300 border border-green-700/30">Python</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">Django</span>
                        </>
                      )}
                      {service.title.includes("API") && (
                        <>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-700/30">Rest Api</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-700/30">Flask</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">Express.js</span>
                        </>
                      )}
                      {service.title.includes("Cloud") && (
                        <>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-700/30">Hoistinger</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-300 border border-blue-700/30">Vercel</span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">C-Panel</span>
                        </>
                      )}
                    </div>
                    
                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Connection Line (for circular layout) */}
                  {index < services.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 w-12 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-white nav">
                Additional Capabilities
              </span>
            </h2>
            <p className="text-gray-200 blog">Comprehensive digital solutions beyond core services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Database Design", icon: "🗃️", desc: "SQL & NoSQL database architecture" },
              { title: "Performance Optimization", icon: "⚡", desc: "Speed and efficiency improvements" },
              { title: "Technical Consulting", icon: "🎯", desc: "Architecture and strategy guidance" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-xl p-6 text-center group hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-white mb-2 head">{item.title}</h3>
                <p className="text-gray-200 text-xs text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;