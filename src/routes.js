import { Navigate, createBrowserRouter } from "react-router-dom";
import News from "./components/News";
import Layout from "./components/layouts/Layout";
import Jobs from "./components/Jobs";
import Asks from "./components/Asks";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout children={<News />} />
    },
    {
        path: "/news",
        element: <Layout children={<News />} /> 
    },
    {
        path: "/jobs",
        element: <Layout children={<Jobs />} />
    },
    {
        path: "/asks",
        element: <Layout children={<Asks />} />
    }
]);