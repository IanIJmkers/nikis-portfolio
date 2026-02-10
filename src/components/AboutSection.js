import { motion } from "framer-motion";

const AboutSection = () => {
  const styles = {
    section: {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#fff",
      display: "flex",
    },
    imageContainer: {
      width: "50%",
      minHeight: "50vh",
      overflow: "hidden",
    },
    image: {
      width: "70%",
      height: "80%",
      objectFit: "cover",
    },
    content: {
      width: "50%",
      padding: "80px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      fontSize: "32px",
      fontWeight: 400,
      marginBottom: "50px",
      color: "#000",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    textColumns: {
      display: "flex",
      gap: "40px",
    },
    column: {
      flex: 1,
    },
    paragraph: {
      fontSize: "14px",
      lineHeight: 1.8,
      color: "#444",
      marginBottom: "20px",
      fontWeight: 300,
    },
  };

  return (
    <section id="about" style={styles.section}>
      {/* Left Image */}
      <div style={styles.imageContainer}>
        <motion.img
          src="/images/niki.jpg"
          alt="Niki"
          style={styles.image}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Right Content */}
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2 style={styles.title}>About Nikoletta Kalmar</h2>

        <div style={styles.textColumns}>
          <div style={styles.column}>
            <p style={styles.paragraph}>
              As a transformative designer, I'm acutely aware of the
              environmental and socio-economic challenges that we need to own up
              to as creatives. I believe deeply in taking responsibility about
              how we produce and who produces our work.
            </p>
            <p style={styles.paragraph}>
              "Sustainability" as a term has been used and misused so frequently
              over the past decade, that claiming you're sustainable, isn't
              specific enough.
            </p>
          </div>
          <div style={styles.column}>
            <p style={styles.paragraph}>
              As a result, I would like to describe how NIKOLETTA KALMAR as a
              brand owns up to our environmental responsibilities.
            </p>
            <p style={styles.paragraph}>
              I currently work with clients across Denmark, the Netherlands, and
              globally. Two key areas that I'm especially focused on: strategic
              design thinking and sustainable brand development.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
