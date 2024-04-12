import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*", // Catch-all route
    element: <Navigate to="/login" />, // Redirect to the login page if unauthenticated
  },
]);
