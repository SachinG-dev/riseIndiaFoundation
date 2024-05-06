import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";

import { Layout } from "../components/layout";
import { DonationAndTaxBenefitsInfoSection } from "../components/molecule/DonationAndTaxBenefitsInfoSection/DonationAndTaxBenefitsInfoSection";
import { DonationForm } from "../components/molecule/DonationForm/DonationForm";
import websiteData from "../websiteData/data.json";

export function DonationAndTaxBenefits() {
  const donationAndTaxBenefitsData = websiteData["DonationAndTaxBenefits"];
  const heroBannerHeading = (
    <h1>
      Let's Make A <span className="font-green">Difference</span>
    </h1>
  );
  const url = "/about-us";
  console.log({ donationAndTaxBenefitsData });
  return (
    <Layout footerCta={true}>
      <HeroBanner
        heading={heroBannerHeading}
        description={donationAndTaxBenefitsData["heroBanner"]["description"]}
        url={url}
        backgroundImage="../../assets/images/get-involve-hero.webp"
      />
      <DonationAndTaxBenefitsInfoSection />
      <DonationForm />
    </Layout>
  );
}
