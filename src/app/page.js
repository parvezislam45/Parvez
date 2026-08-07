
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



export default function Home() {
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
    </div>
  );
}
