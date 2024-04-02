import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        
        if (storedDarkMode !== null && storedDarkMode !== undefined) {
            setDarkMode(storedDarkMode);
        }

        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <div className={`${darkMode ? "bg-dark text-light" : ""}`} data-bs-theme={darkMode ? "dark" : "light"}>
            <Navbar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {children}
        </div>
    );
}
