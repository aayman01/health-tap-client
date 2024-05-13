import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewDeatils from "../Pages/ViewDeatils";
import BookConfrom from "../Pages/BookConfrom";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../Pages/AllServices";
import AddServices from "../Pages/AddServices";
import ProviderViewDeatils from "../Pages/ProviderViewDeatils";
import ManageService from "../Pages/ManageService";
import ErrorPage from "../Pages/ErrorPage";
import UpdateProviderForm from "../Pages/UpdateProviderForm";
import BookedService from "../Pages/BookedService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
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
      {
        path: "/providerViewDeatils/:id",
        element: (
          <PrivateRoute>
            <ProviderViewDeatils />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServiceProvider/${params.id}`),
      },
      {
        path: "/manageservice",
        element: (
          <PrivateRoute>
            <ManageService />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateprovider/:id",
        element: (
          <PrivateRoute>
            <UpdateProviderForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServiceProvider/${params.id}`),
      },
      {
        path: "/bookedservice",
        element: (
          <PrivateRoute>
            <BookedService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;