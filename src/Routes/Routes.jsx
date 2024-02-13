import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/Shared/NotFound/NotFound";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import ContactUs from "../pages/ContactUs/ContactUs";
import OurCourse from "../pages/OurCourse/OurCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'our-course',
        element: <OurCourse></OurCourse>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);