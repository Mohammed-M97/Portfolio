import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

// Direct imports for testing
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Social from "./components/Social";
import ProjectPage from "./projects/ProjectPage";

function App() {
  const { pathname } = useLocation();

  // Start each page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
  return (
    <ErrorBoundary>
      <div>
        <Navbar/>
        {/* Leave room for the fixed social bar on large screens */}
        <main className="lg:pl-[60px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/projects/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<Social />} />
          <Route path="/media" element={<Navigate to="/social" replace />} />
        </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
