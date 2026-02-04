import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const styles = {
    container: {
      marginLeft: "320px",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px",
      position: "relative",
    },
    imagesWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "1400px",
      height: "700px",
    },
    imageContainer: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "11px",
      color: "#999",
      letterSpacing: "1px",
    },
  };

  const images = [
    { id: 1, left: "0", top: "50px", width: "580px", height: "650px", bg: "#e8e8e8", delay: 0 },
    { id: 2, right: "80px", top: "150px", width: "420px", height: "480px", bg: "#d5d5d5", delay: 0.15 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.imagesWrapper}>
        {images.map((img) => (
          <motion.div
            key={img.id}
            style={{
              ...styles.imageContainer,
              background: img.bg,
              width: img.width,
              height: img.height,
              left: img.left,
              right: img.right,
              top: img.top,
            }}
            initial={{ opacity: 0, x: img.id === 1 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: img.delay }}
            whileHover={{ scale: 0.98 }}
          >
            Image {img.id}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
