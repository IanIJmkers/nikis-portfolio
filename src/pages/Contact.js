import React from "react";
import PageContainer from "../components/PageContainer";

const Contact = () => {
  const styles = {
    content: {
      maxWidth: "600px",
    },
    title: {
      fontSize: "48px",
      fontWeight: 300,
      marginBottom: "30px",
      letterSpacing: "1px",
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
    },
  };

  return (
    <PageContainer centerContent>
      <div style={styles.content}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.text}>Available for commissions, collaborations, and editorial work.</p>
        <p style={styles.text}>Based in New York, working worldwide.</p>
        <a href="mailto:hello@nikikalmar.com" style={styles.email}>
          hello@nikikalmar.com
        </a>
      </div>
    </PageContainer>
  );
};

export default Contact;
