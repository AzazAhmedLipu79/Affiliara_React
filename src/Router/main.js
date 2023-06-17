import { createBrowserRouter } from "react-router-dom";
import Home from "../Views/Home";
import Login from "../Views/Auth/Login";
import Dashboard from "../Views/Dashboard/Dashboard";

const ManageRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
]);
console.log(ManageRoute);
export default ManageRoute;
