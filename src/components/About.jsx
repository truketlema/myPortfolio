import line3 from "../assets/line3.png";
import image2 from "../assets/image2.png";
import { ArrowRight } from "lucide-react";
import line4 from "../assets/line4.png";
export default function About() {
  return (
    <>
      <div className="flex gap-48 mt-28 ">
        <p className="text-gray-400">
          <div className="flex place-items-baseline gap-4">
            <h2 className="text-3xl mb-6 text-white">
              <span className="text-[#c778dd]">#</span>about
            </h2>
            <img src={line3} alt="line3" />
          </div>
          <br />
          Hello, I’m Truket Lema
          <br />
          <br />
          I’m a Software Engineering student and passionate front-end developer
          based in Ethiopia. I build responsive websites from scratch and turn
          ideas into clean, modern, and user-friendly web experiences using
          React and modern web technologies. <br /> <br />
          Over the past year, I’ve worked on multiple projects through
          hackathons, mentorship programs, and personal practice, strengthening
          my skills in frontend development while growing into full-stack
          development with Node.js, Express, and MongoDB. I enjoy solving
          problems, structuring scalable UIs, and writing code that is simple,
          efficient, and meaningful. I’m constantly learning, exploring new
          tools, and improving my craft every day. My goal is not just to build
          websites, but to create digital experiences that are practical,
          accessible, and impactful.
          <br />
          <br />
          <button className="border border-[#c778dd] px-5 py-1 transition duration-300 hover:bg-[#c778dd] hover:text-black ">
            Read more <ArrowRight size={18} width={25} className="inline" />
          </button>
        </p>

        <img src={image2} alt="Truket Lema" className="w-[343px] h-[508px] " />
      </div>
    </>
  );
}
