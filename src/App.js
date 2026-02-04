import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
