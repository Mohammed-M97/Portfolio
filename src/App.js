import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

// Direct imports for testing
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Media from "./components/Media";
import Spark from "./projects/Spark";
import ServicesApp from "./projects/ServicesApp";
import Chatapp from "./projects/Chatapp";
import Toyzer from "./projects/Toyzer";
import Omar from "./projects/Omar";
import AdminDashboard from "./projects/AdminDashboard";

function App() {

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
          <Route path="/work/projects/Spark" element={<Spark />} />
          <Route path="/work/projects/ServicesApp" element={<ServicesApp />} />
          <Route path="/work/projects/Chatapp" element={<Chatapp />} />
          <Route path="/work/projects/Toyzer" element={<Toyzer />} />
          <Route path="/work/projects/Omar" element={<Omar />} />
          <Route path="/work/projects/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
