import React from "react";
import { motion } from "framer-motion";

const ProjectGallery = ({ title, subtitle, images }) => {
  const styles = {
    container: {
      marginLeft: "320px",
      height: "100vh",
      position: "relative",
      overflow: "hidden",
    },
    header: {
      position: "absolute",
      top: "40px",
      left: "60px",
      zIndex: 10,
    },
    title: {
      fontSize: "28px",
      fontWeight: 300,
      marginBottom: "8px",
      letterSpacing: "0.5px",
    },
    subtitle: {
      fontSize: "13px",
      color: "#999",
      fontWeight: 300,
    },
    scrollContainer: {
      display: "flex",
      alignItems: "flex-start",
      height: "100%",
      overflowX: "auto",
      overflowY: "hidden",
      padding: "0 60px",
      scrollBehavior: "smooth",
      paddingTop: "140px",
    },
    imageContainer: {
      position: "relative",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      color: "#999",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
  };

  const scrollbarStyle = `
    .horizontal-scroll::-webkit-scrollbar {
      height: 8px;
    }
    .horizontal-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .horizontal-scroll::-webkit-scrollbar-thumb {
      background: #ddd;
      border-radius: 4px;
    }
    .horizontal-scroll::-webkit-scrollbar-thumb:hover {
      background: #bbb;
    }
  `;

  return (
    <>
      <style>{scrollbarStyle}</style>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={styles.header}>
          <h1 style={styles.title}>{title}</h1>
          <div style={styles.subtitle}>{subtitle}</div>
        </div>

        <div style={styles.scrollContainer} className="horizontal-scroll">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              style={{
                ...styles.imageContainer,
                background: img.bg,
                width: img.width,
                height: img.height,
                marginTop: img.top,
                marginRight: img.gap,
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 0.98 }}
            >
              Image {img.id}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectGallery;
