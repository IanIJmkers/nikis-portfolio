import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import StickyNav from "../components/StickyNav";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const SinglePage = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past 80% of viewport height
      setShowNav(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    main: {
      width: "100%",
      overflowX: "hidden",
    },
  };

  return (
    <div style={styles.main}>
      <StickyNav visible={showNav} />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default SinglePage;
