import { motion } from "framer-motion";

const AboutSection = () => {
  const styles = {
    section: {
      height: "100vh",
      width: "100%",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      maxWidth: "600px",
      padding: "0 60px",
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
    <section id="about" style={styles.section}>
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
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
      </motion.div>
    </section>
  );
};

export default AboutSection;
