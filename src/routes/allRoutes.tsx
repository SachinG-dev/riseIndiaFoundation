import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
import { AboutUs } from "../pages/AboutUs";
export const router = createBrowserRouter([
  {
    path: "/riseIndiaFoundation",
    element: <Home />,
  },
  {
    path: "/riseIndiaFoundation/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/riseIndiaFoundation/about-us",
    element: <AboutUs />,
  },
]);
