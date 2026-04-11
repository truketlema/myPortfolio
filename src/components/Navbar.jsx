import React, { useState } from "react";
import { GiButterfly } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar flex px-6">
      <div className="navbar-content flex justify-between items-center w-full py-4">
        {" "}
        {/* Logo / Title */}
        <h1 className="navbar-title text-lg font-fira">
          <GiButterfly className="text-3xl text-white inline mr-2" />
          Truket
        </h1>
        <div className="flex justify-between  ">
          {/* Hamburger Button (mobile only) */}
          <div>
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden text-2xl text-white ${open ? "pr-24" : ""}`}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div></div>
          {/* Links */}
          <ul
            className={`
  ${open ? "flex" : "hidden"}
  flex-col gap-4

  absolute right-4 
  w-32

  bg-[#2a2a2a]/70 backdrop-blur-md
  p-4 rounded-lg shadow-lg
  z-50

  md:static md:flex md:flex-row md:gap-8
  md:bg-transparent md:backdrop-blur-none md:p-0 md:shadow-none md:rounded-none md:w-auto
`}
          >
            <li>
              <a href="/">
                <span className="text-[#c778dd]">#</span>home
              </a>
            </li>
            <li>
              <a href="/about">
                <span className="text-[#c778dd]">#</span>about-me
              </a>
            </li>
            <li>
              <a href="/contact">
                <span className="text-[#c778dd]">#</span>contacts
              </a>
            </li>

            <select className="bg-[#1b1b1b] text-white hover:text-[#c778dd] border-none">
              <option value="eng">EN</option>
              <option value="amh">AM</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
}
