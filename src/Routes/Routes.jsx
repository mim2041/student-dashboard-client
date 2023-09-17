import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Form from "../pages/ExamForm/Form/Form";
import Register from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

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