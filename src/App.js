import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
