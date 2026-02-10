import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import PortfolioGrid from "../components/PortfolioGrid";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div style={styles.notFound}>
        <p>Project not found</p>
        <button onClick={() => navigate("/")} style={styles.backButton}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Nav Header */}
      <nav style={styles.nav}>
        <motion.span
          style={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/")}
        >
          Portfolio
        </motion.span>
        <motion.span
          style={styles.navCenter}
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/")}
        >
          Nikoletta Kalmar
        </motion.span>
        <motion.span
          style={styles.navItem}
          whileHover={{ opacity: 0.5 }}
          onClick={() => navigate("/#about")}
        >
          About
        </motion.span>
      </nav>

      {/* Centered Content Wrapper */}
      <div style={styles.contentWrapper}>
        {/* Project Info */}
        <div style={styles.projectInfo}>
          <h1 style={styles.title}>{project.title}</h1>
          <p style={styles.subtitle}>{project.subtitle}</p>
        </div>

        {/* Vertical Image Gallery */}
        <div style={styles.gallery}>
          {project.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              style={styles.imageWrapper}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <img
                src={image.src}
                alt={`${project.title} - ${index + 1}`}
                style={styles.image}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.backgroundColor = "#f5f5f5";
                  e.target.parentElement.style.minHeight = "500px";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* More Projects Section */}
      <div style={styles.moreProjects}>
        <h2 style={styles.moreProjectsTitle}>MORE PROJECTS</h2>
        <PortfolioGrid size="small" excludeId={project.id} centered />
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 60px",
    zIndex: 1000,
    boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
  },
  navItem: {
    fontSize: "16px",
    fontWeight: 300,
    color: "#000",
    cursor: "pointer",
    letterSpacing: "0.5px",
    transition: "opacity 0.3s ease",
  },
  navCenter: {
    fontSize: "24px",
    fontFamily: '"Gloved", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    color: "#000",
    letterSpacing: "0.5px",
    cursor: "pointer",
  },
  contentWrapper: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 60px",
  },
  projectInfo: {
    paddingTop: "160px",
    paddingBottom: "60px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: 300,
    marginBottom: "12px",
    letterSpacing: "0.5px",
  },
  subtitle: {
    fontSize: "13px",
    color: "#888",
    fontWeight: 300,
  },
  gallery: {
    display: "flex",
    flexDirection: "column",
    gap: "80px",
    paddingBottom: "120px",
  },
  imageWrapper: {
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  moreProjects: {
    borderTop: "1px solid #eee",
    paddingTop: "80px",
    paddingBottom: "100px",
  },
  moreProjectsTitle: {
    fontSize: "13px",
    fontWeight: 400,
    color: "#000",
    marginBottom: "40px",
    letterSpacing: "1px",
    textAlign: "center",
  },
  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: "20px",
  },
  backButton: {
    fontSize: "13px",
    color: "#000",
    background: "none",
    border: "1px solid #ddd",
    padding: "10px 20px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
};

export default ProjectDetail;
