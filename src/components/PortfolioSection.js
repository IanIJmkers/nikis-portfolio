import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectView from "./ProjectView";

const projects = [
  {
    id: 1,
    title: "lychee or not",
    date: "January 2024",
    image: "/images/lychee.jpeg",
    hoverImage: "/images/lychee-hover.jpeg",
    subtitle: "A botanical exploration / 2024",
    gallery: [
      { id: 1, bg: "#e8e8e8" },
      { id: 2, bg: "#d4d4d4" },
      { id: 3, bg: "#c8c8c8" },
      { id: 4, bg: "#e0e0e0" },
    ],
  },
  {
    id: 2,
    title: "spinal fracture",
    date: "November 2023",
    image: "/images/spinal.png",
    hoverImage: "/images/spinal-hover.png",
    subtitle: "Medical photography / 2023",
    gallery: [
      { id: 1, bg: "#e8e8e8" },
      { id: 2, bg: "#d4d4d4" },
      { id: 3, bg: "#c8c8c8" },
    ],
  },
  {
    id: 3,
    title: "the gallery of unwanted things",
    date: "September 2023",
    image: "/images/unwanted.png",
    hoverImage: "/images/unwanted-hover.png",
    subtitle: "Conceptual series / 2023",
    gallery: [
      { id: 1, bg: "#e8e8e8" },
      { id: 2, bg: "#d4d4d4" },
      { id: 3, bg: "#c8c8c8" },
      { id: 4, bg: "#e0e0e0" },
      { id: 5, bg: "#d8d8d8" },
    ],
  },
  {
    id: 4,
    title: "spoiled",
    date: "June 2023",
    image: "/images/spoiled.jpg",
    hoverImage: "/images/spoiled-hover.jpg",
    subtitle: "Fashion editorial / 2023",
    gallery: [
      { id: 1, bg: "#e8e8e8" },
      { id: 2, bg: "#d4d4d4" },
      { id: 3, bg: "#c8c8c8" },
    ],
  },
  {
    id: 5,
    title: "the 3rd space",
    date: "March 2023",
    image: "/images/third.png",
    hoverImage: "/images/third-hover.png",
    subtitle: "Architectural study / 2023",
    gallery: [
      { id: 1, bg: "#e8e8e8" },
      { id: 2, bg: "#d4d4d4" },
      { id: 3, bg: "#c8c8c8" },
      { id: 4, bg: "#e0e0e0" },
    ],
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const styles = {
    section: {
      height: "100vh",
      width: "100%",
      backgroundColor: "#ffffff",
      overflow: "hidden",
      position: "relative",
    },
    container: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    scrollContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      overflowX: "auto",
      overflowY: "hidden",
      padding: "40px 60px",
      height: "100%",
      scrollBehavior: "smooth",
    },
    card: {
      flexShrink: 0,
      cursor: "pointer",
    },
    imageWrapper: {
      width: "540px",
      height: "700px",
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
      marginTop: "12px",
      fontSize: "12px",
      fontWeight: 400,
      color: "#000",
    },
    date: {
      marginTop: "4px",
      fontSize: "12px",
      color: "#888",
    },
  };

  const scrollbarStyle = `
    .portfolio-scroll::-webkit-scrollbar {
      height: 6px;
    }
    .portfolio-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .portfolio-scroll::-webkit-scrollbar-thumb {
      background: #e5e5e5;
      border-radius: 3px;
    }
    .portfolio-scroll::-webkit-scrollbar-thumb:hover {
      background: #d0d0d0;
    }
  `;

  return (
    <section id="portfolio" style={styles.section}>
      <style>{scrollbarStyle}</style>
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectView
            key="project-view"
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <motion.div
            key="portfolio-grid"
            style={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={styles.scrollContainer} className="portfolio-scroll">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  style={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
