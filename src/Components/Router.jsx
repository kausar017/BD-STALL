import { createBrowserRouter } from "react-router-dom";
import Error from "./Sheared/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Bannar from "./pags/Bannar/Bannar";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Bannar />
            }
        ]
    }
]);

export default Router;