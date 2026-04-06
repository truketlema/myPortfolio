import line3 from "../assets/line3.png";
export default function Contacts() {
  return (
    <div className="flex flex-col gap-6 mt-28">
      <div className="flex place-items-baseline gap-4">
        <h2 className="text-3xl mb-6">
          <span className="text-[#c778dd]">#</span>contacts
        </h2>
        <img src={line3} alt="line3" />
      </div>

      <p className="text-gray-400 mb-4">
        I'm open to new opportunities and collaborations. Feel free to reach out
        to me through any of the platforms below!
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:truketlema9489@gmail.com"
          className="text-gray-400 hover:text-[#c778dd]"
        >
          truketlema9489@gmail.com
        </a>
      </div>
    </div>
  );
}
