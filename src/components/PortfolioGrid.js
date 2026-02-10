import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, getProjectsExcluding } from "../data/projects";

const PortfolioGrid = ({
  size = "normal",
  excludeId = null,
  centered = false,
}) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  const displayProjects = excludeId
    ? getProjectsExcluding(excludeId)
    : projects;

  const isSmall = size === "small";

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: centered ? "center" : "flex-start",
      overflow: "hidden",
      height: isSmall ? "auto" : "100%",
    },
    scrollContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: centered ? "center" : "flex-start",
      gap: isSmall ? "8px" : "10px",
      overflowX: centered ? "visible" : "auto",
      overflowY: "hidden",
      padding: isSmall ? "40px 60px" : "40px 60px",
      height: isSmall ? "auto" : "100%",
      scrollBehavior: "smooth",
      flexWrap: centered ? "wrap" : "nowrap",
    },
    card: {
      flexShrink: 0,
      cursor: "pointer",
    },
    imageWrapper: {
      width: isSmall ? "320px" : "540px",
      height: isSmall ? "420px" : "700px",
      overflow: "hidden",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    },
    title: {
      marginTop: isSmall ? "8px" : "12px",
      fontSize: isSmall ? "11px" : "12px",
      fontWeight: 400,
      color: "#000",
    },
    date: {
      marginTop: "4px",
      fontSize: isSmall ? "10px" : "12px",
      color: "#888",
    },
  };

  const scrollbarStyle = `
    .portfolio-grid-scroll::-webkit-scrollbar {
      height: 6px;
    }
    .portfolio-grid-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .portfolio-grid-scroll::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 3px;
    }
    .portfolio-grid-scroll::-webkit-scrollbar-thumb:hover {
      background: #fff;
    }
  `;

  return (
    <>
      <style>{scrollbarStyle}</style>
      <div style={styles.container}>
        <div style={styles.scrollContainer} className="portfolio-grid-scroll">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/project/${project.slug}`)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.image}
                />
                <motion.img
                  src={project.hoverImage}
                  alt={`${project.title} hover`}
                  style={styles.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </div>
              <div style={styles.title}>{project.title}</div>
              <div style={styles.date}>{project.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioGrid;
