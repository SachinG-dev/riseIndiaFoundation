import { HeroBanner } from "../components/organism/HeroBanner/HeroBanner";

import { Layout } from "../components/layout";
import { DonationAndTaxBenefitsInfoSection } from "../components/molecule/DonationAndTaxBenefitsInfoSection/DonationAndTaxBenefitsInfoSection";
import { DonationForm } from "../components/molecule/DonationForm/DonationForm";

export function DonationAndTaxBenefits() {
  return (
    <Layout>
      <HeroBanner />
      <DonationAndTaxBenefitsInfoSection />
      <DonationForm />
    </Layout>
  );
}
