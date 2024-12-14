import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Navbar p-1 md:p-3 lg:p-5 bg-primary-color text-white flex justify-between items-center w-full">
    
            {/* Navbar Left - Logo and Links */}
            <div className="NavbarCenter flex flex-grow gap-3 md:gap-5">
                <Link to="/" className="font-bold text-lg">TestHive</Link>
                {/* Links for larger screens, stack them vertically on smaller screens */}
                <div className="hidden sm:flex gap-3 md:gap-5">
                    <Link to="/projects">Projects</Link>
                    <Link to="/testcases">Test Cases</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
    
            {/* Mobile Hamburger Button (visible on small screens) */}
            <div className="sm:hidden flex items-center mr-4">
                <button className="text-white" onClick={toggleMenu}>
                    <i className={`fas fa-bars text-2xl ${isMenuOpen ? 'rotate-90' : ''} transition-transform`}></i>
                </button>
            </div>
    
            {/* Mobile Menu - Hidden by default and toggled with the hamburger icon */}
            <div className={`sm:hidden ${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-primary-color p-4`}>
                <div className="flex flex-col gap-3">
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                    <Link to="/testcases" onClick={toggleMenu}>Test Cases</Link>
                    <Link to="/users" onClick={toggleMenu}>Users</Link>
                    <Link to="/settings" onClick={toggleMenu}>Settings</Link>
                </div>
            </div>
    
            {/* Navbar Right - Dark mode toggle and User link */}
            <div className="NavbarRight flex items-center gap-5">
                <header className="bg-gray-100 dark:bg-gray-800 ml-4">
                    <DarkModeToggle />
                </header>
                <a href="#"> User</a>
            </div>
    
        </div>
    );
}
