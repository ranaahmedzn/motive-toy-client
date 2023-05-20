import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SecondaryLayout from "../layouts/SecondaryLayout/SecondaryLayout";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: "/toys",
        element: <SecondaryLayout />,
        children: [
            {
                path: 'all-toys',
                element: <AllToys />
            },
            {
                path: 'add-toy',
                element: <AddAToy />
            },
            {
                path: 'my-toys',
                element: <MyToys />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]);

export default router;