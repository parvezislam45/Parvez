'use client'
import Banner from "@/Components/Banner";
import Blog from "@/Components/Blog";
import PremiumContact from "@/Components/Contact";
import Experience from "@/Components/Experience";
import PremiumFooter from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Project from "@/Components/Project";
import Services from "@/Components/Services";
import Testimonial from "@/Components/Testimonial";
import Timeline from "@/Components/Timeline";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const whatsappNumber = "+8801683338523";
  
  // Define the pre-filled message
  const preFilledMessage = "Hi! I'd like to get in touch with you regarding your services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preFilledMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Timeline/>
      <Experience/>
      <Project/>
      <Services/>
      <Testimonial/>
      {/* <Blog/> */}
      <PremiumContact/>
      <PremiumFooter/>
      <div className="fixed bottom-24 right-6 z-50 group">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 relative"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </button>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </div>
    </div>
  );
}