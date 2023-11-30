import { createBrowserRouter } from "react-router-dom";
import { Adminlayout, Homelayout } from "../Components";
import Homepage from "../Pages/Homepage";
import Home from "../Pages/Admindashboardpage/Home";
import Stafflayout from "../Components/Layout/Stafflayout";
import Staffhome from "../Pages/Staffdashboardpage/Staffhome";
import TransactionHistory from "../Pages/Admindashboardpage/TransactionHistory";
import Staffs from "../Pages/Admindashboardpage/Staffs";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children: [{
            index: true,
            element: <Homepage />
        }]
    },
    {
        path: "/admin",
        element: <Adminlayout />,
        children: [
            {
                index: true,
                element: <Home />
            }, 
            {
                path: "transaction-history",
                element:<TransactionHistory/>
            },
            {
                path:"staffs",
                element:<Staffs/>
            }
        ]
    },
    {
        path: "/staff",
        element: <Stafflayout />,
        children: [
            {
                index: true,
                element: <Staffhome />
            }
        ]
    }
])