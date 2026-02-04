import React from "react";
import { motion } from "framer-motion";
import { SHARED_STYLES } from "../constants/styles";

const PageContainer = ({ children, centerContent = false }) => {
  const styles = {
    container: {
      marginLeft: SHARED_STYLES.contentMargin,
      minHeight: "100vh",
      padding: SHARED_STYLES.contentPadding,
      backgroundColor: "#ffffff",
      ...(centerContent && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
    },
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;
