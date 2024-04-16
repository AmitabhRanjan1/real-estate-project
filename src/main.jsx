import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import UserProfile from './Components/UserProfile/UserProfile';
import CardEstate from './Components/Estate/CardEstate';
import Luxury from './Components/LatestLuxury/Luxury';
import NotFound from './Pages/NotFound';
import Contact from './Components/Contact/Contact';
import Newsletter from './Components/Newsletter/Newsletter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/estate",
        element: <CardEstate></CardEstate>
      },
      {
        path: "/blog",
        element: <Luxury></Luxury>
      },
      {
        path: "/newsletter",
        element: <Newsletter></Newsletter>
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
