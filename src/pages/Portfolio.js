import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      path: "/lychee-or-not",
      image: "/images/lychee.jpeg",
      hoverImage: "/images/lychee-hover.jpeg", // placeholder - replace with actual image
      title: "lychee or not",
      date: "January 2024",
    },
    {
      id: 2,
      path: "/spinal-fracture",
      image: "/images/spinal.png",
      hoverImage: "/images/spinal-hover.png", // placeholder - replace with actual image
      title: "spinal fracture",
      date: "November 2023",
    },
    {
      id: 3,
      path: "/unwanted-things",
      image: "/images/unwanted.png",
      hoverImage: "/images/unwanted-hover.png", // placeholder - replace with actual image
      title: "the gallery of unwanted things",
      date: "September 2023",
    },
    {
      id: 4,
      path: "/spoiled",
      image: "/images/spoiled.jpg",
      hoverImage: "/images/spoiled-hover.jpg", // placeholder - replace with actual image
      title: "spoiled",
      date: "June 2023",
    },
    {
      id: 5,
      path: "/third-space",
      image: "/images/third.png",
      hoverImage: "/images/third-hover.png", // placeholder - replace with actual image
      title: "the 3rd space",
      date: "March 2023",
    },
  ];

  const styles = {
    container: {
      marginLeft: "320px",
      height: "100vh",
      backgroundColor: "#ffffff",
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
    .horizontal-scroll::-webkit-scrollbar {
      height: 6px;
    }
    .horizontal-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .horizontal-scroll::-webkit-scrollbar-thumb {
      background: #e5e5e5;
      border-radius: 3px;
    }
    .horizontal-scroll::-webkit-scrollbar-thumb:hover {
      background: #d0d0d0;
    }
  `;

  return (
    <>
      <style>{scrollbarStyle}</style>
      <div style={styles.container}>
        <div style={styles.scrollContainer} className="horizontal-scroll">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(project.path)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={styles.imageWrapper}>
                {/* Default image */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.image}
                />
                {/* Hover image - fades in slowly */}
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

export default Portfolio;
