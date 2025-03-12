import { useState } from "react";
import { navLinks } from "../index.js";

const NavItems = () => {
    return (
        <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a"
                    onClick={()=>{}}>    
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className="text-blue-600 fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto">
                    <a href='/' className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Indy's IN3D Canvas
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label={isOpen ? "Close menu" : "Open menu"}>
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6 block" />
                    </button>
                    <nav className="hidden sm:flex">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5"> 
                    <NavItems />
                </nav>
            </div>
        </header>
    ); 
};

export default NavBar;
