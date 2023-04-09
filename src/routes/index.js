import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/catalog/:category",
        element: <Catalog />,
        errorElement: <h1>Error</h1>
    },
]);

export default router;
