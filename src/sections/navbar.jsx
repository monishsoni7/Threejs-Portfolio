// import React from 'react'

import {useState} from "react";
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const NavItems = () => {
        return (
          <ul className="nav-ul">
              {navLinks.map(({id,name,href}) => (
                  <li key={id} className="nav-li">
                      <a href={href} className="nav-link_a">{name}</a>
                  </li>
              ))}
          </ul>
        )
    }
    const [isOpen, setIsOpen] = useState(false)
    const togglemenu = () => setIsOpen((prevIsopen)=> !prevIsopen )

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
<div className="flex justify-between items-center py-3 mx-auto c-space">
    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
        Monish</a>
    <button onClick={togglemenu} className="text-neutral-400 focus:outline-none text-xl hover:text-white sm:hidden flex" aria-label="toggle menu">
        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
        alt="toggle menu" className="w-6 h-6"/>
    </button>
    <nav className="hidden sm:flex">
<NavItems/>
    </nav>
</div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
<NavItems/>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
