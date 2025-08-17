import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Media = lazy(() => import("./components/Media"));
const Spark = lazy(() => import("./projects/Spark"));
const ServicesApp = lazy(() => import("./projects/ServicesApp"));
const Chatapp = lazy(() => import("./projects/Chatapp"));
const Toyzer = lazy(() => import("./projects/Toyzer"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen background">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-600"></div>
  </div>
);


function App() {

  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
  return (
    <ErrorBoundary>
      <div>
        <Navbar/>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/projects/Spark" element={<Spark />} />
            <Route path="/work/projects/ServicesApp" element={<ServicesApp />} />
            <Route path="/work/projects/Chatapp" element={<Chatapp />} />
            <Route path="/work/projects/Toyzer" element={<Toyzer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
