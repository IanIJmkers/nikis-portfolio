import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      padding: "60px 60px 40px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #eee",
      marginTop: "120px",
    },
    copyright: {
      fontSize: "10px",
      letterSpacing: "1px",
      color: "#999",
      textTransform: "uppercase",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.copyright}>© 2025 All rights reserved</div>
      <div style={styles.links}>
        <a href="#" style={styles.link}>
          Instagram
        </a>
        <a href="#" style={styles.link}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
