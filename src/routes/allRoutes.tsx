import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);
