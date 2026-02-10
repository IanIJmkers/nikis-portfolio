import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioSection = () => {
  const styles = {
    section: {
      height: "100vh",
      width: "100%",
      backgroundColor: "#ffffff",
      overflow: "hidden",
      position: "relative",
    },
  };

  return (
    <section id="portfolio" style={styles.section}>
      <motion.div
        style={{ height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PortfolioGrid size="normal" />
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
