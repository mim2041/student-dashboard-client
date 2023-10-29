import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Form from "../pages/ExamForm/Form/Form";
import Register from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Result from "../pages/Result/Result/Result";
import PrivateRoute from "./PrivateRoute";
import Testimony from "../pages/Testimony/Testimony";

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
                path: "exam_form",
                element: <Form></Form>
            },
            {
                path: "/result",
                element: <PrivateRoute><Result></Result></PrivateRoute>
            },
            {
                path: "/testimony",
                element: <PrivateRoute><Testimony></Testimony></PrivateRoute>
            },
            {
                path: "/signUp",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ],
        
    }
]);

export default router;