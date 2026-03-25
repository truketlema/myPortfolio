export default function Navbar() {
  return (
    <nav className="navbar flex  ">
      <div className=" navbar-content flex justify-between  w-full py-4">
        <h1 className="navbar-title text-lg font-fira">Truket</h1>
        <ul className="navbar-links flex gap-8">
          <li>
            <a href="/">
              <span className="text-[#c778dd]">#</span>home
            </a>
          </li>
          <li>
            <a href="/about" className="">
              <span className="text-[#c778dd]">#</span>
              about-me
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="text-[#c778dd]">#</span>contacts
            </a>
          </li>
          <select className="bg-[#1b1b1b] text-white border-none">
            <option value="eng" className="border-none">
              EN
            </option>
            <option value="amh" className="border-none">
              AM
            </option>
          </select>
        </ul>
      </div>
    </nav>
  );
}
