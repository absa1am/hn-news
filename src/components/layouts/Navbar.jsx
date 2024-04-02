import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar({ isDarkMode, toggleDarkMode }) {
    const [darkMode, setDarkMode] = useState(isDarkMode);

    const handleDarkModeToggle = () => {

        setDarkMode(!darkMode);
        
        toggleDarkMode();
    };

    return (
        <nav className="navbar navbar-expand-lg bg-warning" data-bs-theme={darkMode && "dark"}>
            <div className="container-fluid">
                <a className="navbar-brand border p-1" href="/">HN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/jobs">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/asks">Asks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/show">Show</a>
                        </li>
                        <div className="m-2" onClick={handleDarkModeToggle}>
                            {darkMode ? <MdLightMode fontSize={25} /> : <MdDarkMode fontSize={25} />}
                        </div>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;