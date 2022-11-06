import { createBrowserRouter } from "react-router-dom";
import SinglePage from "../Pages/SinglePage/SinglePage";
import HomePage from '../Pages/HomePage/HomePage.jsx'
import Layout from "../Components/Layout/Layout";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: < HomePage/>,
            },
            {
                path: "/Price",
                element: <SinglePage  />,
            },
        ]
    }
    
]);

export default router