import { useState } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? "bg-dark text-light" : ""}`} data-bs-theme={darkMode ? "dark" : "light"}>
            <Navbar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {children}
        </div>
    );
}