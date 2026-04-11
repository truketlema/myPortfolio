import line3 from "../assets/line3.png";
export default function Projects() {
  return (
    <div className="text-white py-10 overflow-hidden">
      <div className="flex place-items-baseline gap-4">
        <h2 className="text-3xl mb-6">
          <span className="text-[#c778dd]">#</span>projects
        </h2>
        <img src={line3} alt="line3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="bg-[#1a1a1a]  rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold my-3 ml-6">My Poetry</h3>

          <iframe
            src="https://avril-b6c4c.web.app/"
            className="w-full h-[250px] mb-4 rounded"
          ></iframe>

          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/truketlema/MyPoetry"
              className=" ml-2 border border-gray-700 px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              GitHub
            </a>
            <a
              href="https://avril-b6c4c.web.app/"
              className=" ml-2 border border-[#c778dd] px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              Live
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-700 lg:hidden">
          <h3 className="text-xl font-semibold my-3 ml-6">Movie App</h3>

          <iframe
            src="https://movie-app-t.netlify.app/"
            className="w-full h-[250px] mb-4 rounded "
          ></iframe>
          <div className="flex gap-4 px-6 pb-2">
            {" "}
            <a
              href="https://github.com/truketlema/My_Movie_App"
              className=" ml-2 border border-gray-700 px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              GitHub
            </a>
            <a
              href="https://movie-app-t.netlify.app/"
              className=" ml-2 border border-[#c778dd] px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              Live
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold my-3 ml-6">RippleUp</h3>

          <iframe
            src="https://rippleup.netlify.app/"
            className="w-full h-[250px] mb-4 rounded"
          ></iframe>

          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/truketlema/GDG_HACKATON_RIPPLEUP"
              className=" ml-2 border border-gray-700 px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              GitHub
            </a>
            <a
              href="https://rippleup.netlify.app/"
              className=" ml-2 border border-[#c778dd] px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold my-3 ml-6">RR Travel Website</h3>

          <iframe
            src="https://rebel-rover-tt.netlify.app/"
            className="w-full h-[250px] mb-4 rounded"
          ></iframe>

          <div className="flex gap-4 mb-2">
            <a
              href="https://github.com/truketlema/gdg_capistone_rrtravelwebsite"
              className=" ml-2 border border-gray-700 px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              GitHub
            </a>
            <a
              href="https://rebel-rover-tt.netlify.app/"
              className=" ml-2 border border-[#c778dd] px-3 py-1 transition-all duration-200 hover:border-[#c778dd] hover:text-black hover:bg-[#c778dd]"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
