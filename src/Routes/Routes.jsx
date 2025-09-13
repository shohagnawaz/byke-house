import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Byke from "../pages/Byke/Byke/Byke";
import Order from "../pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "byke",
            element: <Byke></Byke>
        },
        {
            path: "order",
            element: <Order></Order>
        }        
    ]
  },
]);

export default router;