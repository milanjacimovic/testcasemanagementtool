import { Outlet, Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ children }) {
    return (
        <div className="Navbar p-5 bg-primary-color text-white flex justify-between items-center w-full">

            <div className="NavbarCenter flex basis-5/7 gap-5">
                <Link to="/">TestHive</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/testcases">Test Cases</Link>
                <Link to="/users">Users</Link>
                <Link to="/settings">Settings</Link>
            </div>
            <Outlet />
            <div className="NavbarRight flex flex-row basis 1/7 items-center gap-5">
                <div>
                    <header className="bg-gray-100 dark:bg-gray-800">
                        <DarkModeToggle />
                    </header>
                    <main>{children}</main>
                </div>
                <a href="#"> User</a>
            </div>
        </div>
    )
}

