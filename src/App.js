import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
    return (
        <div>
            <NewsBoard />
        </div>
    );
}

export default App;