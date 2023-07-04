import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Route, Routes } from "react-router-dom";
import Spark from "./projects/Spark";
import ServicesApp from "./projects/ServicesApp";
import Chatapp from "./projects/Chatapp";
import Media from "./components/Media";

// import './index.css'


function App() {

  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
  return (
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
