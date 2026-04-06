import "./App.css";
import Navbar from "./components/Navbar";
import line from "./assets/Line 1.png";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import rectangle1 from "./assets/rectangle1.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import rectangle2 from "./assets/rectangle2.png";
import dots2 from "./assets/dots2.png";
import Skills from "./components/Skills";
import About from "./components/About";
import Dots from "./assets/Dots.png";
import line4 from "./assets/line4.png";
import Contacts from "./components/Contacts";
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
      <a href="mailto:truketlema9489@gmail.com">
        <FaEnvelope className="absolute top-[270px] left-3 text-2xl text-white hover:text-[#c778dd] cursor-pointer" />
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
      <Skills />
      <div className="relative">
        <About />
        <img
          src={rectangle2}
          alt="rectangle2"
          className="absolute left-[-120px] bottom-48  z-0 transform -scale-x-100"
        />
        <img src={Dots} alt="dots" className="absolute top-28 right-56 w-16" />
        <img
          src={Dots}
          alt="dots"
          className="absolute top-[270px] right-6 w-16  -scale-x-125"
        />
        <img
          src={Dots}
          alt="dots"
          className="absolute top-[350px] right-[-120px] w-16 -scale-y-125"
        />
        <img
          src={line4}
          alt="line4"
          className="absolute bottom-[-3px] right-0 transform -scale-y-50 "
        />
      </div>
      <br /> <br />
      {/* <Contacts /> */}
      <hr className="width-full" />
      <h1>Truket</h1>
    </>
  );
}

export default App;
