import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    hero: {
      height: "100vh",
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#000",
      overflow: "hidden",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.7,
    },
    topNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 60px",
      position: "relative",
      zIndex: 10,
    },
    navItem: {
      fontSize: "12px",
      fontWeight: 300,
      color: "#fff",
      cursor: "pointer",
      letterSpacing: "0.5px",
      transition: "opacity 0.3s ease",
    },
    navCenter: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#fff",
      letterSpacing: "0.5px",
    },
    titleContainer: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 10,
    },
    title: {
      fontSize: "120px",
      fontWeight: 300,
      color: "#fff",
      letterSpacing: "8px",
      textTransform: "lowercase",
      margin: 0,
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    },
    scrollText: {
      fontSize: "10px",
      color: "#fff",
      letterSpacing: "2px",
      textTransform: "uppercase",
      opacity: 0.6,
    },
    scrollLine: {
      width: "1px",
      height: "40px",
      backgroundColor: "#fff",
      opacity: 0.4,
    },
  };

  return (
    <section style={styles.hero}>
      {/* Background image */}
      <img
        src="/images/lychee.jpeg"
        alt="Hero background"
        style={styles.backgroundImage}
      />

      {/* Top navigation row */}
      <div style={styles.topNav}>
        <motion.span
          style={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("portfolio")}
        >
          Portfolio
        </motion.span>
        <span style={styles.navCenter}>Nikoletta Kalmar</span>
        <motion.span
          style={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("about")}
        >
          About
        </motion.span>
      </div>

      {/* Centered title */}
      <div style={styles.titleContainer}>
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          Niki
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span style={styles.scrollText}>Scroll</span>
        <motion.div
          style={styles.scrollLine}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
