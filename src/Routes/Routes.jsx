import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewDeatils from "../Pages/ViewDeatils";
import BookConfrom from "../Pages/BookConfrom";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../Pages/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/services',
        element: <AllServices/>
      },
      {
        path: "/viewdeatils/:id",
        element: (
          <PrivateRoute>
            <ViewDeatils />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookconfirm/:id",
        element: <BookConfrom />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;