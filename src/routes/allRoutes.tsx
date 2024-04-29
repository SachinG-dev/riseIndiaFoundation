import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
import { AboutUs } from "../pages/AboutUs";
import { DonationAndTaxBenefits } from "../pages/DonationAndTaxBenefits";
import { JoinUs } from "../pages/JoinUs";
import { OurWork } from "../pages/OurWork";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/donation-and-tax-benefits",
    element: <DonationAndTaxBenefits />,
  },
  {
    path: "/join-us",
    element: <JoinUs />,
  },
  {
    path: "/our-work",
    element: <OurWork />,
  },
]);
