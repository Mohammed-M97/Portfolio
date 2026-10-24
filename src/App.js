import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

// Direct imports for testing
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Media from "./components/Media";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/projects/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
