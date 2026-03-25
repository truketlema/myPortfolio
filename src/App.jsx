import "./App.css";
import Navbar from "./components/Navbar";
import line from "./assets/Line 1.png";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import rectangle1 from "./assets/rectangle1.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import rectangle2 from "./assets/rectangle2.png";
import dots2 from "./assets/dots2.png";
function App() {
  return (
    <>
      <img src={line} className="absolute top-0  left-6 z-0" />
      <a
        href="https://github.com/truketlema"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="absolute top-52 left-3 text-2xl text-white hover:text-[#c778dd] cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/truket-lema-707b19316/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="absolute top-60 left-3 text-2xl text-white hover:text-[#c778dd]" />
      </a>

      <Navbar />
      <Hero />
      <div className="justify-end absolute right-0 -bottom-24 z-0">
        <img src={rectangle1} alt="rectangle1" className="justify-end w-16" />
      </div>
      <Projects />

      <img
        src={rectangle2}
        alt="rectangle2"
        className="absolute right-0 top-full mt-[510px] z-0"
      />
      <img
        src={dots2}
        alt="dots2"
        className="absolute left-0 top-full mt-[240px] z-0"
      />
    </>
  );
}

export default App;
