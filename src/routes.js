import { Navigate, createBrowserRouter } from "react-router-dom";
import NewsBoard from "./components/NewsBoard";
import Layout from "./components/Layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout children={<NewsBoard />} />
    },
    {
        path: "/news",
        element: <Layout children={<NewsBoard />} /> 
    }
]);