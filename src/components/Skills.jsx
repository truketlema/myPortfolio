import line3 from "../assets/line3.png";
import Dots from "../assets/Dots.png";
import rectangle4 from "../assets/rectangle4.png";
import line2 from "../assets/line2.png";
import rectangle3 from "../assets/rectangle3.png";

export default function Skills() {
  return (
    <div className="flex flex-col items-start">
      {/* Title */}
      <div className="flex place-items-baseline gap-4">
        <h2 className="text-3xl mb-6">
          <span className="text-[#c778dd]">#</span>skills
        </h2>
        <img src={line3} alt="line3" />
      </div>

      {/* Main Section */}
      <div className="flex w-full gap-10 ">
        {/* LEFT SIDE → Images */}
        <div className="relative hidden md:block md:w-1/2 h-[300px]">
          <img src={Dots} className="absolute top-4 left-0 w-16" />
          <img src={rectangle3} className="absolute top-0 left-52" />
          <img src={line2} className="absolute w-24 top-40 left-4" />
          <img src={Dots} className="absolute top-32 left-40 w-16" />
          <img src={rectangle4} className="absolute top-48 left-64" />
        </div>

        {/* RIGHT SIDE → Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:w-1/2">
          {/* Languages */}
          <div className="border border-gray-400 ">
            <h3 className="mb-2 text-white px-3">Languages</h3>
            <hr />
            <p className="text-gray-400 text-sm p-3">
              HTML CSS
              <br />
              JavaScript
              <br />
              C++ (Intermediate)
              <br />
              Java (Intermediate)
            </p>
          </div>

          {/* Frameworks */}
          <div className="border border-gray-400 ">
            <h3 className="mb-2 text-white px-3">Frameworks</h3>
            <hr />
            <p className="text-gray-400 text-sm p-3">
              React.js
              <br />
              Next.js
              <br />
              Tailwind CSS
            </p>
          </div>

          {/* Databases */}
          <div className="border border-gray-400 ">
            <h3 className="mb-2 text-white px-3">Databases</h3>
            <hr />
            <p className="text-gray-400 text-sm p-3">MySQL (Intermediate)</p>
          </div>

          {/* Tools */}
          <div className="border border-gray-400">
            <h3 className="mb-2 text-white px-3">Tools</h3>
            <hr />
            <p className="text-gray-400 text-sm p-3">
              Git
              <br />
              GitHub
              <br />
              VS Code
            </p>
          </div>

          {/* Other */}
          <div className="border border-gray-400 ">
            <h3 className="mb-2 text-white px-3">Other</h3>
            <hr />
            <p className="text-gray-400 text-sm p-3">
              Responsive Design
              <br />
              Problem Solving
              <br />
              Debugging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
