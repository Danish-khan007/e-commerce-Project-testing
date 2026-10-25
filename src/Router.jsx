import { createBrowserRouter } from "react-router";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import Cart from "./Pages/cart";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/about";
import Services from "./Pages/services";

const router = createBrowserRouter([
    {
        path: "/home",
        element: (
            <>
                <Navbar />
                <Home />
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <Navbar />
                <AboutUs />
            </>
        ),
    },
    {
        path: "/services",
        element: (
            <>
                <Navbar />
                <Services />
            </>
        ),
    },
    {
        path: "/cart",
        element: (
            <>
                <Navbar />
                <Cart />
            </>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;