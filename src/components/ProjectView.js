import { motion } from "framer-motion";

const ProjectView = ({ project, onBack }) => {
  const styles = {
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "40px 60px 20px",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    title: {
      fontSize: "32px",
      fontWeight: 300,
      color: "#000",
      margin: 0,
    },
    subtitle: {
      fontSize: "14px",
      fontWeight: 300,
      color: "#666",
    },
    backButton: {
      fontSize: "12px",
      fontWeight: 300,
      color: "#000",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 0",
    },
    arrow: {
      fontSize: "16px",
    },
    galleryContainer: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    gallery: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "20px",
      overflowX: "auto",
      overflowY: "hidden",
      padding: "20px 60px 40px",
      height: "100%",
      scrollBehavior: "smooth",
    },
    imageCard: {
      flexShrink: 0,
      width: "400px",
      height: "520px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      color: "#999",
    },
  };

  const scrollbarStyle = `
    .project-gallery::-webkit-scrollbar {
      height: 6px;
    }
    .project-gallery::-webkit-scrollbar-track {
      background: transparent;
    }
    .project-gallery::-webkit-scrollbar-thumb {
      background: #e5e5e5;
      border-radius: 3px;
    }
    .project-gallery::-webkit-scrollbar-thumb:hover {
      background: #d0d0d0;
    }
  `;

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <style>{scrollbarStyle}</style>

      {/* Header with title and back button */}
      <div style={styles.header}>
        <div style={styles.titleContainer}>
          <h2 style={styles.title}>{project.title}</h2>
          <span style={styles.subtitle}>{project.subtitle}</span>
        </div>
        <motion.div
          style={styles.backButton}
          whileHover={{ opacity: 0.5 }}
          onClick={onBack}
        >
          <span style={styles.arrow}>←</span>
          <span>Back to Portfolio</span>
        </motion.div>
      </div>

      {/* Gallery */}
      <div style={styles.galleryContainer}>
        <div style={styles.gallery} className="project-gallery">
          {project.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              style={{
                ...styles.imageCard,
                backgroundColor: item.bg,
              }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              Image {index + 1}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectView;
