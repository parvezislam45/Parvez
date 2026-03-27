'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FiGithub, FiExternalLink,FiCode, FiZap, FiUsers, FiGlobe,} from 'react-icons/fi';
import { FaHospital,} from 'react-icons/fa';
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
    { id: 'all', name: 'All', icon: '✨', color: 'from-purple-500 to-pink-500', count: 16 },
    { id: 'fullstack', name: 'Full Stack', icon: '🚀', color: 'from-orange-500 to-red-500', count: 6 },
    { id: 'nextjs', name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-900', count: 4 },
    { id: 'react', name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500', count: 3 },
    { id: 'nodejs', name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-400', count: 2 },
    { id: 'django', name: 'Django', icon: '🐍', color: 'from-green-500 to-emerald-500', count: 4 },
  ];

  // Project thumbnails
  const projectThumbnails = {
    1: 'Images/restureant.png',
    2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    3: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    4: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop',
    5: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop',
    6: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop',
    7: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
    8: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop',
    9: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
    10: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    11: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=800&auto=format&fit=crop',
    12: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop',
    13: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    14: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800&auto=format&fit=crop',
    15: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    16: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop',
  };

  const getProjectIcon = (project) => {
    if (project.title.includes('Restaurant')) return <MdRestaurant className="text-4xl text-pink-500" />;
    if (project.title.includes('Inventory')) return <MdInventory className="text-4xl text-blue-500" />;
    if (project.title.includes('E-Commerce')) return <MdStore className="text-4xl text-orange-500" />;
    if (project.title.includes('Stock')) return <MdTrendingUp className="text-4xl text-green-500" />;
    if (project.title.includes('Visa')) return <MdOutlineVisa className="text-4xl text-indigo-500" />;
    if (project.title.includes('De Tower')) return <TbBuildingSkyscraper className="text-4xl text-cyan-500" />;
    if (project.title.includes('Bank')) return <BsBank className="text-4xl text-emerald-500" />;
    if (project.title.includes('Social')) return <BsChatDots className="text-4xl text-purple-500" />;
    if (project.title.includes('Hospital')) return <FaHospital className="text-4xl text-red-500" />;
    if (project.title.includes('Games')) return <MdGames className="text-4xl text-yellow-500" />;
    return <FiCode className="text-4xl text-gray-400" />;
  };

  const allProjects = [
    {
      id: 1,
      title: "Online Restaurant Management System",
      shortDescription: "Complete food ordering, payment, and table reservation platform",
      description: `A sophisticated restaurant management system featuring real-time food ordering, secure payment processing, and intelligent table reservations. Users can browse menus, customize orders, and make payments through multiple gateways including Stripe. The system includes admin dashboards for inventory management, order tracking, and customer analytics. Real-time notifications keep customers updated on order status, while restaurant owners benefit from comprehensive reporting tools.`,
      fullDescription: `
🎯 **Key Features:**

**Food Discovery & Ordering:**
- Advanced search with filters (category, price, dietary preferences)
- Detailed food descriptions with high-quality images and ingredients
- Customizable orders with special instructions
- Real-time menu updates and availability checks

**Smart Cart System:**
- Dynamic cart with quantity adjustments
- Auto-calculated totals including taxes and fees
- Save cart for later functionality
- Cross-device cart synchronization

**Secure Payment Gateway:**
- Multiple payment methods (Credit/Debit Cards, PayPal, Mobile Wallets)
- One-click checkout for returning customers
- Encrypted payment processing
- Instant payment confirmation

**Table Reservation System:**
- Real-time table availability checking
- Reservation scheduling with preferences
- Automated confirmation emails
- Cancellation and modification options

**Admin Dashboard:**
- Complete inventory management
- Order tracking and status updates
- Customer relationship management
- Sales analytics and reporting
- Staff management and role assignments

**Customer Experience:**
- Order history and tracking
- Favorite restaurants and dishes
- Review and rating system
- Loyalty points and rewards`,
      category: "nextjs",
      technologies: ["Next.js 14","Type-Script","Tailwind CSS"],
      liveUrl: "https://foodorder-kw5q.vercel.app/",
      githubUrl: "https://github.com/parvezislam45/foodorder",
      featured: true,
      status: "Live",
      completion: "100%",
      gradient: "from-purple-500 to-pink-500",
      icon: <MdRestaurant />
    },
    {
      id: 2,
      title: "Inventory Management System",
      shortDescription: "Advanced inventory control with multi-role access management",
      description: `Enterprise-grade inventory management solution designed for businesses with complex supply chains. Features role-based access control, real-time stock tracking, automated reordering, and comprehensive reporting. Supports multiple warehouses, batch tracking, and integrates with major e-commerce platforms.`,
      fullDescription: `
🎯 **Key Features:**

**Role-Based Access Control:**
- Admin: Full system control
- Manager: Department-level access
- Staff: Limited operational access
- Auditor: Read-only access

**Inventory Management:**
- Real-time stock level monitoring
- Batch and expiry date tracking
- Multi-location warehouse support
- Automated stock adjustments

**Order Processing:**
- Purchase order generation
- Supplier management
- Delivery scheduling
- Quality control checks

**Reporting & Analytics:**
- Stock movement reports
- Profit margin analysis
- Supplier performance
- Inventory turnover rates

**Integration Capabilities:**
- E-commerce platform integration
- Accounting software sync
- Barcode/RFID support
- Mobile app for field staff

**Advanced Features:**
- Demand forecasting
- Safety stock calculation
- Serial number tracking
- Custom alert system`,
      category: "fullstack",
      technologies: ["Next.js", "Django", "DBSqlite"],
      liveUrl: "http://mollahmart.top/",
      githubUrl: "#",
      featured: true,
      status: "Beta",
      completion: "85%",
      gradient: "from-cyan-500 to-blue-500",
      stats: { items: "50K+", users: "500+", accuracy: "99.5%" },
      icon: <MdInventory />
    },
    {
      id: 3,
      title: "Multi-Vendor E-Commerce Platform",
      shortDescription: "Complete marketplace for multiple sellers and buyers",
      description: `A comprehensive e-commerce marketplace that enables multiple vendors to sell products through a unified platform. Features include vendor dashboards, commission management, product management, order processing, and customer relationship tools. Supports digital and physical products with integrated shipping solutions.`,
      fullDescription: `
🎯 **Key Features:**

**Vendor Management:**
- Vendor registration and verification
- Custom storefront creation
- Product catalog management
- Sales analytics dashboard

**Product Management:**
- Unlimited product listings
- Variable products (size, color, etc.)
- Digital product downloads
- Inventory synchronization

**Order Processing:**
- Multi-vendor cart system
- Split payments to vendors
- Order tracking and status
- Automated commission calculation

**Customer Experience:**
- Advanced search and filters
- Product reviews and ratings
- Wishlist and compare features
- Personalized recommendations

**Payment System:**
- Multiple payment gateways
- Escrow services for disputes
- Payout management for vendors
- Refund and return processing

**Admin Features:**
- Commission rate management
- Dispute resolution system
- Platform analytics
- Vendor performance monitoring`,
      category: "django",
      technologies: ["Django", "PostgreSQL", "Celery", "Redis", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live",
      completion: "100%",
      gradient: "from-green-500 to-emerald-500",
      stats: { vendors: "250+", products: "10K+", sales: "$1M+" },
      icon: <MdStore />
    },
    {
      id: 4,
      title: "Wizard Stock Exchange",
      shortDescription: "Real-time stock trading platform with live market data",
      description: `A sophisticated stock trading simulation platform featuring real-time market data, virtual trading, portfolio management, and educational resources. Users can practice trading with virtual currency, learn market analysis, and track performance with advanced analytics.`,
      fullDescription: `
🎯 **Key Features:**

**Real-Time Trading:**
- Live stock prices with WebSocket
- Virtual currency trading
- Limit and market orders
- Portfolio simulation

**Market Data:**
- Real-time quotes and charts
- Historical data analysis
- Company financials
- News and sentiment analysis

**Learning Resources:**
- Trading tutorials
- Market analysis tools
- Risk management guides
- Investment strategies

**Portfolio Management:**
- Performance tracking
- Risk assessment
- Diversification analysis
- Historical comparison

**Social Features:**
- Leaderboard rankings
- Share strategies
- Community discussions
- Expert insights

**Admin Tools:**
- Market simulation control
- User activity monitoring
- Content management
- Analytics dashboard`,
      category: "fullstack",
      technologies: ["Django", "React", "WebSocket", "Chart.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Production",
      completion: "100%",
      gradient: "from-orange-500 to-red-500",
      stats: { users: "10K+", trades: "500K+", accuracy: "85%" },
      icon: <MdTrendingUp />
    },
    {
      id: 5,
      title: "Visa Management System",
      shortDescription: "Complete visa application processing platform",
      description: `Streamlined visa application system that automates the entire process from application submission to approval. Features include document management, status tracking, payment processing, and communication tools for applicants and immigration officers.`,
      fullDescription: `
🎯 **Key Features:**

**Application Management:**
- Online form submission
- Document upload and verification
- Application status tracking
- Automated notifications

**Document Processing:**
- OCR for document reading
- Document validation rules
- Secure document storage
- Version control

**Payment Integration:**
- Multiple payment methods
- Receipt generation
- Refund processing
- Payment status tracking

**Communication System:**
- Secure messaging platform
- Email and SMS notifications
- Appointment scheduling
- Interview coordination

**Analytics & Reporting:**
- Application statistics
- Processing time analysis
- Success rate tracking
- Compliance reporting

**Admin Dashboard:**
- Case assignment
- Priority management
- Team collaboration
- Performance metrics`,
      category: "react",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live",
      completion: "100%",
      gradient: "from-indigo-500 to-purple-500",
      stats: { applications: "5K+", countries: "100+", success: "100%" },
      
    },
    {
      id: 6,
      title: "De Tower - Building Management",
      shortDescription: "Comprehensive building and tenant management system",
      description: `Advanced property management software for residential and commercial buildings. Features include tenant management, maintenance tracking, billing automation, facility booking, and security management.`,
      fullDescription: `
🎯 **Key Features:**

**Tenant Management:**
- Tenant profiles and history
- Lease agreement management
- Move-in/move-out tracking
- Communication portal

**Financial Management:**
- Automated rent collection
- Utility bill management
- Expense tracking
- Financial reporting

**Maintenance System:**
- Maintenance request portal
- Work order management
- Vendor coordination
- Preventive scheduling

**Facility Management:**
- Common area booking
- Amenity access control
- Parking space management
- Security system integration

**Communication Tools:**
- Announcement system
- Community forum
- Direct messaging
- Emergency alerts

**Reporting & Analytics:**
- Occupancy rates
- Revenue analysis
- Maintenance costs
- Tenant satisfaction`,
      category: "fullstack",
      technologies: ["Next.js", "PHP", "MySQL", "Firebase", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "90%",
      gradient: "from-blue-500 to-cyan-500",
      stats: { buildings: "25+", tenants: "1K+", efficiency: "60%" },
      icon: <TbBuildingSkyscraper />
    },
    {
      id: 7,
      title: "Redux Todo Application",
      shortDescription: "Modern task management with Redux state management",
      description: `A clean, efficient todo application demonstrating modern React Redux patterns. Features include task categorization, priority settings, due dates, and productivity analytics.`,
      fullDescription: `
🎯 **Key Features:**

**Task Management:**
- Create, edit, delete tasks
- Task categorization and tagging
- Priority levels (High, Medium, Low)
- Due date and reminders

**Productivity Features:**
- Daily/weekly goals
- Progress tracking
- Time estimation
- Pomodoro timer integration

**Organization:**
- Project-based organization
- Subtask management
- Task dependencies
- Archive and restore

**Collaboration:**
- Share task lists
- Comment on tasks
- Activity history
- Real-time updates

**Analytics:**
- Completion statistics
- Time spent analysis
- Productivity trends
- Goal achievement rates

**User Experience:**
- Dark/light mode
- Keyboard shortcuts
- Drag and drop
- Mobile responsive`,
      category: "react",
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/parvezislam45/Redux-Todo-App",
      featured: true,
      status: "Live",
      completion: "100%",
      gradient: "from-cyan-500 to-blue-500",
      stats: { tasks: "Unlimited", users: "5K+", rating: "4.7/5" },
      icon: <FiCode />
    },
    {
      id: 8,
      title: "Job Portal Management API",
      shortDescription: "RESTful API for comprehensive job portal system",
      description: `Backend API for a full-featured job portal with user authentication, job listings, applications, and employer management. Built with Node.js and MongoDB following RESTful principles.`,
      fullDescription: `
🎯 **Key Features:**

**Job Seeker Features:**
- Profile creation and management
- Job search and filtering
- Application tracking
- Resume builder

**Employer Features:**
- Company profile management
- Job posting creation
- Application management
- Candidate search

**Job Management:**
- Advanced search algorithms
- Job recommendations
- Application status tracking
- Interview scheduling

**Authentication & Security:**
- JWT-based authentication
- Role-based access control
- Email verification
- Password reset

**Notification System:**
- Email notifications
- Real-time alerts
- Application updates
- Deadline reminders

**Analytics:**
- Application statistics
- Job performance metrics
- User engagement tracking
- Platform usage analytics`,
      category: "nodejs",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
      liveUrl: "#",
      githubUrl: "https://github.com/parvezislam45/job-portal-management-system-api",
      featured: true,
      status: "Live",
      completion: "95%",
      gradient: "from-orange-500 to-red-500",
      stats: { jobs: "10K+", companies: "500+", hires: "2K+" },
      icon: <FiUsers />
    },
    {
      id: 9,
      title: "Tour Management API",
      shortDescription: "Backend API for tour and travel management",
      description: `Complete API for managing tour packages, bookings, payments, and customer relationships in the travel industry. Features include itinerary planning, pricing, availability management, and reporting.`,
      fullDescription: `
🎯 **Key Features:**

**Tour Management:**
- Package creation and management
- Itinerary planning
- Pricing and discounts
- Availability tracking

**Booking System:**
- Online booking engine
- Payment processing
- Confirmation management
- Cancellation policy

**Customer Management:**
- Customer profiles
- Booking history
- Preference tracking
- Communication logs

**Payment Processing:**
- Multiple payment gateways
- Refund management
- Commission tracking
- Financial reporting

**Reporting & Analytics:**
- Booking statistics
- Revenue analysis
- Customer demographics
- Peak season planning

**Integration:**
- Hotel API integration
- Flight booking APIs
- Transportation services
- Guide management`,
      category: "nodejs",
      technologies: ["Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "https://github.com/parvezislam45/mongoose-tour-management-api",
      featured: false,
      status: "Live",
      completion: "100%",
      gradient: "from-purple-500 to-indigo-500",
      stats: { tours: "500+", bookings: "10K+", revenue: "$500K+" },
      icon: <FiGlobe />
    },
    {
      id: 10,
      title: "Gear & Gadget Mania",
      shortDescription: "E-commerce platform for electronics and gadgets",
      description: `Specialized e-commerce platform for electronics, gadgets, and tech accessories. Features include product reviews, comparison tools, technical specifications, and expert buying guides.`,
      fullDescription: `
🎯 **Key Features:**

**Product Catalog:**
- Detailed product specifications
- High-quality images and videos
- Technical comparison tools
- Expert reviews and ratings

**Shopping Experience:**
- Advanced search and filters
- Price comparison
- Stock availability alerts
- Bundle deals and offers

**Customer Support:**
- Live chat support
- Technical assistance
- Installation guides
- Warranty information

**Content Management:**
- Buying guides
- How-to articles
- Video tutorials
- Product demonstrations

**Analytics:**
- Sales performance
- Customer behavior
- Inventory turnover
- Market trends

**Mobile App:**
- Native mobile experience
- Push notifications
- Mobile payments
- Offline browsing`,
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      gradient: "from-cyan-500 to-blue-500",
      stats: { products: "5K+", customers: "50K+", rating: "4.6/5" },
      icon: <MdStore />
    },
    {
      id: 11,
      title: "Bank Management System",
      shortDescription: "Complete banking operations management platform",
      description: `Comprehensive banking system for managing customer accounts, transactions, loans, and financial services. Features secure authentication, transaction processing, and regulatory compliance tools.`,
      fullDescription: `
🎯 **Key Features:**

**Account Management:**
- Account creation and closure
- Balance inquiries
- Transaction history
- Statement generation

**Transaction Processing:**
- Fund transfers
- Bill payments
- Check processing
- Wire transfers

**Loan Management:**
- Loan application processing
- Credit scoring
- Approval workflow
- Payment scheduling

**Security Features:**
- Two-factor authentication
- Fraud detection
- Transaction monitoring
- Audit logging

**Customer Service:**
- Online banking portal
- Mobile banking
- Customer support
- Financial planning

**Admin Dashboard:**
- User management
- Transaction monitoring
- Report generation
- System configuration`,
      category: "django",
      technologies: ["Django", "PostgreSQL", "Celery", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/parvezislam45/banking_website",
      featured: true,
      status: "Live",
      completion: "100%",
      gradient: "from-emerald-500 to-green-500",
      stats: { accounts: "50K+", transactions: "1M+", security: "99.9%" },
      icon: <BsBank />
    },
    {
      id: 12,
      title: "Social Media Web Application",
      shortDescription: "Modern social networking platform",
      description: `Feature-rich social media platform with real-time messaging, content sharing, communities, and engagement tools. Built with modern web technologies for seamless user experience.`,
      fullDescription: `
🎯 **Key Features:**

**User Profiles:**
- Customizable profiles
- Media galleries
- Friend networks
- Activity feeds

**Content Sharing:**
- Text posts with formatting
- Photo and video uploads
- Live streaming
- Story features

**Communication:**
- Real-time messaging
- Group chats
- Video calls
- Comment system

**Community Features:**
- Groups and communities
- Events and invitations
- Polls and surveys
- Marketplace

**Content Discovery:**
- Algorithmic feed
- Trending topics
- Hashtag system
- Content recommendations

**Moderation:**
- Content filtering
- User reporting
- Automated moderation
- Admin dashboard`,
      category: "fullstack",
      technologies: ["Next.js", "Django", "WebSocket", "Redis", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Development",
      completion: "60%",
      gradient: "from-purple-500 to-pink-500",
      stats: { users: "10K+", posts: "100K+", engagement: "85%" },
      icon: <BsChatDots />
    },
    {
      id: 13,
      title: "Hospital Management App",
      shortDescription: "Healthcare management and patient care platform",
      description: `Comprehensive hospital management system integrating patient care, appointment scheduling, medical records, and administrative functions. Features telemedicine capabilities and electronic health records.`,
      fullDescription: `
🎯 **Key Features:**

**Patient Management:**
- Patient registration
- Medical history
- Appointment scheduling
- Treatment plans

**Clinical Management:**
- Electronic health records
- Prescription management
- Lab test ordering
- Medical imaging

**Appointment System:**
- Online booking
- Doctor availability
- Reminder system
- Telemedicine integration

**Administrative Features:**
- Billing and insurance
- Inventory management
- Staff scheduling
- Facility management

**Telemedicine:**
- Video consultations
- Remote monitoring
- E-prescriptions
- Digital reports

**Analytics:**
- Patient statistics
- Treatment outcomes
- Resource utilization
- Performance metrics`,
      category: "nextjs",
      technologies: ["Next.js", "Django", "WebRTC", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Development",
      completion: "60%",
      gradient: "from-red-500 to-orange-500",
      stats: { patients: "5K+", doctors: "200+", appointments: "50K+" },
      icon: <FaHospital />
    },
    {
      id: 14,
      title: "Metro Solver",
      shortDescription: "Public transportation route optimization",
      description: `Intelligent transportation system for optimizing metro routes, schedules, and passenger flow. Features real-time tracking, fare calculation, and journey planning.`,
      fullDescription: `
🎯 **Key Features:**

**Route Planning:**
- Optimal route calculation
- Real-time schedule
- Transfer suggestions
- Journey time estimation

**Real-time Information:**
- Live train locations
- Arrival predictions
- Service disruptions
- Crowd levels

**Ticketing System:**
- Digital ticketing
- Fare calculation
- Payment integration
- Ticket validation

**Passenger Information:**
- Station maps
- Platform information
- Accessibility features
- Service announcements

**Analytics:**
- Passenger flow analysis
- Peak hour prediction
- Service optimization
- Revenue analysis

**Admin Dashboard:**
- Schedule management
- Fleet monitoring
- Revenue tracking
- Maintenance scheduling`,
      category: "nextjs",
      technologies: ["Next.js", "TypeScript", "Mapbox", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Development",
      completion: "60%",
      gradient: "from-blue-500 to-indigo-500",
      stats: { stations: "100+", routes: "50+", users: "100K+" },
      icon: <FiGlobe />
    },
    {
      id: 15,
      title: "Patient Management",
      shortDescription: "Healthcare patient relationship management",
      description: `Specialized CRM for healthcare providers to manage patient relationships, appointments, communications, and follow-ups. Integrates with existing healthcare systems.`,
      fullDescription: `
🎯 **Key Features:**

**Patient Database:**
- Complete patient profiles
- Contact information
- Medical history
- Insurance details

**Communication Management:**
- Appointment reminders
- Follow-up scheduling
- Broadcast messaging
- Email templates

**Appointment System:**
- Calendar integration
- Resource scheduling
- Waitlist management
- Cancellation handling

**Document Management:**
- Consent forms
- Medical documents
- Prescription templates
- Report generation

**Analytics:**
- Patient engagement
- Appointment statistics
- Revenue tracking
- Service utilization

**Integration:**
- EHR system integration
- Payment gateways
- Lab systems
- Pharmacy systems`,
      category: "nextjs",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      gradient: "from-teal-500 to-cyan-500",
      stats: { patients: "20K+", appointments: "100K+", efficiency: "75%" },
      icon: <FiUsers />
    },
    {
      id: 16,
      title: "Online Play Games",
      shortDescription: "Multiplayer online gaming platform",
      description: `Interactive gaming platform featuring multiple game types, real-time multiplayer capabilities, user profiles, and competitive leaderboards.`,
      fullDescription: `
🎯 **Key Features:**

**Game Library:**
- Multiple game categories
- Single and multiplayer
- Skill-based games
- Casual games

**Multiplayer System:**
- Real-time gameplay
- Matchmaking system
- Tournament support
- Team play

**User Features:**
- Player profiles
- Skill ratings
- Achievement system
- Friend lists

**Social Features:**
- In-game chat
- Voice communication
- Community forums
- Content sharing

**Monetization:**
- In-game purchases
- Premium features
- Advertisement system
- Subscription plans

**Admin Features:**
- Game management
- User moderation
- Analytics dashboard
- Content updates`,
      category: "react",
      technologies: ["React", "WebSocket", "Node.js", "MongoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Live",
      completion: "100%",
      gradient: "from-yellow-500 to-orange-500",
      stats: { games: "50+", players: "100K+", rating: "4.5/5" },
      icon: <MdGames />
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  // Modal Component
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-700/50 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-10 p-6 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm border-b border-gray-700/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  {getProjectIcon(project)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-300' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300' :
                      project.status === 'Development' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
              >
                <span className="text-2xl text-gray-400 hover:text-white">×</span>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6">
            {/* Project Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img
                src={projectThumbnails[project.id]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Short Description */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Full Description */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Detailed Features</h4>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-300 bg-gray-800/30 p-4 rounded-xl">
                  {project.fullDescription}
                </pre>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg text-gray-300 border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-gray-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-700/50">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <FiExternalLink />
                View Live Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-800/50 text-gray-300 py-3 rounded-xl font-semibold border border-gray-700/50 hover:border-gray-600 hover:text-white transition-all duration-300"
              >
                <FiGithub />
                View Source Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Three.js Background
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

    // Create floating geometries
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(1, 0)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.1,
        specular: 0xffffff,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x6366f1, 
        transparent: true, 
        opacity: 0.08,
        specular: 0xffffff,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xec4899, 
        transparent: true, 
        opacity: 0.06,
        specular: 0xffffff,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x06b6d4, 
        transparent: true, 
        opacity: 0.07,
        specular: 0xffffff,
        shininess: 100
      })
    ];

    const objects = [];
    const objectCount = 15;

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

        // Boundary check with bounce
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
    <section id="projects" className="min-h-screen py-20 bg-[#1d1515] relative overflow-hidden">
      {/* Animated Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      Project
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent ml-4">
                      Portfolio
                    </span>
                  </h2>
                  <p className="text-xl text-gray-400">
                    {allProjects.length} Innovative Solutions • {filteredProjects.length} Showing
                  </p>
                </div>
              </div>
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div 
              className="inline-flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 mb-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <FiCode />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'detailed' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <FiZap />
                Detailed View
              </button>
            </motion.div>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-5 py-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-3 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                    : 'bg-gray-900/30 backdrop-blur-sm text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-black/30">
                  {category.count}
                </span>
                
                {/* Hover glow effect */}
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300"></div>
                )}
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
              className={`grid ${viewMode === 'detailed' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-[500px]"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-sm rounded-3xl border border-gray-700/30 group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl"></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <motion.img
                      src={projectThumbnails[project.id]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {/* Project Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="p-2 bg-black/50 backdrop-blur-sm rounded-xl">
                        {project.icon}
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                        project.status === 'Development' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                        'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="relative p-6 h-[calc(400px-12rem)] flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Short Description */}
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm rounded-lg text-xs text-gray-300 border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm rounded-lg text-xs text-gray-400 border border-gray-700/50">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-gray-300">Progress</span>
                        <span className="font-semibold text-white">{project.completion}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: project.completion }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${project.gradient}`}
                        ></motion.div>
                      </div>
                    </div>
                    {/* Action Buttons - Side by Side Separate Buttons */}
<div className="flex gap-2">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={(e) => {
      e.stopPropagation();
      setSelectedProject(project);
    }}
    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
  >
    View Details
  </motion.button>
  
  {/* External Link Button */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center justify-center px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-xl font-semibold text-sm border border-gray-700/50 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300"
    title="Open Live Site"
  >
    <RiExternalLinkLine />
  </motion.a>
  
  {/* GitHub Button */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center justify-center px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-xl font-semibold text-sm border border-gray-700/50 hover:border-gray-600 hover:text-white transition-all duration-300"
    title="View Source Code"
  >
    <FiGithub />
  </motion.a>
</div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-purple-500/50 rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-pink-500/50 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500/50 rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/50 rounded-br-3xl"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center"
              >
                <div className="text-6xl">🔍</div>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-300 mb-4">No Projects Found</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                We couldn't find any projects matching your selected category.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory('all')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
          
          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div>
                <div className="text-3xl font-bold text-white">{allProjects.length}</div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {allProjects.filter(p => p.status === 'Live').length}
                </div>
                <div className="text-sm text-gray-400">Live Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {allProjects.filter(p => p.featured).length}
                </div>
                <div className="text-sm text-gray-400">Featured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
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