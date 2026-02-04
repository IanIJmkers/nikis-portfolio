import { motion } from "framer-motion";

const ContactSection = () => {
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
      textAlign: "center",
    },
    title: {
      fontSize: "48px",
      fontWeight: 300,
      marginBottom: "30px",
      letterSpacing: "1px",
      color: "#000",
    },
    text: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#666",
      marginBottom: "15px",
    },
    email: {
      fontSize: "18px",
      color: "#000",
      textDecoration: "none",
      borderBottom: "1px solid #000",
      display: "inline-block",
      marginTop: "20px",
      transition: "opacity 0.3s ease",
    },
    footer: {
      marginTop: "80px",
      fontSize: "10px",
      color: "#999",
      letterSpacing: "1px",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.text}>
          Available for commissions, collaborations, and editorial work.
        </p>
        <p style={styles.text}>Based in New York, working worldwide.</p>
        <motion.a
          href="mailto:hello@nikikalmar.com"
          style={styles.email}
          whileHover={{ opacity: 0.5 }}
        >
          hello@nikikalmar.com
        </motion.a>
        <div style={styles.footer}>
          © {new Date().getFullYear()} Nikoletta Kalmar. All rights reserved.
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
