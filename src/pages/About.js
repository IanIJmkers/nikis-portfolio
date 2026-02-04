import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const styles = {
    container: {
      marginLeft: "500px",
      minHeight: "100vh",
      padding: "200px 60px",
      backgroundColor: "#fff",
    },
    content: {
      maxWidth: "600px",
      width: "100%",
    },
    greeting: {
      fontSize: "16px",
      fontWeight: 400,
      marginBottom: "30px",
      lineHeight: 1.6,
      color: "#000",
    },
    paragraph: {
      fontSize: "14px",
      lineHeight: 1.8,
      color: "#333",
      marginBottom: "20px",
      fontWeight: 300,
    },
    signatureContainer: {
      marginTop: "50px",
      marginBottom: "40px",
    },
    signature: {
      fontSize: "64px",
      fontFamily: "Brush Script MT, cursive",
      color: "#000",
      marginBottom: "5px",
      fontWeight: 400,
    },
    name: {
      fontSize: "10px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#000",
      fontWeight: 400,
    },
    sincerely: {
      fontSize: "14px",
      color: "#333",
      fontWeight: 300,
      marginTop: "30px",
    },
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.content}>
        <p style={styles.greeting}>Welcome to Niki Agency.</p>
        <p style={styles.paragraph}>
          Our photography is our strength. Representation is at each of our
          unique clients through our experience in advertising, branded content,
          and editorial. Active creative strategy and innovative digital
          expertise. We partner with our clients to achieve their goals. We
          believe that at the heart of every brand, there is a truth that the
          world should see and we want to help you tell your story.
        </p>
        <div style={styles.signatureContainer}>
          <div style={styles.signature}>Niki</div>
          <div style={styles.name}>NIKI</div>
        </div>
        <p style={styles.sincerely}>Sincerely,</p>
      </div>
    </motion.div>
  );
};

export default About;
