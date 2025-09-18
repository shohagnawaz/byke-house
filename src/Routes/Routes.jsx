import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Byke from "../pages/Byke/Byke/Byke";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import Cart from "../components/Dashboard/Cart";

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
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        }      
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "cart",
            element: <Cart></Cart>
        }
    ]
  }
]);

export default router;