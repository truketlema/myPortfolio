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
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" px-4 sm:px-6 md:px-16 xl:px-[120px] overflow-hidden">
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
        <img
          src={rectangle1}
          alt="rectangle1"
          className="hidden md:block justify-end w-16"
        />
      </div>
      <Projects />
      <img
        src={rectangle2}
        alt="rectangle2"
        className="absolute xl:right-0 hidden md:block top-full mt-[1200px] md:mt-[510px] z-0 oveflow-hidden"
      />
      <img
        src={dots2}
        alt="dots2"
        className="hidden md:block absolute left-0 top-full mt-[240px] z-0"
      />
      <Skills />
      <div className="relative">
        <About />
        <img
          src={rectangle2}
          alt="rectangle2"
          className="absolute left-[-90px] md:left-[-80px] xl:left-[-120px] bottom-48 z-0 transform -scale-x-100"
        />
        <img
          src={Dots}
          alt="dots"
          className="absolute top-96 sm:top-28 lg:right-80  sm:right-44 md:right-72 xl:right-56 w-16"
        />
        <img
          src={Dots}
          alt="dots"
          className="absolute top-[510px] sm:top-[210px] md:top-[270px] right-56 sm:right-6 w-16  -scale-x-125"
        />
        <img
          src={Dots}
          alt="dots"
          className="absolute top-[590px] sm:top-[320px] md:top-[400px] -right-[-50px] sm:right-[-60px] xl:right-[-120px] w-16 -scale-y-125 "
        />
      </div>
      <br /> <br />
      <div className="mx-[-120px]">
        <hr className="border-t-2 border-gray-300 mt-8 mb-6" />
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
