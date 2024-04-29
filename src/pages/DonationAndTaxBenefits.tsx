import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";

import { Layout } from "../components/layout";
import { DonationAndTaxBenefitsInfoSection } from "../components/molecule/DonationAndTaxBenefitsInfoSection/DonationAndTaxBenefitsInfoSection";
import { DonationForm } from "../components/molecule/DonationForm/DonationForm";
import websiteData from "../websiteData/data.json";

export function DonationAndTaxBenefits() {
  const donationAndTaxBenefitsData = websiteData["DonationAndTaxBenefits"];
  const heroBannerHeading = (
    <h1>
      Let's Make A <span className="text-green">Difference</span>
    </h1>
  );
  console.log({ donationAndTaxBenefitsData });
  return (
    <Layout>
      <HeroBanner
        heading={heroBannerHeading}
        description={donationAndTaxBenefitsData["heroBanner"]["description"]}
      />
      <DonationAndTaxBenefitsInfoSection />
      <DonationForm />
    </Layout>
  );
}
