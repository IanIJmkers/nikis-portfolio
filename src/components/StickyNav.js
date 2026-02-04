import { motion } from "framer-motion";

const StickyNav = ({ visible }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "60px",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 60px",
      zIndex: 1000,
      boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
      pointerEvents: visible ? "auto" : "none",
    },
    logo: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#000",
      letterSpacing: "0.3px",
      cursor: "pointer",
    },
    links: {
      display: "flex",
      gap: "40px",
    },
    link: {
      fontSize: "12px",
      fontWeight: 300,
      color: "#000",
      cursor: "pointer",
      letterSpacing: "0.5px",
      transition: "opacity 0.3s ease",
    },
  };

  return (
    <motion.nav
      style={styles.nav}
      initial={{ opacity: 0, y: -60 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -60,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.span
        style={styles.logo}
        whileHover={{ opacity: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Nikoletta Kalmar
      </motion.span>
      <div style={styles.links}>
        <motion.span
          style={styles.link}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("portfolio")}
        >
          Portfolio
        </motion.span>
        <motion.span
          style={styles.link}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("about")}
        >
          About
        </motion.span>
        <motion.span
          style={styles.link}
          whileHover={{ opacity: 0.5 }}
          onClick={() => scrollTo("contact")}
        >
          Contact
        </motion.span>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
