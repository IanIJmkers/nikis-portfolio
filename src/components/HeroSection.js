import { motion } from "framer-motion";
import { col } from "framer-motion/client";

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
      fontSize: "16px",
      fontWeight: 300,
      color: "#fff",
      cursor: "pointer",
      letterSpacing: "0.5px",
      transition: "opacity 0.3s ease",
    },
    navCenter: {
      fontSize: "54px",
      marginTop: "14px",
      fontFamily: '"Gloved", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "#fff",
      letterSpacing: "6px",
    },
    titleContainer: {
      position: "absolute",
      bottom: "60px",
      right: "60px",
      zIndex: 10,
      textAlign: "right",
    },
    title: {
      fontFamily: '"Lunette", sans-serif',
      fontSize: "180px",
      fontWeight: 699,
      color: "rgb(233, 229, 160)",
      margin: 0,
      textTransform: "uppercase",
      lineHeight: 1,
      letterSpacing: "5px",
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
        src="/images/globes.png"
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
          Where strategy
          <br />
          becomes design.
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
