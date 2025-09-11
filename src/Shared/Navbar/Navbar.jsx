import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center text-black py-4 px-8 md:px-32 bg-white drop-shadow-md"> 
                <Link to="/">
                    <p className="btn font-semibold hover:scale-120 transition-all p-3 hover:bg-sky-400 hover:text-white rounded-md">Byke-House</p>                    
                </Link>

                <ul className="hidden xl:flex items-center gap-10 font-semibold text-base">
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                        <Link to="/byke">Byke</Link>
                    </li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                        <Link to="/order">Order</Link>
                    </li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <div className="relative hidden md:flex items-center justify-center gap-3">
                    <FaSearch className="absolute left-3 text-xl text-gray-500"></FaSearch>
                    <input type="text" placeholder="Search..." className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" />
                </div>

                <GiHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden block text-5xl cursor-pointer"></GiHamburgerMenu>

                <div className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                        <Link to="/byke">Byke</Link>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                        <Link to="/order">Order</Link>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            </div>            
        </>
    );
};

export default Navbar;