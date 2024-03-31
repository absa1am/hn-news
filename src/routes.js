import { Navigate, createBrowserRouter } from "react-router-dom";
import News from "./components/News";
import Layout from "./components/Layout";
import Jobs from "./components/Jobs";

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
    }
]);