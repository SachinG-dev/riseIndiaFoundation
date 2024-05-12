import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
import { AboutUs } from "../pages/AboutUs";
import { DonationAndTaxBenefits } from "../pages/DonationAndTaxBenefits";
import { Volunteer } from "../pages/Volunteer";
import { OurWork } from "../pages/OurWork";
import { Internship } from "../pages/Internship";
import { Campaign } from "../pages/Campaign";
import { CampaignEducation } from "../pages/CampaignEducation";
import { CampaignHealth } from "../pages/CampaignHealth";
import { CampaignSkill } from "../pages/CampaignSkill";
import { CampaignAdvocacy } from "../pages/CampaignAdvocacy";

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
    path: "/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/internship",
    element: <Internship />,
  },
  {
    path: "/our-work",
    element: <OurWork />,
  },
  {
    path: "/campaign",
    element: <Campaign />,
  },
  {
    path: "/campaign/education",
    element: <CampaignEducation />,
  },
  {
    path: "/campaign/health",
    element: <CampaignHealth />,
  },
  {
    path: "/campaign/skill",
    element: <CampaignSkill />,
  },
  {
    path: "/campaign/advocacy",
    element: <CampaignAdvocacy />,
  },
]);
