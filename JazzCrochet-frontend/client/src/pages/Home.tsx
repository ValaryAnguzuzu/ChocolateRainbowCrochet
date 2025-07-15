import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import BlogSection from "../components/sections/BlogSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import VideosSection from "../components/sections/VideosSection";
import ContactSection from "../components/sections/ContactSection";
import ScrollingText from "../components/sections/ScrollingText";

function Home() {
  return (
    <>
      <HeroSection />
      <ScrollingText />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <VideosSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default Home;
