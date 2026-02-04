import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const portfolioItems = [
    { path: "/lychee-or-not", label: "lychee or not" },
    { path: "/spinal-fracture", label: "spinal fracture" },
    {
      path: "/the-gallery-of-unwanted-things",
      label: "the gallery of unwanted things",
    },
    { path: "/spoiled", label: "spoiled" },
    { path: "/the-3rd-space", label: "the 3rd space" },
    { path: "/rodeo", label: "american rodeo" },
  ];

  // Check if current path is portfolio or any portfolio item
  const isPortfolioPath = () => {
    return (
      location.pathname === "/portfolio" ||
      portfolioItems.some((item) => item.path === location.pathname)
    );
  };

  // Auto-open/close portfolio based on current path
  useEffect(() => {
    setIsPortfolioOpen(isPortfolioPath());
  }, [location.pathname]);

  const styles = {
    sidebar: {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "320px",
      padding: "120px 60px 20px 100px",
      display: "flex",
      flexDirection: "column",
      zIndex: 100,
      background: "transparent",
    },
    logo: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#000",
      textDecoration: "none",
      marginBottom: "60px",
      letterSpacing: "0.3px",
    },
    navList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    navItem: {
      marginBottom: "12px",
    },
    link: {
      fontSize: "12px",
      color: "#000",
      textDecoration: "none",
      fontWeight: 300,
      display: "block",
      transition: "opacity 0.2s ease",
    },
    activeLink: {
      fontWeight: 400,
      color: "#4CAF50", // Green color for active state
    },
    portfolioHeader: {
      fontSize: "12px",
      color: "#000",
      fontWeight: 300,
      marginBottom: "12px",
      cursor: "pointer",
      transition: "opacity 0.2s ease",
    },
    subList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      paddingLeft: "0px",
      marginBottom: "20px",
    },
    footer: {
      marginTop: "auto",
      paddingTop: "40px",
    },
    copyright: {
      fontSize: "8px",
      color: "#666",
      lineHeight: 1.6,
    },
  };

  const isActive = (path) => location.pathname === path;

  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  return (
    <div style={styles.sidebar}>
      <Link to="/" style={styles.logo}>
        Nikoletta Kalmar
      </Link>

      <ul style={styles.navList}>
        {/* About */}
        <li style={styles.navItem}>
          <Link
            to="/about"
            style={{
              ...styles.link,
              ...(isActive("/about") && styles.activeLink),
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            about
          </Link>
        </li>

        {/* Portfolio Section */}
        <li>
          <div
            style={{
              ...styles.portfolioHeader,
              ...(isPortfolioPath() && styles.activeLink),
            }}
            onClick={handlePortfolioClick}
            onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            portfolio
          </div>

          {isPortfolioOpen && (
            <ul style={styles.subList}>
              {portfolioItems.map((item) => (
                <li key={item.path} style={styles.navItem}>
                  <Link
                    to={item.path}
                    style={{
                      ...styles.link,
                      ...(isActive(item.path) && styles.activeLink),
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Contact */}
        <li style={styles.navItem}>
          <Link
            to="/contact"
            style={{
              ...styles.link,
              ...(isActive("/contact") && styles.activeLink),
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.5")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            contact
          </Link>
        </li>
      </ul>

      <div style={styles.footer}>
        <div style={styles.copyright}>Copyright © All rights reserved.</div>
      </div>
    </div>
  );
};

export default Navigation;
