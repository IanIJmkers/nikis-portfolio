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
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 60px",
      zIndex: 1000,
      boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
      pointerEvents: visible ? "auto" : "none",
    },
    navItem: {
      fontSize: "16px",
      fontWeight: 300,
      color: "#000",
      cursor: "pointer",
      letterSpacing: "0.5px",
      transition: "opacity 0.3s ease",
    },
    navCenter: {
      fontSize: "24px",
      fontFamily: '"Gloved", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "#000",
      letterSpacing: "0.5px",
      cursor: "pointer",
    },
  };

  return (
    <motion.nav
      style={styles.nav}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.span
        style={styles.navItem}
        whileHover={{ opacity: 0.5 }}
        onClick={() => scrollTo("portfolio")}
      >
        Portfolio
      </motion.span>
      <motion.span
        style={styles.navCenter}
        whileHover={{ opacity: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Nikoletta Kalmar
      </motion.span>
      <motion.span
        style={styles.navItem}
        whileHover={{ opacity: 0.5 }}
        onClick={() => scrollTo("about")}
      >
        About
      </motion.span>
    </motion.nav>
  );
};

export default StickyNav;
